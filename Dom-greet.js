import Greet from "./main.js";
const greet = Greet()

const names = document.querySelector(".inputName");
const isixhosa = document.querySelector(".language");
const inglish = document.querySelector(".language");
const afrikaans = document.querySelector(".language");
const buttonElement = document.querySelector(".button");
const clearElement = document.querySelector(".clear");
const inputName = document.querySelector('.inputName');
const showElement = document.querySelector('.showElement');
const counter = document.querySelector('.counter');
const errorMessage = document.querySelector('.error-message');

let storeNames = [];
if (localStorage.getItem('names')) {
    storeNames = JSON.parse(localStorage.getItem('names'))
}
function regex(rejectnames) {
    let letters = /\d/gi
    if (letters.test(rejectnames)) {
        return 'please use alphabets';
    } else {
        return true;
    }
}

counter.innerHTML = storeNames.length

function greetings() {

    let language = document.querySelector(".radio-input:checked");
    let result = language != undefined ? language.value : null;
    var storedWord = inputName.value.toLowerCase();
    console.log(regex(storedWord))
    regex(storedWord)

    if (names.value == '' && language == undefined) {
        errorMessage.innerHTML = 'Please enter name and language'

    }else if(/\d/g.test(storedWord)){
        errorMessage.innerHTML ='Please use Alphabets'

    } else if (language == undefined) {
        errorMessage.innerHTML = 'Please select language!';

    } else if (names.value === '') {
        errorMessage.innerHTML = 'Please enter name '
    }

    if (storedWord !== "") {
        showElement.innerHTML = ""

        if (result !== null) {
            if (storeNames.includes(storedWord)) {
                showElement.innerHTML = 'the name duplicates'

            } else {
                if (result === "isixhosa") {
                    showElement.innerHTML = "Molo, " + storedWord;
                }
                else if (result === "english") {
                    showElement.innerHTML = "Hello, " + storedWord;
                }
                else if (result === "sesotho") {
                    showElement.innerHTML = "Dumela, " + storedWord;
                }
                storeNames.push(storedWord);
                localStorage.setItem('names', JSON.stringify(storeNames))
            }

            counter.innerHTML = storeNames.length;
        }

    }


}
clearElement.addEventListener('click', () => {
    localStorage.removeItem('names');
    location.reload()

})

buttonElement.addEventListener('click', greetings);

