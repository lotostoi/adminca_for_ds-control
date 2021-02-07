
class Server {
  constructor(baseURL, options) {
    this.baseURL = baseURL
    this.options = options
  }
  _creatFromData(body) {
    const newBody = new FormData()
    if (typeof body === 'array') {
      body.forEach((param) => newBody.append(Object.keys(param)[0], param))
    }
    if (typeof body === 'object') {
      for (const key in body) {
        if (Object.hasOwnProperty.call(body, key)) {
          const element = body[key]
          newBody.append(key, element)
        }
      }
    }
    return newBody
  }
  _request(url, options = null) {
    const URL = this.baseURL + url
    return fetch(URL, options ? { ...this.options, ...options } : this.options)
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        throw new Error("Server's answer isn't correct...")
      })
      .catch((err) => console.error(err))
  }
  get(url) {
    let options = { method: 'GET' }
    return this._request(url, options)
  }
  delete(url) {
    let options = { method: 'DELETE' }
    return this._request(url, options)
  }
  post(url, body, formData = null) {
    const newBody = formData ? this._creatFromData(body) : body
    let options = {
      method: 'POST',
      body: newBody instanceof FormData ? newBody : JSON.stringify(body),
      headers : newBody instanceof FormData ? {} : {'Content-Type': 'application/json'},
    }
    return this._request(url, options)
  }
  put(url, body, formData = null) {
    const newBody = formData ? this._creatFromData(body) : body
    let options = {
      method: 'PUT',
      body: newBody instanceof FormData ? newBody : JSON.stringify(body),
      headers : newBody instanceof FormData ? {} : {'Content-Type': 'application/json'},
    }
    return this._request(url, options)
  }
}

const http = new Server(process.env.VUE_APP_BASE_URL, {})

export default http

