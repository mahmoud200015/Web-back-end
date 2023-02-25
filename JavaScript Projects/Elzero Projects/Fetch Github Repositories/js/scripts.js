// Main Varaibles
let theInput = document.querySelector(".get-repos input");
let getBtn = document.querySelector(".get-repos .btn-repos");
let reposData = document.querySelector(".show-data");

getBtn.addEventListener('click', getRepos);

// Get Repos Function
function getRepos() {
  if (theInput.value === "") {
    reposData.innerHTML = `<span>Please Write Github Username.</span>`;
  } else {
    fetch("https://api.github.com/users/ElzeroWebSchool/repos")
      .then((response) => {
        return response.json();
      })
      .then((repositories) => {
        console.log(repositories);
        // Empty the Container
        reposData.innerHTML = "";
      });
  }
}