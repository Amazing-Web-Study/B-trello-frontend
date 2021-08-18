export const cards : any = async () => { 
    await fetch('http://localhost:8000/api/card')
        .then(response => response.json())
        .then(response => console.log(response));
}
