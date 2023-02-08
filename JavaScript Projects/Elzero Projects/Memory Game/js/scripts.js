// Start the game when click start
document.querySelector(".control-buttons span").onclick = function () {
  // Append Name of user
  let yourName = prompt("Enter you name?");
  if (yourName === "" || yourName === null) {
    document.querySelector(".info-container .name span").innerHTML = "Un Known";
  } else {
    document.querySelector(".info-container .name span").textContent = yourName;
  }
  // Remove control buttons from dom page
  document.querySelector(".control-buttons").remove();
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

// Add order css property to game blocks
blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
});

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



let block = document.querySelectorAll(".game-blocks .game-block");
block.forEach((box) => {
  box.addEventListener('click', (e) => {
    box.classList.toggle('is-flipped');
  })
});