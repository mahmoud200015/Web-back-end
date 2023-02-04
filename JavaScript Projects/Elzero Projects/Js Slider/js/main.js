// Get Slider Items
let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

let slidesCount = sliderImages.length;

let currentSlide = 1;

let slideNumberElement = document.getElementById("slide-number");

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

// Handle Click on previous and next button
nextBtn.addEventListener('click', nextSlide);
prevBtn.onclick = prevSlide;

// Create The Main Ul Element Pagination
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");
// (or) paginationElement.id = "pagination-ul";

// Create list items based on slides count
for (let i = 1; i <= slidesCount; i++) {
  let paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.textContent = `${i}`;
  // (or) paginationItem.appendChild(document.createTextNode(`${i}`));

  // Append Items to The Main Element of ul list
  paginationElement.appendChild(paginationItem);
}

// Add Ul List to the Page to the indicators
document.getElementById("indicators").appendChild(paginationElement);

// Get the new created ul
let paginationCreatedUl = document.getElementById("pagination-ul");
// Get pagination items
let paginationItems = [...document.querySelectorAll("#pagination-ul li")];

// Handle Click on pagination items
paginationItems.forEach(item => {
  item.addEventListener('click', () => {
    // itemClick(item.dataset.index);
    // Another way and it's better for time
    currentSlide = +item.dataset.index;
    theChecker();
  });
});

// Trigger theChecker Function
theChecker();

function itemClick(clicked) {
  console.log(+clicked)
  while (+clicked > currentSlide) {
    nextSlide();
  }
  while (+clicked < currentSlide) {
    prevSlide();
  }
}
function nextSlide() {
  // console.log('next');
  if (currentSlide < slidesCount) {
    currentSlide++;
    theChecker();
  }
}
function prevSlide() {
  // console.log('prev');
  if (currentSlide > 1) {
    currentSlide--;
    theChecker();
  }
}

// Create the checker function
function theChecker() {
  // Set the number of slide
  slideNumberElement.textContent = `Slide #${currentSlide} of ${slidesCount}`;

  // Remove Active
  removeAllActive();

  // Set active class on current slide
  sliderImages[currentSlide - 1].classList.add("active");
  // Set active class on current pagination item
  paginationCreatedUl.childNodes[currentSlide - 1].classList.add("active");

  // Check if the current slide is the first
  if (currentSlide === 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
  // Check if the current slide is the last
  if (currentSlide === slidesCount) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}

// Remove active classes from images and pagination items
function removeAllActive() {
  // remove active class on ass slides
  sliderImages.forEach(img => {
    img.classList.remove("active");
  });
  // remove active class on ass pagination items
  paginationItems.forEach(item => {
    item.classList.remove("active");
  })
}

