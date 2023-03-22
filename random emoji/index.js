const btnEl = document.getElementById("btn")
const emojiNameEl = document.getElementById("emoji-name")

// open emoji api
const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=8d5e84cf256ca07e6041a20d49461ce159f75d1a")
    data = await response.json()
    //console.log(data);
    for(let i = 0; i < 1500; i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName
        })
    }
}
getEmoji()
//console.log(emoji);

btnEl.addEventListener("click", ()=>{
    //console.log("clicked");
    const randomNum = Math.floor(Math.random() * emoji.length);
    //console.log(randomNum);
    btnEl.innerText = emoji[randomNum].emojiName
    emojiNameEl.innerText = emoji[randomNum].emojiCode
})