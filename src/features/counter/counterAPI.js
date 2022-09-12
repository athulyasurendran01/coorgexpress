export function fetchCount(amount = 1) {
  const apiURL = 'https://www.coorgexpress.com/Recipes.json'
    return fetch(`${apiURL}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            return data
        })
        .catch(err => console.log(err))

  // return new Promise((resolve) =>
  //   setTimeout(() => resolve({ data: amount }), 500)
  // );
}
