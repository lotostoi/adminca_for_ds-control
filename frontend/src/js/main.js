const API = "/objects"

const form = document.getElementById('import-form')
const addbtn = document.getElementById('import')
const file = document.getElementById('csv-file')
const error = document.getElementById('import_error')


form.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (file.value.includes('.csv')) {
        error.innerHTML = ''
        const respons = await fetch(`${API}/add`, {
            method: "POST",
            body: new FormData(form)
        })
    } else {
        error.innerHTML = " No file or it has wrong type "
    }

})