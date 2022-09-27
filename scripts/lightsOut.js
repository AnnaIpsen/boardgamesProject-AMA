const gameTime = document.getElementById("gameTime")
const gameScore = document.getElementById("gameScore")
const gameGrid = document.getElementById("gameGrid")

let tileChosen = null
gridSize = 25
startingLights = 3

const gridElements = []


let x = 0
let y = 1
//Helper function to determine position of the tiles
const handlePosition = (index) => {
    if (index % 5 || index === 0) {
        x++
    } else {
        x = 1
        y += 1
    }
}

const renderNewGame = () => {
    for (let i = 0; i < (gridSize); i++) {
        const newTile = document.createElement('div')
        newTile.innerHTML = "hi"
        newTile.classList.add("game-grid__tile")
        newTile.setAttribute('data-index', String(i))
        gameGrid.appendChild(newTile)
        handlePosition(i)
        gridElements.push({
            position: {
                x: x ,
                y: y
            },
            tileIndex: i,
            lightOn: false,
        })
    }

}




renderNewGame()

const allTiles = Array.from(document.getElementsByClassName("game-grid__tile"))

allTiles.forEach((tile, tileIndex) => tile.addEventListener("click", (event) => {
    const tileObject = gridElements.find(tile => tile.tileIndex === tileIndex)
    tile.classList.toggle("active")
    tileObject.lightOn = !tileObject.lightOn
    checkAdjacentTiles(tile, tileObject, tileObject.tileIndex)
    renderLight()
    })
)

const checkAdjacentTiles = (tileChosen, tileObject, tileIndex) => {
    const topTile = gridElements.find(topTile => topTile.position.x === gridElements[tileIndex].position.x && (topTile.position.y - gridElements[tileIndex].position.y === -1))
    const rightTile = gridElements.find(rightTile => rightTile.position.y === gridElements[tileIndex].position.y && gridElements[tileIndex].position.x - rightTile.position.x === -1 )
    const bottomTile = gridElements.find(bottomTile => bottomTile.position.x === gridElements[tileIndex].position.x && (bottomTile.position.y - gridElements[tileIndex].position.y === 1))
    const leftTile = gridElements.find(leftTile => leftTile.position.y === gridElements[tileIndex].position.y && gridElements[tileIndex].position.x - leftTile.position.x === 1 )
    const adjacentTiles = [topTile, rightTile, bottomTile, leftTile].filter(elementNotFalsy => elementNotFalsy)
    adjacentTiles.forEach(tile => {
        tile.lightOn = !tile.lightOn
    })
}

const renderLight = () => {
    const tilesWithLight = gridElements.filter(element => element.lightOn)
        tilesWithLight.forEach(tile => allTiles[tile.tileIndex].classList.add("active"))
    const tilesWithoutLight = gridElements.filter(element => !element.lightOn)
    tilesWithoutLight.forEach(tile => allTiles[tile.tileIndex].classList.remove("active"))
}

const chooseRandomTilesOnSetup = () => {
    const randomIndexes = []
    for (let i = 0; i < startingLights; i++) {
        const generateRandomNumber = () => {
            const randomNumber = Math.floor(Math.random() * gridSize)
            randomIndexes.some(number => number === randomNumber) || randomNumber === 0 ? generateRandomNumber() : randomIndexes.push(randomNumber)
        }
        generateRandomNumber()
    }
    const randomGridElements = gridElements.filter(gridElement => randomIndexes.find(randomIndex => randomIndex === gridElement.tileIndex))
    console.log(randomIndexes)
    console.log(randomGridElements)
    randomGridElements.forEach(el => el.lightOn = !el.lightOn)
}

chooseRandomTilesOnSetup()
renderLight()
