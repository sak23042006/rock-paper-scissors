var playerScore = 0;
var compScore = 0;



// logos
var rockButton = document.getElementById("rock-btn")
var paperButton = document.getElementById("paper-btn")
var scissorButton = document.getElementById("scissor-btn")

// scores
var playerScoreUpdate = document.querySelector("#player-score")
var botScoreUpdate = document.querySelector("#bot-score")

var addImgPlayer = document.querySelector(".player-img")
var addImgBot = document.querySelector(".bot-img")

var optionsDiv = document.querySelector(".options")
// console.log(optionsDiv);

var playAgain = document.querySelector(".again")

var msg = document.querySelector(".msg")
var footer = document.querySelector(".footer")

rockButton.onclick = () => {
    addImgPlayer.setAttribute("src","assets/rock-hand.png")
    addImgPlayer.setAttribute("height","250px")
    addImgPlayer.setAttribute("width","100%")
    addImgPlayer.setAttribute("id","rock")
    compRandom()
    update()
    
}
paperButton.onclick = () => {
    addImgPlayer.setAttribute("src","assets/paper-hand.png")
    addImgPlayer.setAttribute("height","250px")
    addImgPlayer.setAttribute("width","100%")
    addImgPlayer.setAttribute("id","paper")
    compRandom()
    update()

}
scissorButton.onclick = () => {
    addImgPlayer.setAttribute("src","assets/scissors-hand.png")
    addImgPlayer.setAttribute("height","250px")
    addImgPlayer.setAttribute("width","100%")
    addImgPlayer.setAttribute("id","scissor")
    compRandom()
    update()

}

function compRandom() {

    const src = ["assets/rock-hand.png","assets/paper-hand.png","assets/scissors-hand.png"];

    const random = Math.floor(Math.random() * src.length);
    addImgBot.setAttribute("src",src[random])
    addImgBot.setAttribute("height","250px")
    addImgBot.setAttribute("width","100%")

    switch (random) {
        case 0:
            addImgBot.setAttribute("id","rock")
            break;
        case 1:
            addImgBot.setAttribute("id","paper")
            break;
        case 2:
            addImgBot.setAttribute("id","scissor")
            break;
    
        default:
            break;
    }
    
}

function update() {

    console.log(addImgPlayer.id , addImgBot.id);

    if (addImgPlayer.id == "rock" && addImgBot.id == "scissor") {

        playerScore++
        win()
        playerScoreUpdate.innerHTML = playerScore;
        
    }
    if (addImgPlayer.id == "paper" && addImgBot.id == "rock") {

        playerScore++
        win()
        playerScoreUpdate.innerHTML = playerScore;
        
    }
    if (addImgPlayer.id == "scissor" && addImgBot.id == "paper") {

        playerScore++
        win()
        playerScoreUpdate.innerHTML = playerScore;
        
    }
    if (addImgBot.id == "paper" && addImgPlayer.id == "rock") {

        compScore++
        win()
        botScoreUpdate.innerHTML = compScore;
        
    }
    if (addImgBot.id == "scissor" && addImgPlayer.id == "paper") {

        compScore++
        win()
        botScoreUpdate.innerHTML = compScore;
        
    }
    if (addImgBot.id == "rock" && addImgPlayer.id == "scissor") {

        compScore++
        win()
        botScoreUpdate.innerHTML = compScore;
        
    }
    
}

function win() {

    if(playerScore==5){
        rockButton.style.display="none"
        paperButton.style.display="none"
        scissorButton.style.display="none"
        msg.innerHTML="You Won the game"
        footer.style.display="block"
    }
    if(compScore==5){
        rockButton.style.display="none"
        paperButton.style.display="none"
        scissorButton.style.display="none"
        msg.innerHTML="Computer Won the game"
        footer.style.display="block"
    }
}

playAgain.onclick = () =>{
    location.href = "index.html"
}
