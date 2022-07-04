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
    return{
        setName,
        getName,
        storedName
    }
}

export default Greet