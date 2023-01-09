// ===========================================
// Open Settings Box
// =================

// Check If there's local storage color option
let mainColors = localStorage.getItem("color-option");
if (mainColors) {
  // console.log(`Local storage is not empty you can set it on root now`);
  document.documentElement.style.setProperty("--main-color", mainColors);
  // Remove active class from all children
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");
    // Add active class on elemnt if data-color === local storage item
    if (element.dataset.color === mainColors) {
      // Add active class
      element.classList.add("active");
    }
  });

}
// -----------

// --Toggle Spin Class ON Icon
// Select icon box
let icon = document.querySelector(".toggle-settings");

// Function To open when click
function openIt() {
  // Spin The Icon
  document.querySelector(".toggle-settings .fa-gear").classList.toggle("fa-spin");
  // Open Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
}
icon.addEventListener("click", openIt);
// -----------

// Switch Colors
let colorsLi = document.querySelectorAll(".colors-list li");

// Loop on All list itmes
colorsLi.forEach(li => {
  // Click on every item
  li.addEventListener('click', (e) => {
    // console.log(e.target.dataset.color);
    // Set Color On Root 
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
    // Set color on local storage
    localStorage.setItem("color-option", e.target.dataset.color);
    // Remove active class from all children
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // Add active class on self
    e.target.classList.add("active");
  });
})

// ------------

// Random Backgrounds Option in Box
let randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Random Background Option
let backgroundOption = true;

// Variable to control the background interval
let backgroundInterval;

// Check if there's a local storage random background item and create if not exist
let backgroundLocalItem = localStorage.getItem("background-option");

// Check if random background item is not empty
if (backgroundLocalItem !== null) {
  // Remove active class from all spans
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
    // Add active class to the local storage element (YES)
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    backgroundOption = false;
    // Add active class to the local storage element (NO)
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }

  // // Remove active class from all spans
  // document.querySelectorAll(".random-backgrounds span").forEach((element) => {
  //   element.classList.remove("active");
  // });
}

// Loop on All Spans
randomBackEl.forEach(span => {
  // Click on every span
  span.addEventListener('click', (e) => {
    // Remove active class from all children
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // Add active class on self
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizeImgs();
      localStorage.setItem("background-option", "true");
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background-option", "false");
    }
  });
});

// ===========================================

// ===========================================
// Random Image
// ==============

// Select Landing Page
let landingPage = document.querySelector(".landing-page");

// Get Array of Images
let imgs = [];
for (let i = 1; i < 8; i++) {
  imgs.push(`${i}.jpg`);
}

// Function to randomize imgs
function randomizeImgs() {
  if (backgroundOption) {
    backgroundInterval = setInterval(() => {
      // Change Background Image Url
      landingPage.style.backgroundImage = `url("imgs/${
        Math.floor(Math.random() * imgs.length) + 1
      }.jpg")`;
      landingPage.style.transition = "0.6s";
      // landingPage.style.transform = "translate(1, 2)";
    }, 1000);
  }
}
randomizeImgs();

// ===========================================
