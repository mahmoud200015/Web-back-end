// Setting Up Variables
let theInput = document.querySelector(".add-task input");
let addBtn = document.querySelector(".add-task .plus");
let taskCont = document.querySelector(".tasks-content");

let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

let markCheck = document.querySelector(".todo-container .tasks-content .task-box .check");

// Focus on input filed
// window.onload = () => {
//   theInput.focus();
// }

// ---- local storage -------

let localtodos = JSON.parse(localStorage.getItem("localtodo")) || [];
let localfinished = JSON.parse(localStorage.getItem("finished")) || [];

if (localtodos !== null || localfinished !== null) {
  // if (localtodos.length > 0) {
  //   let noTaskMsg = document.querySelector(".no-tasks");
  //   // Check if span message (no tasks) is existed
  //   if (document.body.contains(noTaskMsg)) {
  //     // Remove Task Message
  //     noTaskMsg.remove();
  //   }
  // }

  localtodos.forEach((todo, index) => {
    createTasks(todo);
  });

  console.log(localtodos)
  console.log(localfinished)

  localfinished.forEach(todofinish => {
    Array.from(taskCont.children).forEach(childTask => {
      if (todofinish === childTask.innerHTML.slice(0, childTask.innerHTML.indexOf("<"))) {
        childTask.classList.add("finished");
        childTask.children[2].classList.add('right');
      }
    })
  }); 
  
  // Calculate Tasks
  calcTasks();  
}

// ------------------------ add task -------------------

// Adding the task with ((plus Button and -- Enter keyboard))

theInput.onkeypress = function (e) {
  // e.preventDefault(); // Ensure it is only this code that runs
  if (e.keyCode === 13) {
    addTask();
  }
}

addBtn.addEventListener('click', addTask);
function addTask() {

  if (theInput.value === "") {
    // window.alert("Please Enter Your Task.");
    // Sweet alert
    Swal.fire({
      title: "No Value",
      text: "Please Enter Your Task",
      icon: "warning",
      timer: "5000",
      width: 500,
      color: "#E91E63",
    });
  } else {
    // Local Storage
    // let localtodos = JSON.parse(localStorage.getItem("localtodo")) || [];
    if (localtodos.includes(theInput.value)) {
      console.log('Value is Existed');
    } else {
      localtodos.push(theInput.value);
      localStorage.setItem("localtodo", JSON.stringify(localtodos));
    }
    createTasks(theInput.value);
    calcTasks();
    theInput.value = "";
    theInput.focus();
  }

};

// ------------------------

// Function to Create Tasks
function createTasks(task) {


  let noTaskMsg = document.querySelector(".no-tasks");
  // Check if span message (no tasks) is existed
  if (document.body.contains(noTaskMsg)) {
    // Remove Task Message
    noTaskMsg.remove();
  }

  // Create span element - delete button
  let mainSpan = document.createElement("span");
  let delSpan = document.createElement("i");
  let updateSpan = document.createElement("i"); //
  let checkmark = document.createElement("span");

  // Create text for span - text for delete
  let txtMain = document.createTextNode(task);
  let txtDel = document.createTextNode("Delete");
  // let txtComp = document.createTextNode("Finish"); //


  // Add Text to mainSpan - delSpan
  mainSpan.appendChild(txtMain);
  // delSpan.appendChild(txtDel);
  // updateSpan.appendChild(txtComp); //

  // Add del to main span
  mainSpan.appendChild(delSpan);
  mainSpan.appendChild(updateSpan);
  mainSpan.appendChild(checkmark);

  // Add Classes on elements
  mainSpan.className = "task-box";
  delSpan.className = "delete fa-solid fa-delete-left";
  updateSpan.className = "update fa-solid fa-pen-to-square";
  checkmark.className = "check";

  // Check if the task is already exist
  if (checkTasks(task)) {
    Swal.fire({
      title: "Your Task is Already Existed",
      // text: "Your Task is existed",
      icon: "info",
      timer: "5000",
      width: 500,
      color: "#E91E63",
    });
  } else {
    // Add task to the tasks container
    taskCont.appendChild(mainSpan);
  }
  
}


// ------------------
// Function to Check if the task is already exist
function checkTasks(inputValue) {
  let tasks = document.querySelectorAll(".tasks-content .task-box");
  let existed = false;
  for (let i = 0; i < tasks.length; i++) {
    // console.log(inputValue, tasks[i].innerHTML.slice(0, tasks[i].innerHTML.indexOf("<")));
    if (inputValue === tasks[i].innerHTML.slice(0, tasks[i].innerHTML.indexOf("<"))) {
      existed = true;
      break;
    } else {  
      existed = false
    }
  }
  // ((((((( previous versions of above code )))))));

  // let tasks = localtodos;
  // let existed = false;
  // console.log(localtodos)
  // for (let i = 0; i < tasks.length; i++) {
  //   // console.log(tasks));
  //   if (localtodos.includes(inputValue)) {
  //     existed = true;
  //     break;
  //   } else {
  //     existed = false;
  //   }
  // }
  // tasks.forEach((task) => {
  //   if (inputValue === task.innerHTML.slice(0, task.innerHTML.indexOf("<"))) {
  //     existed = true;
  //     break;
  //   } else {
  //     existed = false
  //   }
  // });
  // console.log(existed);
  return existed;
}
  
// ----------------------   delete - update - finish (task);

document.addEventListener('click', function (e) {
  // Delete Task
  if (e.target.classList.contains("delete")) {
    // To remove element task
    e.target.parentElement.remove();

    // local storage of localtodos
    let task = e.target.parentElement.innerHTML.slice(
      0,
      e.target.parentElement.innerHTML.indexOf("<")
    );
    localtodos.splice(localtodos.indexOf(task), 1);
    localStorage.setItem("localtodo", JSON.stringify(localtodos));

    // local storage of localfinished
    localfinished.splice(localfinished.indexOf(task), 1);
    localStorage.setItem("finished", JSON.stringify(localfinished));

    // check if tasks = 0 and no tasks to show
    if (taskCont.children.length === 0) {
      createNoTasks();
    }
  }
  // Update Task 
  if (e.target.classList.contains("update")) {
    // Remove Element Select to update from (local storage (localtodos -- localfinished) & page);
    // From local storage = localtodos
    let task = e.target.parentElement.innerHTML.slice(
      0,
      e.target.parentElement.innerHTML.indexOf("<")
      );
    localtodos.splice(localtodos.indexOf(task), 1);
    localStorage.setItem("localtodo", JSON.stringify(localtodos));
    // From local storage = localfinished
    localfinished.splice(localfinished.indexOf(task), 1);
    localStorage.setItem("finished", JSON.stringify(localfinished));
    // ----
    // From Page
    e.target.parentElement.remove();
    // Update input value to update text of the task
    theInput.focus();
    theInput.value = task;
  }

  // ---------------
  // Finish Task
  if (e.target.classList.contains("check")) {

    // Toggle class 'finished' to text task
    e.target.parentElement.classList.toggle('finished');
    // Toggle class 'right' to markCheck
    e.target.classList.toggle("right");
    // Make Sweet alert success
    if (e.target.classList.contains("right")) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Finshed, Keep Going 💪🏼",
      });

      // Local Storage
      let valueFinished = e.target.parentElement.innerHTML.slice(
        0,
        e.target.parentElement.innerHTML.indexOf("<")
      );
      console.log(valueFinished);
      if (!localfinished.includes(valueFinished)) {
        localfinished.push(valueFinished);
        localStorage.setItem("finished", JSON.stringify(localfinished));
      } else {
      }
    } else {
      // local storage
      let task = e.target.parentElement.innerHTML.slice(
        0,
        e.target.parentElement.innerHTML.indexOf("<")
      );
      localfinished.splice(localfinished.indexOf(task), 1);
      localStorage.setItem("finished", JSON.stringify(localfinished));
    }
  }

  // Calculate Tasks
  calcTasks();
});

// Function to create no tasks message
function createNoTasks() {
  // Create message span element
  let msgSpan = document.createElement("span");
  msgSpan.textContent = "No Tasks To Show";
  // Add class name (no-tasks) to message span
  msgSpan.className = 'no-tasks';
  // append span element to task container
  taskCont.appendChild(msgSpan);
}

// Function to calculate Tasks
function calcTasks() {
  // Calculate All Tasks
  tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;
  // update
  // tasksCount.innerHTML = localtodos.length;

  // Calculate Completed Tasks
  tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;
}

let btnDeleteAll = document.querySelector(".task-options .tasks-delete span");
let btnFinishAll = document.querySelector(".task-options .tasks-finish span");

btnDeleteAll.addEventListener('click', deleteAllTasks);
btnFinishAll.addEventListener('click', finishAllTasks);

// --------------------- delete all - finish all -----------------------

// Function to delete all tasks or finished
function deleteAllTasks() {
  // New in my code Confirm Message before delete all tasks
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your tasks has been deleted.", "success");
      // Delete all tasks
      if (
        taskCont.contains(document.querySelector(".tasks-content .task-box"))
      ) {
        // To Remove All Element Tasks
        Array.from(taskCont.children).forEach((task) => {
          task.remove();
        });
        // local storage of localtodos
        // localStorage.removeItem("localtodo");
        // localStorage.clear();
        localStorage.setItem("localtodo", JSON.stringify([]));
        // local storage of localfinished
        localStorage.setItem("finished", JSON.stringify([]));

        // check if tasks = 0 and no tasks to show
        if (taskCont.children.length === 0) {
          createNoTasks();
        }
      } else {
        Swal.fire("No tasks to delete");
      }
    }
  });
  

  // Calculate Tasks -- possible to delete function call and it works but I don't know why
  calcTasks();
}
function finishAllTasks() {
  // console.log(taskCont.children[0].classList.contains("no-tasks"));
  if (!taskCont.children[0].classList.contains("no-tasks")) {
    let doSweet = false;
    // To Finish All Tasks
    Array.from(taskCont.children).forEach((task) => {
      task.classList.add("finished");
      task.children[2].classList.add("right");
      // console.log(task.children[2])

      if (task.classList.contains("finished")) {
        doSweet = true;
      }
    });

    // Local Storage
    localStorage.setItem("finished", JSON.stringify([]));
    for (let i = 0; i < localtodos.length; i++) {
      if (!localfinished.includes(localtodos[i])) {
        localfinished.push(localtodos[i]);
      }
    }
    localStorage.setItem("finished", JSON.stringify(localfinished));



    // Calculate Tasks -- possible to delete function call and it works but I don't know why
    calcTasks();

    // Make Sweet alert when finished all
    if (doSweet) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "All Tasks Finsihed, Done.",
      });
    }
  }
}

// -----------------------------------------------------------

// show features

function showfeatures() {
  document.querySelector(".extra-develop h2").style.display = "block";
}

// ------- Links Of me
// let linkedin = document.querySelector(".contacts .fa-linkedin");
// linkedin.addEventListener('click', (e) => {
//   window.open("https://www.linkedin.com/in/mahmoudayman2019/", "_blank");
// });
// let github = document.querySelector(".contacts .fa-square-github");
// github.addEventListener('click', (e) => {
//   window.open("https://github.com/mahmoud200015", "_blank");
// });