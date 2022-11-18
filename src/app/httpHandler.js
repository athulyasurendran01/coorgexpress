import { serverURL } from "./Config"

export function httpGetService(url, id, page) {
    let pageStr = page ? `?page=${page}` : ''
    let idStr = id ? `?id=${id}` : ''
    let urlStr = url ? `/${url}` : '/index'
    const apiURL = `${serverURL}${urlStr}.php${pageStr}${idStr}`
    return fetch(`${apiURL}`)
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch(err => console.log(err))
}

export function httpMailService(data) {
    const apiURL = `${serverURL}/mail.php`
    return fetch(`${apiURL}`, {
        method: 'POST',
        body: data
    })
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch(err => console.log(err))
}

export function httpFilterGetService(url, page, option) {
    // let pageStr = page ? `?page=${page}` : ''
    let urlStr = url ? `/${url}` : '/index'
    const apiURL = `${serverURL}${urlStr}.php?${option}`
    return fetch(`${apiURL}`)
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch(err => console.log(err))
}

export function httpPostService(url, data) {
    const apiURL = url ? `${url}.json` : `home.json`
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