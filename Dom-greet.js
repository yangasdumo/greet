import Greet from "./main.js";
const greet = Greet()

const names = document.querySelector("name");
const isixhosa= document.querySelector("language");
const inglish= document.querySelector("language");
const afrikaans= document.querySelector("language");
const buttonElement = document.querySelector(".button");
const clearElement = document.querySelector(".clear");
const inputName = document.querySelector('.inputName');
const showElement = document.querySelector('.showElement');
const counter = document.querySelector('.counter');
const errorMessage = document.querySelector('.error-message')
let storeNames = [];
if(localStorage.getItem('names')){
    storeNames = JSON.parse(localStorage.getItem('names'))
}else{
    storeNames = localStorage.setItem('names', JSON.stringify(storeNames))
}

counter.innerHTML = storeNames.length

function greetings() {

    let language = document.querySelector('.radio-input:checked');
    let result = language.value ? language.value : '';
    var storedWord = inputName.value;

        if(storedWord !== ""){
            showElement.innerHTML = ""
        } 
        if(result !== null){
            if(result === "isixhosa"){
                showElement.innerHTML = "Molo, " + storedWord;
            }
            else if(result === "english"){
                showElement.innerHTML = "Hello, " + storedWord;
            }
            else if(result === "sesotho"){
            showElement.innerHTML = "Dumela, " + storedWord;
            }
            storeNames.push(storedWord);
            localStorage.setItem('names', JSON.stringify(storeNames))
            
            counter.innerHTML = storeNames.length;
        }

}





clearElement.addEventListener('click', () => localStorage.removeItem('names'));
 
buttonElement.addEventListener('click', greetings);


