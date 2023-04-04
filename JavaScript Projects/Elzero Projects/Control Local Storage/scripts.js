// Select Elements

let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

console.log(theInput)
console.log(results)
console.log(allSpans[0])
console.log(allSpans)

// let localArray = JSON.parse(localStorage.getItem("id")) || [];

allSpans.forEach(span => {
  span.addEventListener('click', (e) => {
    if (e.target.classList.contains("check-item")) {
      checkItem();
    }
    if (e.target.classList.contains("add-item")) {
      addItem();
    }
    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }
    if (e.target.classList.contains("show-items")) {
      showItems();
    }
  });
});

// Function check to theinput is empty or not
function showMessage() {
  results.innerHTML = "THE INPUT CAN NOT BE EMPTY";
  
}

// Function for all spans
function checkItem() {
  theInput.value !== "" ?
    localStorage.getItem(theInput.value) ?
      results.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`
      :results.innerHTML = `Not Found Local Storage Item Called <span>${theInput.value}</span>`
  : showMessage();
}

function addItem() {
  if (theInput.value !== "") {
    localStorage.setItem(theInput.value, []);
    results.innerHTML = `Done, Local Storage Item <span>${theInput.value}</span> Added`;
    theInput.value = "";
  } else {
    showMessage();
  }
}
function deleteItem() {
  console.log(localStorage.getItem(theInput.value))
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value) !== null) {
      localStorage.removeItem(theInput.value);
      results.innerHTML = `Done, Local Storage Item <span>${theInput.value}</span> Deleted`;
      theInput.value = "";
    } else {
      results.innerHTML = `Not Found Local Storage Item Called <span>${theInput.value}</span>`;
    }
  } else {
    showMessage();
  }
}

function showItems() {
  console.log(localStorage)
  if (localStorage.length) {
    results.innerHTML = "";
    for (let [key, value] of Object.entries(localStorage)) {
      results.innerHTML += `<span class="keys">${key}</span>`;
      console.log(key);
    }
  } else {
    results.innerHTML = `Local Storage Is Empty`;
  }
}

// console.log(Object.entries(localStorage)); // is (important) return array of [key, value] of the object

// Extra
// add another input for key to the value of the localstorage
