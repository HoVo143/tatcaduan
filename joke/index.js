const btnEl = document.getElementById('btn')
const jokeEl = document.getElementById('joke')

const options = {
    method: "GET",
    headers: 
        "X-Api-key",
    
}

const apiURL = 'https://635a800e38725a1746c8002e.mockapi.io/:endpoint'
async function getJoke(){
    const response = await fetch (apiURL)
    const data = await response.json()

    jokeEl.innerText = data[0].joke
}
btnEl.addEventListener('click', getJoke)