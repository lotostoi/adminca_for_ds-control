const { Router } = require('express')
const path = require('path')
const router = Router()
const multer = require('multer')
const fs = require('fs')
const { db: configDB, BASE_URL } = require('../config/config')
const PouchDB = require('pouchdb')
PouchDB.plugin(require('pouchdb-find'))


const OBJECT = ['id_project', 'position', 'type', 'interactive', 'displayId', 'url']

const FILE_LINK = path.join(__dirname, '..', 'files', 'csv-file.csv')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', 'files'))
    },
    filename: function (req, file, cb) {
        cb(null, 'csv-file' + path.extname(file.originalname))
    }
})
let upload = multer({ storage: storage })

router.post(BASE_URL + 'add/objects', upload.single('file'), async (req, res) => {

    fs.readFile(FILE_LINK, "UTF-8", async (err, data) => {
        if (err) throw err
        try {
            data = data.split(/\n/gm).slice(1)
            data = getObjects(data)

            const tableObjects = new PouchDB(configDB.link + 'testDispl')
            const tableProjects = new PouchDB(configDB.link + 'tastProj')

            const { rows } = await tableProjects.allDocs({
                include_docs: true,
                attachments: true
            })

            const project = rows.find(({ id }) => id === data.project._id)

            if (project !== undefined) {
                const projectInDB = await tableProjects.get(project.id)
                projectInDB.displays = data.project.displays

                const { docs } = await tableObjects.find({
                    selector: { "displayId": { "$in": data.project.displays } },
                })

                await tableObjects.bulkDocs(docs.map(d => ({ ...d, _deleted: true })))

                tableProjects.put(projectInDB)
                tableObjects.bulkDocs({ docs: data.objects })

            } else {

                tableProjects.put(data.project)
                tableObjects.bulkDocs({ docs: data.objects })
            }
            res.json({ res: true })
        } catch (e) {
            console.log(e)
            res.json({ res: false })
        }

    })

})

module.exports = router

function getObjects(data) {
    let project = { _id: null, displays: [] }
    const objects = data.map(str => {
        let obj = {}
        OBJECT.forEach((f, i) => {
            const value = str.split(',')[i].replace('\r', '')
            if (f === 'interactive') {
                obj[f] = value === "TRUE" ? true : false
            } else if (f === 'id_project') {
                project._id = project._id ? project._id : value
            } else if (f === 'displayId') {
                if (!project.displays.find(d => d === value)) {
                    project.displays.push(value)
                }
                obj[f] = value
            } else {
                obj[f] = value
            }
        })
        return obj
    })
    return { project, objects }
}