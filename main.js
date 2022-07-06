function Greet() {
    let name = ''
    function setName (username) {
        name = username
    }
    function getName () {
        return findName;
    }

    function storedName (){
        
    }
    function errorMessage(name,language){
        if(name =''&& language === null)
        return; errorMessage('Please enter your name and language!')
    }

    function errorMessage(name,language){
        if(language === null)
        return; errorMessage('Please select language!')
    }
    function errorMessage(name,language){
        if(name!=='')
        return; errorMessage('Please enter your name!')
    }
    return{
        setName,
        getName,
        storedName,
        errorMessage
    }
}

export default Greet