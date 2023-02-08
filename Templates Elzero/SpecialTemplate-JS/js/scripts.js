// ===========================================
// Function onscroll on all page
// =================
window.onscroll = () => {
  // Animation when reach section Our Skills -- (Important -- revision on it again);
  animationSkills();
  // Button to scroll back to top
  scrollBtn();
};

// Or use this code rather than above
// window.addEventListener("scroll", animationSkills);
// window.addEventListener("scroll", scrollBtn);

// ===========================================

// ===========================================
// Function to Handle Active State
// =================
function handleActive(event) {
  // Remove active class from all children
  event.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  // Add active class on self
  event.target.classList.add("active");
}

// ===========================================

// ===========================================
// Open Settings Box
// =================

// Check If there's local storage color option
let mainColors = localStorage.getItem("color_option");
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
  document
    .querySelector(".toggle-settings .fa-gear")
    .classList.toggle("fa-spin");
  // Open Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
}
icon.addEventListener("click", openIt);
// -----------

// Switch Colors
let colorsLi = document.querySelectorAll(".colors-list li");

// Loop on All list itmes
colorsLi.forEach((li) => {
  // Click on every item
  li.addEventListener("click", (e) => {
    // console.log(e.target.dataset.color);
    // Set Color On Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // Set color on local storage
    localStorage.setItem("color_option", e.target.dataset.color);
    // Call Active Function
    handleActive(e);
  });
});

// ------------

// Random Backgrounds Option in Box
let randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Random Background Option
let backgroundOption = true;

// Variable to control the background interval
let backgroundInterval;

// Check if there's a local storage random background item and create if not exist
let backgroundLocalItem = localStorage.getItem("background_option");

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

// Loop on All Spans
randomBackEl.forEach((span) => {
  // Click on every span
  span.addEventListener("click", (e) => {
    // Call Active Function
    handleActive(e);

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizeImgs();
      localStorage.setItem("background_option", "true");
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background_option", "false");
    }
  });
});

// ------------

// Reset Button Options

document.querySelector(".reset-options").onclick = function () {
  // localStorage.clear(); // clear all data in local
  localStorage.removeItem("color_option");
  localStorage.removeItem("background_option");
  localStorage.removeItem("bullets_option");
  // Reload Window
  window.location.reload();
};

// ===========================================

// ===========================================
// Animation when reach section Our Skills -- (Important -- revision on it again);
// ==============

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

// Do Animation When Scrolling
  function animationSkills () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;
  // console.log(skillsOffsetTop);
  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;
  // console.log(skillsOuterHeight);
  // Window Height
  let windowHeight = window.innerHeight;
  // console.log(windowHeight);
  // Window ScrollTop
  let windowScrollTop = this.scrollY;
  // console.log(windowScrollTop);

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    // console.log('Skills Reached');
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );
    allSkills.forEach((skill) => {
      // very important and smart
      skill.style.width = skill.dataset.progress;
    });
  }
};
// ===========================================

// ===========================================
// Create Pop-up with images
// ==============

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create Overlay Popup and and append it
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);

    // Create Popup Box
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    if (img.alt !== null) {
      // Create Heading
      let imgHeading = document.createElement("h3");
      imgHeading.textContent = img.alt;
      // Append Heading to Popup Box
      popupBox.appendChild(imgHeading);
    }
    // Create Image in Box
    let popupImage = document.createElement("img");
    // Set Image Source
    popupImage.src = img.src; // Or img.src === e.target.src
    // Append Image to Popup Box -- Append Popup Box to Body
    popupBox.appendChild(popupImage);
    document.body.appendChild(popupBox);

    // Create Close x Span
    let closeSpan = document.createElement("span");
    closeSpan.innerHTML = "X";
    closeSpan.className = "close-span";
    // Create Icon font Background for Close Span
    let iconBack = document.createElement("i");
    iconBack.className = "fa-solid fa-droplet";
    // Append Close Span to Popup Box --
    popupBox.appendChild(closeSpan);
    popupBox.appendChild(iconBack);
    
    // Create Object of our projects (all details)
    let detailsProjects = {
      imageSlide: {
        textContent: "Skills Used: Html, css, (Javascript)",
        linkhref: "https://imagesliderjs.blogspot.com/",
        linktext: "Js Slider",
      },
      qrCode: {
        textContent: "Skills Used: Html, (css), (Javascript)",
        linkhref: "https://qrcodegentherock.blogspot.com/",
        linktext: "QR Code Generator",
      },
    };

    // Create Details for Image Project
    for (let project in detailsProjects) {
      console.log(detailsProjects[project].textContent)
      let skills = document.createElement("p");
      skills.textContent = detailsProjects[project].textContent;
      popupBox.appendChild(skills);
      let link = document.createElement("a");
      link.href = detailsProjects[project].linkhref;
      link.target = "_blank";
      link.textContent = detailsProjects[project].linktext;
      popupBox.appendChild(link);
    }

    // let skills = document.createElement("p");
    // skills.textContent = "Skills Used: Html, css, (Javascript)";
    // popupBox.appendChild(skills);
    // let link = document.createElement("a");
    // link.href = "https://imagesliderjs.blogspot.com/";
    // link.target = '_blank';
    // link.textContent = "Js Slider";
    // popupBox.appendChild(link);
  });
});

// Close Popup
document.addEventListener("click", function (e) {
  if (e.target.className === "close-span") {
    // Remove Current Popup
    e.target.parentElement.remove();
    // Remove Overlay Div
    document.querySelector(".popup-overlay").remove();
  }
});

// ===========================================

// ===========================================
// Function Collect with ( Deal with bullets in page -- Deal with links in Landing Page)
// ==============

function scrollToWhere(elements) {
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      // console.log(e.target.dataset.section);
      // Important (prevent reload your page because # hreference)
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

// ===========================================

// ===========================================
// Deal with bullets in page
// ==============

// Select all bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
scrollToWhere(allBullets);

// Show and Hide Bullets in page
let bulletsSpan = document.querySelectorAll(".option-box .bullets-option span");
let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");
if (bulletLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });
  bulletsContainer.classList.remove("hidden");
  if (bulletLocalItem === "translate(0, -50%)") {
    bulletsContainer.style.transform = "translate(0, -50%)";
    bulletsContainer.classList.remove("hidden");
    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletsContainer.style.transform = "translate(50px, -50%)";
    bulletsContainer.classList.add("hidden");
    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    handleActive(e);
    if (span.dataset.display === "show") {
      bulletsContainer.style.transform = "translate(0, -50%)";
      bulletsContainer.classList.remove("hidden");
      localStorage.setItem("bullets_option", "translate(0, -50%)");
    } else {
      bulletsContainer.style.transform = "translate(50px, -50%)";
      bulletsContainer.classList.add("hidden");
      localStorage.setItem("bullets_option", "translate(50px, -50%)");
    }
  });
});

// ===========================================

// ===========================================
// Deal with links in Landing Page
// ==============

// Select all links
const allLinks = document.querySelectorAll(".landing-page .links a");
scrollToWhere(allLinks);
// ===========================================

// ===========================================
// Toggle Menu on small screens
// ==============

let toggleMenu = document.querySelector(".landing-page .toggle-menu");
let toggleLinks = document.querySelector(".header-area .links");
toggleMenu.onclick = function (e) {
  // Stop Propagation on toggle button
  e.stopPropagation();
  // Toggle class "menu-active" on button
  this.classList.toggle("menu-active");
  // Toggle class "open" on links
  toggleLinks.classList.toggle("open");
};

// Stop Propagation on Toggle Links
toggleLinks.onclick = function (e) {
  e.stopPropagation();
};

// Click anywhere outside menu and toggle button
window.document.addEventListener("click", (e) => {
  if (e.target !== toggleLinks && e.target !== toggleMenu) {
    if (toggleLinks.classList.contains("open")) {
      // Toggle class "menu-active" on button
      toggleMenu.classList.toggle("menu-active");
      // Toggle class "open" on links
      toggleLinks.classList.toggle("open");
    }
  }
});

// ===========================================

// ===========================================
// Button to scroll back to top
// =================

let myBtn = document.getElementById("myBtn");

let scrollBtn = () => {
  if (
    document.documentElement.scrollTop > 200 ||
    document.body.scrollTop > 200
  ) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
myBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// ===========================================
