export const cards = async () => {
    return await fetch('http://localhost:8080/api/card')
        .then(async (response) => {return response.json()})
        .catch(err => console.log(err))
}
