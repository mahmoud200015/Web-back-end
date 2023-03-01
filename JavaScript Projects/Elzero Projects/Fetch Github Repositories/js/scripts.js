// Digtal Clock 

// Get HTML elements
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

// Update clock every second
setInterval(updateClock, 1000);

// Function to update clock
function updateClock() {
  // Get current date and time
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  // Add zero padding if needed
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  // Set text content of HTML elements
  hour.textContent = h;
  minute.textContent = m;
  second.textContent = s;
}


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
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => {
        return response.json();
      })
      .then((repositories) => {
        // console.log(repositories);
        if (repositories.length === 0) {
          reposData.innerHTML = `<span>Username Is Not Existed.</span>`;
        } else {
          createRepos(repositories);
        }
      });
  }
}
// Create Repos Function
function createRepos(repositories) {
  // Empty the Container
  reposData.innerHTML = "";
  // Loop on repositories
  repositories.forEach((repo) => {
    // Create Main Div Element
    let mainDiv = document.createElement("div");
    // Create Repe Name TExt
    let repoName = document.createTextNode(repo.name);
    mainDiv.appendChild(repoName);

    // Create Repoe Url Anchor
    let theUrl = document.createElement("a");
    theUrl.innerHTML = "Visit";
    theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
    theUrl.setAttribute('target', '_blank');
    // theUrl.target = "_blank";
    // Append url to main Div
    mainDiv.appendChild(theUrl);

    // Create Starts Count span
    let starsSpan = document.createElement('span');
    starsSpan.innerHTML = `Stars: ${repo.stargazers_count}`;
    mainDiv.appendChild(starsSpan);

    // Add class on Main Div
    mainDiv.className = "repo-box";


    reposData.appendChild(mainDiv);
  })
}

// ======================================= Task =====

// Extra Features to make it
// Go To website (JSON placeholder) and make a section of articles from fake data in the website

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => {
//     json.forEach(article => {
//       console.log(article)
//       let mainDiv = document.createElement("div");
//       mainDiv.className = "main-section";

//       let userId = document.createElement("span");
//       userId.innerHTML = `userId: ${article.userId}`;
//       userId.className = "userId";

//       let id = document.createElement("span");
//       id.innerHTML = `id: ${article.id}`;
//       id.className = "id";

//       let title = document.createElement("span");
//       title.innerHTML = `title: ${article.title}`;
//       title.className = "title";

//       let completed = document.createElement("span");
//       completed.innerHTML = `completed: ${article.completed}`;
//       completed.className = "completed";

//       mainDiv.append(userId, id, title, completed);

//       document.body.appendChild(mainDiv);
      
//     })
// });