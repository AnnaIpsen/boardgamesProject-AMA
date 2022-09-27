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
        list.innerHTML = alphabet[i];

        buttons.appendChild(letters);
        letters.appendChild(list);
    }
};
createButtons();

//generate word
const words = ['pasta', 'masseødelæggelsesvåben', 'danmark', 'webudvikling', 'verdensmesterskab', 'brød']; 



//hangman


//save score
