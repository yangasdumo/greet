const names = document.querySelector("name");
const isixhosa= document.querySelector("language");
const inglish= document.querySelector("language");
const afrikaans= document.querySelector("language");
const buttonElement = document.querySelector(".button");
const inputName = document.querySelector('.inputName');
const showElement = document.querySelector('.showElement');
const counter = document.querySelector('.counter');
console.log(names)

function greet  () {

    var myCounterNumber = 0;

    let language = document.querySelector('.radio-input:checked');
    let result = language.value;
    var storeNames = [];
   

    var storedWord = inputName.value;
    if(storedWord !== ""){
        showElement.innerHTML = ""
    }

    console.log('result', result); 

    if(result !== null){
        if(result === "isixhosa"){
            showElement.innerHTML = "Molo, " + storedWord;
        }
        else if(result === "english"){
            showElement.innerHTML = "hello, " + storedWord;
        }
        else if(result === "sesotho"){
        showElement.innerHTML = "dumela, " + storedWord;
        }
        
    }
    

    myCounterNumber = storedWord.length;
    counter.innerHTML = myCounterNumber;
    storeNames.push(storedWord);
    console.log(storeNames); 
    console.log(myCounterNumber);   
       


}






 
buttonElement.addEventListener('click', greet);


