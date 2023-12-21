// alphabet which i show to the user 
let alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  " ",
];
// paragraph
let words =
  "rent nine rent lie enter entire lie let ten tell entire rent tree letter lie enter letter entire ten tie let letter let tell";
let word = words.trim().toLowerCase().split("");

// all document Element
let wordsBox = document.getElementById("words-box");
let strtBtn = document.getElementById("start");
let rightText = document.getElementById("right");
let wrongText = document.getElementById("wrong");
let totalText = document.getElementById("total");
let currentText = 0;
let right = 0;
let wrong = 0;

strtBtn.addEventListener("click", startTyping);

/* function which start the game
    and setting the paragraph for tyoe practice */

function startTyping() {
  totalText.innerText = word.length;
  strtBtn.style.display = "none";
  word.forEach((i, idx) => {
    const char = document.createElement("span");
    char.innerText = i;
    char.className = "char";
    char.id = idx;
    wordsBox.appendChild(char);
  });

  document.addEventListener("keydown", keyDownHandler);
  document.addEventListener("keyup", keyUpHandler);
}

// function for key Down

function keyDownHandler(e) {
  if (findKey(e.key)) {
    keyDownStyle(e.key);
    if (wordsBox.innerText[currentText] == e.key) {
      const child = wordsBox.children[currentText];
      if (wordsBox.innerText[currentText] != " ") {
        child.style.color = "green";
      }
      right++;
      rightText.innerText = right;
    } else {
      const child = wordsBox.children[currentText];
      if (wordsBox.innerText[currentText] != " ") {
        child.style.color = "red";
      }
      wrong++;
      wrongText.innerText = wrong;
    }
  } else {
    console.log("You are entering wrong key's");
    return false;
  }
  currentText++;
}

// function for keyUp 

function keyUpHandler(e) {
  if (findKey(e.key)) {
    keyUpStyle(e.key);
    if(currentText >= word.length){
        document.location.reload()
    }
  }
}

// function for finding the word that user is pressing is correct alphabet or not
function findKey(e) {
  for (let i = 0; i < alphabets.length; i++) {
    if (e == alphabets[i]) {
      return true;
    }
  }
  return false;
}

// these both function are for designing the keyboard when user press key

function keyUpStyle(key) {
  if (key == " ") {
    character = document.getElementById("spacebar");
  } else {
    character = document.getElementById(`${key}`);
    character.style.color = "#fff";
    character.style.background = "rgba(70, 80, 109, 0.678)";
  }
}

function keyDownStyle(key) {
  if (key == " ") {
    character = document.getElementById("spacebar");
  } else {
    character = document.getElementById(`${key}`);
    character.style.color = "#000";
    character.style.background = "#fff";
  }
}
