const cardArray = [];
memoryTiles = 50

for (let i = 0; i < memoryTiles; i++) {
   cardArray.push(i)
   cardArray.push(i)

}

console.log(cardArray)

const grid = document.getElementById('grid')


function createBoard() {
    cardArray.sort(function(a, b){return 0.5 - Math.random})
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('div');
        card.innerHTML = cardArray[i]
        card.setAttribute('id', i)
        card.setAttribute('class', 'hidden')
        card.addEventListener('click', flip);
        grid.appendChild(card);
    }
}
createBoard()

function flip() {

}