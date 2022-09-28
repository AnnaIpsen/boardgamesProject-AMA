//create buttons
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z', 'æ', 'ø', 'å'];


function createButtons(){
    let buttons = document.getElementById('buttons'); 
    let letters = document.createElement('ul');

    for (let i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        let list = document.createElement('li');
        list.id = 'letter'
        list.addEventListener('click', clickFunction)
        list.innerHTML = alphabet[i];

        buttons.appendChild(letters);
        letters.appendChild(list);
    }
};
createButtons();

//generate word and counter
const wordsArray = ['pasta', 'brandbil', 'danmark', 'webudvikling', 'verdensmesterskab', 'antifrost', 'skuffe', 
'irritation', 'kampsport', 'tusindben', 'spredning']; 
const randomWord = wordsArray[(Math.floor(Math.random() * wordsArray.length))];
let wordDisplay = []
var randomWordArray = randomWord.split("");


function generateWord(){
    for (var i = 0; i < randomWordArray.length; i++) {
        wordDisplay.push("_");
    }
    
    outputWord();
};
generateWord();

function outputWord (){
    document.getElementById('word').innerHTML = wordDisplay.join(' ');
}

let counter = 0;
let lives = 10;

function showCounter() {
    document.getElementById('counter').innerHTML = `Du har brugt ${counter} tur(e)`;
};
showCounter();

function showLives() {
    document.getElementById('lives').innerHTML = `Du har ${lives} liv tilbage`;
};
showLives();


function check () {
    if (JSON.stringify(wordDisplay) === JSON.stringify(randomWordArray)) {
        document.getElementById('win').innerHTML = 'tillykke du har vundet!';
    }
    else if (lives == 0) {
        document.getElementById('win').innerHTML = 'GAME OVER!';
    };
}

// OnClick Function
let guessCount = 0;

function clickFunction () {
    let guess = this.innerHTML;
    this.setAttribute('class', 'usedLetter');
    for (var i = 0; i < wordDisplay.length; i++) {
        if (randomWordArray[i] === guess) {
            wordDisplay[i] = guess
            guessCount += 1
            outputWord()
        };
    };

    if (guess === 0) {
        lives -= 1;
        counter += 1;
        guessCount = 0;
    } else {
        counter += 1;
    };

    showLives();
    showCounter();
    check();
};




//hangman


//save score
