// ===========================================
// Open Settings Box -- Toggle Spin Class ON Icon

// Select icon box
let icon = document.querySelector(".toggle-settings .fa-gear");

// Open when click  
function openIt() {
  this.prevent
  console.log(icon);
  this.classList.toggle("fa-spin");
  document.querySelector(".settings-box").classList.toggle('open');
}
icon.addEventListener('click', (e) => {
  console.log(e)
});
// ===========================================

// ===========================================
// Random Image 

// Select Landing Page
let landingPage = document.querySelector(".landing-page");

// Get Array of Images
let imgs = [];
for (let i = 1; i < 8; i++) {
  imgs.push(`${i}.jpg`);
}
// console.log(imgs);

setInterval(() => {
  // Change Background Image Url
  landingPage.style.backgroundImage = `url("imgs/${Math.floor(Math.random() * imgs.length) + 1}.jpg")`;
  landingPage.style.transition = "0.6s";
  // landingPage.style.transform = "translate(1, 2)";
}, 10000);

console.log(imgs.length)
// ===========================================

