function Greet(){
  let name = ''
  let language =[]
  let Number = []

  function setName(par){
    if(par == "") {
      return name = "enter name"
    }else {
      return name = par
    }
  }
  function getName(){
    return name
  }
  
  function setLanguage(){
    if(language == "Isixhosa") {
      return  language = "molo"
    }else 

    if(language =="English"){
      return language = "hello"
    }else 

    if(language == "Afrikaans"){
         return language ="Moire"
    }
  }
  function getLanguage(){
    return language
  }

   function setN(){
     if(Number == ""){
        return name =" enter name"
     }
   }
   function getN(){
     return name.length
   }


    // if ((name) ==='string' && name) {
    //   return `Hello, ${name}`;
    // } else {
    //   return "enter name"
    // }
    
    return{
      setName,
      getName,
      setLanguage,
      getLanguage,
      setN,
      getN

    }
  }

