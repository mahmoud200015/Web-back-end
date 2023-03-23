// Letters
const letters = "-abcdefghijklmnopqrstuvwxyz.";

// Get array from letters
let lettersArray = Array.from(letters);

// console.log(lettersArray);

// Select letters container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach(letter => {
  // Create span 
  let span = document.createElement("span");
  // Create letter text node
  let txtLetter = document.createTextNode(letter);
  // Append txtLetter to span
  span.appendChild(txtLetter);
  // Add class on span
  span.className = "letter-box";
  // Append span to the letters container
  lettersContainer.appendChild(span);
});

// Object of words + Categories
const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
  colors: ["red", "yellow", "brown", "purple", "green", "white", "black"],
}

// Get Random Property (key, value) && Random Word for playing
let randomPropKey = Object.keys(words)[Math.trunc(Math.random() * Object.keys(words).length)];
let randomPropValues = words[`${randomPropKey}`];
let randomWord = randomPropValues[Math.trunc(Math.random() * randomPropValues.length)].toLowerCase();

console.log(randomWord);

// Set Category Info
let category = document.querySelector(".game-info .category span");
let txtCategory = document.createTextNode(randomPropKey);
category.appendChild(txtCategory);

// -------

// Select letters guess Container
let lettersGuessContainer = document.querySelector(".letters-guess");
let arrRandomword = Array.from(randomWord);
console.log(arrRandomword);

// Create span depend on word
arrRandomword.forEach(letter => {
  // Create Empty Span
  let emptySpan = document.createElement("span");
  // If iterate letter is a space " ";
  if (letter === " ") {
    // Add class to the emptySpan
    emptySpan.className = "with-space";
  }
  // Append emptySpan to letters Guess Container
  lettersGuessContainer.appendChild(emptySpan);
});

// -------

// Select letter Guess spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// Set Wrong Attempts
let wrongAttempts = 0;
// Select theDraw Element
let theDraw = document.querySelector(".hangman-draw");


// Handle Clicking on letters
document.addEventListener('click', (event) => {
  // Set the status of the choosing
  let theStatus = false;  

  if (event.target.className === "letter-box") {
    // Add class clicked on the letter to prevent clicking again
    event.target.classList.add("clicked");

    let clickedLetter = event.target.textContent.toLowerCase();
    // console.log(clickedLetter);
    // console.log(arrRandomword);
    arrRandomword.forEach((wordLetter, wordIndex) => {
      // if the clickedLetter is equal to one of the letters of the randomWord
      if (clickedLetter == wordLetter) {
        // console.log(`Found at wordIndex ${wordIndex}`);
        // Change of the valueof theStatus to Correct
        theStatus = true;
        // Loop on all guess spans
        guessSpans.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            // console.log(span);
            span.innerHTML = wordLetter;
          }
        });
      }
    });
    
    // Update in Function end game Below...⬇️⬇️⬇️
    console.log(lettersGuessContainer.children);
    lettersGuessContainer.childNodes.forEach((child) => {
      console.log(child.textContent);
    });

    // outside of the loop forEach
    if (theStatus !== true) {
      // increase wrong attemps
      wrongAttempts++;
      // Add class wrong on the draw element
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      // play fail sound
      document.getElementById("wrong").play();

      // Check if wrong Attempts is 8
      if (wrongAttempts === 8) {
        endGame();
        lettersContainer.classList.add("finished");
      }
    } else {
      // play success sound
      document.getElementById("success").play();
    }
  }
});

// Function End Game
function endGame() {
  // Create Popup Div
  let div = document.createElement("div");
  // Create Text 
  let divText = document.createTextNode(`Game Over, The Word is ${randomWord}`);
  // Append Text to div
  div.appendChild(divText);
  // Add class on div
  div.className = "popup";
  // Append to Body
  document.body.appendChild(div);
}

// Tasks from elzero to you (learn from them);
// - when user is success make popup to make know the wrongAttempts and level of you and congrats
// - make json object rather than normal object above and genrate more words
// - make sweet alert rather than popup
// - make game is responsible (if you want to practise more on it);

