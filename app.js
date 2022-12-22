fetch("https://random-word-api.herokuapp.com/word?lang=es")
.then(response => response.json())
.then(data => {
  console.log(data[0])
  let word = data[0]
  word=word.toLowerCase()
  let palabraSinLetras = [];
  let userSeleccion;
  
  
  
  let letrasUsadas2 = [];
  let vidas = document.querySelector(".lives");
  vidas.innerText = 5;
  const letras = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  const keys = document.querySelector(".container-keys");
  const usedWords = document.querySelector(".used_words");
  
  const wordDisplay = document.querySelector(".word");
  
  for (let i = 0; i < word.length; i++) {
    palabraSinLetras.push("_");
  }
  
  wordDisplay.innerText = palabraSinLetras;
  
  letras.forEach((letra, index) => {
    const key = document.createElement("button");
    key.setAttribute("class", `key-${letra}`);
    key.setAttribute("id", `key`);
    key.innerText = `${letra}`;
    keys.append(key);
  });
  
  const keyNode = document.querySelectorAll("#key");
  
  keyNode.forEach((element) => {
    element.addEventListener("click", (e) => {
      userSeleccion = element.innerText;
      letrasUsadas2.push(element.innerText);
      console.log(letrasUsadas2);
      usedWords.innerText = letrasUsadas2;
      console.log(e);
      e.target.disabled=true
      e.target.style.backgroundColor = "grey"
  
      
      if (word.includes(userSeleccion)) {
        for (let i = 0; i < word.length; i++) {
          if (word[i] === userSeleccion) {
            palabraSinLetras[i] = userSeleccion;
            console.log("correcto");
            console.log(palabraSinLetras);
          }
          wordDisplay.innerText = palabraSinLetras;
        }
      } else vidas.innerText -= 1;
  
      if(palabraSinLetras.join("") == word){
        Swal.fire({
          title: 'Ganador!',
          text: `La palabra es ${word}`,
          icon: 'succes',
          confirmButtonText: 'Cool'
        }).then(result => {result.isConfirmed && Swal.fire(window.location.reload())
        })
      } 
      console.log(vidas,"debugg aqui")
      if(vidas.innerText == 0) {
        Swal.fire({
        title: 'Perdiste',
        text: `La palabra es ${word}`,
        icon: 'error',
        confirmButtonText: 'Repetir'
      }).then((result) => {result.isConfirmed && Swal.fire(window.location.reload())}
      )}
    }
    );
  });
  
  function wordSelect() {
  
    let randomNum = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(randomNum);
  
    if (randomNum == 1) {
      return "calabaza";
    } else if (randomNum == 2) {
      return "koala";
    } else if (randomNum == 3) {
      return "coderhouse";
    }
  }
});
