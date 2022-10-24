function game() {
  let word = wordSelect();
  let palabraSinLetras = [];
  let userSeleccion
  let counter = true;
  let letrasUsadas =[];
  let vidas = 5;
  for( let i = 0 ; i < word.length; i++){
    palabraSinLetras.push("_")
  }
  console.log(palabraSinLetras)
  
  do {

    userSeleccion = prompt(`Bienvenido al Ahorcado (Hangman) favor de ingresar letra por letra\n\nEsta es la Palabra: \n ${palabraSinLetras}\n Te quedan ${vidas} vidas\n\n Letras usadas: ${letrasUsadas}`)

    letrasUsadas.push(userSeleccion)


    if (word.includes(userSeleccion)){
      for (let i = 0; i < word.length; i++) {
        
        if(word[i] === userSeleccion) {
          palabraSinLetras[i] = userSeleccion;
          console.log("correcto")
          console.log(palabraSinLetras)
        }
        
      }
    } else vidas -= 1

    if(vidas == 0){
      alert(`Tus vidas se acabaron, perdiste`)
      counter = false
    }

    console.log(word,palabraSinLetras.join(""))
    console.log(word == palabraSinLetras.join(""))

    if(word == palabraSinLetras.join("")){
      alert (`Ganaste la palabra es ${word}`)
      counter = false
    }
  }while( counter == true)
}

function randomNum (){ 

  return Math.floor(Math.random()*(4 - 1)+1)
}

function wordSelect(){
  let randomNum = Math.floor(Math.random()*(4 - 1)+1);
  console.log(randomNum)

  if(randomNum == 1){
    return "calabaza"
  }

  else if (randomNum == 2){
    return "koala"
  }

  else if(randomNum == 3){
    return "coderhouse"
  }
}



game();