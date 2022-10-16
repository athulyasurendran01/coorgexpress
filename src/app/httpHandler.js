import { serverURL } from "./Config"

export function httpGetService(url, id) {
    let idStr = id ? `/${id}` : ''
    let urlStr = url ? `/${url}` : '/home'
    const apiURL = `${serverURL}${urlStr}${idStr}.json`
    return fetch(`${apiURL}`)
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch(err => console.log(err))
}

export function httpPostService(url, data) {
    const apiURL = url ? `${url}.json`:`home.json`
    return fetch(`${serverURL}/${apiURL}`, {
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((data) => {
        return data
      })
      .catch(err => console.log(err))
}