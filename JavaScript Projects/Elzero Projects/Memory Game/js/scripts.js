// Start the game when click start
document.querySelector(".control-buttons span").onclick = function () {
  // Append Name of user
  let yourName = prompt("Enter you name?");
  if (yourName === "" || yourName === null) {
    document.querySelector(".info-container .name span").innerHTML = "Un Known";
  } else {
    document.querySelector(".info-container .name span").textContent = yourName;
  }

  document.getElementById("start").play();

  // Remove control buttons from dom page
  document.querySelector(".control-buttons").remove();

  // Add Time to Game
  let timeSpan = document.querySelector(".info-container .time span");
  let timer = setInterval(() => {
    timeSpan.innerHTML++;
    // If all blocks has class matched
    let allMatch = blocks.filter((block) =>
      block.classList.contains("has-match")
    );
    if (allMatch.length === blocks.length) {
      clearInterval(timer);
    }
  }, 1000);
}

// Effect Duration
let duration = 1000;

// Select BLocks Cointaier of memory game
let blocksContainer = document.querySelector(".game-blocks")

// Create array from game blocks
let blocks = Array.from(blocksContainer.children)

// Create Range of keys
// let orderRange = [...Array(blocks.length).keys()];
// better way

let orderRange = Array.from(Array(blocks.length).keys());

console.log(orderRange);
shuffle(orderRange);
console.log(orderRange);

blocks.forEach((block, index) => {
  // Add order css property to game blocks
  block.style.order = orderRange[index];
  // Add click event
  block.addEventListener('click', function () {
    // Trigger the flipblock function
    filpBlock(block);
  });
});

// Flip Block Function
function filpBlock(selectedBlock) {
  // Add class is-flipped
  selectedBlock.classList.add("is-flipped");
  // Collect all flip cards
  let allFlipBlocks = blocks.filter(flipBlock => flipBlock.classList.contains("is-flipped"));
  // If there are two selected blocks are flipped
  if (allFlipBlocks.length === 2) {
    // Stop Clicking funciton
    stopClicking();
    // Check matched block function
    checkMathcedBlocks(allFlipBlocks[0], allFlipBlocks[1]);
  }

}

// Check matched blocks
function checkMathcedBlocks(firstBlock, secondBlock) {
  let tries = document.querySelector(".tries span");
  
  if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");

    firstBlock.classList.add("has-match");
    secondBlock.classList.add("has-match");

    document.getElementById("success").play();
  } else {
    tries.innerHTML = parseInt(tries.innerHTML) + 1;
    setTimeout(() => { 
      firstBlock.classList.remove("is-flipped");
      secondBlock.classList.remove("is-flipped");
    }, duration)

    document.getElementById("wrong").play();
  }
}

// Stop Clickign funciton
function stopClicking() {
  // Another way (Add class no-click on main container and put css property in main file css)
  blocksContainer.style.pointerEvents = "none";
  setTimeout(() => {
    // Remove css property
    blocksContainer.style.removeProperty("pointer-events");
    // blocksContainer.style.pointerEvents = "";
  }, duration);
}

// Shuffle function
function shuffle(array) {
  // Settings Vars
  let current = array.length,
      temp,
      random;
  while (current > 0) {
    // Get random number
    random = Math.floor(Math.random() * current);
    // Decrease Length by 1
    current--;

    // Save Current Element in stach
    temp = array[current];
    // current element = random element
    array[current] = array[random];
    // random element = element from stach
    array[random] = temp;

    // Better way in ES6 to swap the elements

  }
  return array;
}

// =======================================

// // Add Time to Game
// let timeSpan = document.querySelector(".info-container .time span");
// let timer = setInterval(() => {
//   timeSpan.innerHTML++;
//   // If all blocks has class matched
//   let allMatch = blocks.filter(block => block.classList.contains("has-match"));
//   if (allMatch.length === blocks.length) {
//     clearInterval(timer);
//   }
// }, 1000);

// ==========




// Important (used in many tricks)
// // If all blocks has class matched
// // let allMatch = blocks.filter(block => block.classList.contains("has-match"));