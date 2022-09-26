const gameTime = document.getElementById("gameTime")
const gameScore = document.getElementById("gameScore")
const gameGrid = document.getElementById("gameGrid")

tileChosen = null
gridSize = 50

const gridElements = [{
    position: {
        x: 1,
        y: 1
    },
    neighbours: [],
    lightOn: false
}]

const renderNewGame = () => {
    for (let i = 1; i < 50; i++) {
        const newTile = document.createElement('div')
        newTile.innerHTML = "hi"
        newTile.classList.add("game-grid__tile")
        gameGrid.appendChild(newTile)
    }
}
renderNewGame()
const checkResult = () => {}