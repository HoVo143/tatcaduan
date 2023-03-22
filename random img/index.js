const btnEl = document.getElementById("btn")
const marvelContainerEl = document.querySelector(".marvel-container")
const marvelImgEl = document.querySelector(".marvel-img")
const marvelNameEl = document.querySelector(".marvel-name")

 btnEl.addEventListener("click", async function(){
    try{
        btnEl.disabled = true;
        btnEl.innerText = "Loading..."
        marvelNameEl.innerText = "Updating..."
        const response = await fetch("https://api.catboys.com/img")
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Get Marvel"
        //console.log(data);
        marvelContainerEl.style.display ="block"
        marvelImgEl.src = data.url;
        marvelNameEl.innerText = data.artist;
    }catch(error){
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerText = "Get Marvel"
        marvelNameEl.innerText = "An error happend, please try again"
    }
 })