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
        card.innerHTML = `<p>${cardArray[i]}</p>`
        card.setAttribute('id', i)
        card.setAttribute('class', 'hidden')
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
    if (chosenCards[0] === chosenCards[1]){
        cardsWon.push(chosenCards)
        message.innerHTML = 'Du fik et match, tillykke!'
    } else {
        message.innerHTML = 'Prøv igen'
    }
}

function flip() {
    let cardId = this.setAttribute('id')
    chosenCards.push(cardArray[cardId])
    this.setAttribute('class', 'show')
}