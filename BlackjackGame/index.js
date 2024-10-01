let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let message_El = document.getElementById("message-el")
let total_El = document.querySelector("#total-el")
let cards_El = document.querySelector("#cards-el") 

let players = {
    name: "per",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = players.name + ": $" + players.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13 ) + 1
    if (randomNumber === 1)
    {
        randomNumber = 11
    }
    else if(randomNumber >= 11 && randomNumber <= 13)
    {
        randomNumber = 10
    }
    return randomNumber
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum  = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cards_El.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cards_El.textContent += cards[i] + " "
    }
    total_El.textContent = "Sum: " + sum

    if (sum <= 20){
        message = "Do you want to draw a new card? "
    }
    else if (sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game!"
        isAlive = false
    }
    message_El.textContent = message
}

function newCard(){
    console.log("Drawing a new card from the deck!")

    if (isAlive === true && hasBlackJack === false){
        let new_card = getRandomCard()
        cards.push(new_card)
        sum += new_card
        startGame()
    }
}
