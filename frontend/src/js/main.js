const API = "/objects"

const form = document.getElementById('import-form')
const addbtn = document.getElementById('import')
const file = document.getElementById('csv-file')
const error = document.getElementById('import_error')
const message = document.getElementById('import_message')


form.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (file.value.includes('.csv')) {
        error.innerHTML = ''
        const respons = await fetch(`${API}/add`, {
            method: "POST",
            body: new FormData(form)
        })
        const { res } = await respons.json()
        if (res) {
            message.style.display = "flex"
            form.reset()
            message.innerHTML = "The file was imported successfully"
            setTimeout(() => { message.style.display = "none" }, 4000)
        } else {
            error.innerHTML = " Error conncetion "
        }

    } else {
        error.innerHTML = " No file or it has wrong type "
    }

})