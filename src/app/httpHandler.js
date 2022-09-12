import { serverURL } from "./Config"

export function httpGetService(url) {
    const apiURL = 'https://www.coorgexpress.com/home.json'
    return fetch(`${apiURL}`)
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch(err => console.log(err))
}

export function httpPostService(url, data) {
    const apiURL = `${serverURL}/${url}`
    fetch(apiURL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((data) => {
          console.log(data)
      })
      .catch(err => console.log(err))
    
}