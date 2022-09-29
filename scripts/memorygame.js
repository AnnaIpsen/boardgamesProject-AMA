//generer kort
const cardArray = [];
memoryTiles = 50

for (let i = 0; i < memoryTiles; i++) {
   cardArray.push(i)
   cardArray.push(i)

}
cardArray.sort(() => 0.5 - Math.random())

const grid = document.getElementById('grid')


function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('div');
        card.setAttribute('id', i)
        card.innerHTML = `<p>${cardArray[i]}</p>`
        let number = card.firstElementChild;
        number.setAttribute('id', 'hidden')
        card.addEventListener('click', flip);
        grid.appendChild(card);
    }
}
createBoard()

//check kort
let chosenCards = []
let cardsWon = []

function checkMatch () {
    let message = document.getElementById('message')
    let optionOneId = chosenCards[0]
    let optionTwoId = chosenCards[1]

    if (chosenCards[0] === chosenCards[1]){
        cardsWon.push(chosenCards)
        message.innerHTML = 'Du fik et match, tillykke!'
    } else {
        message.innerHTML = 'Prøv igen'

        console.log(chosenCards)
        let number1 = document.getElementById(optionOneId).firstElementChild;
        let number2 = document.getElementById(optionTwoId).firstElementChild;
        number1.setAttribute('class', 'hidden')
        number2.setAttribute('class', 'hidden')
        
        console.log(number1)
        console.log(number2)
    }
}

function flip() {
    let cardId = this.getAttribute('id')
    chosenCards.push(cardArray[cardId])
    let number = document.getElementById(cardId).firstElementChild;
    number.setAttribute('class', 'show')

    if (chosenCards.length == 2) {
        checkMatch()
    }
    
}