// Setting Up Variables
let theInput = document.querySelector(".add-task input");
let addBtn = document.querySelector(".add-task .plus");
let taskCont = document.querySelector(".tasks-content");
let noTaskMsg = document.querySelector(".no-tasks");

let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

// Focus on input filed
window.onload = () => {
  theInput.focus();
}

/*
  # Tasks from elzero For ME:
  - use sweet alert() if input is empty
  - 
*/

// Adding the task
addBtn.addEventListener('click', function () {
  // if input is empty
  if (theInput.value === "") {
    console.log('No Value')
  } else {
    // Remove Task Message
    noTaskMsg.remove();

    // Create span element - delete button
    let mainSpan = document.createElement("span");
    let delSpan = document.createElement("span");

    // Create text for span - text for delete
    let txtMain = document.createTextNode(theInput.value);
    let txtDel = document.createTextNode("Delete");

    // Add Text to mainSpan - delSpan
    mainSpan.appendChild(txtMain);
    delSpan.appendChild(txtDel);
    
    // Add del to main span
    mainSpan.appendChild(delSpan);

    // Add Classes on elements
    mainSpan.className = 'task-box';
    delSpan.className = 'delete';

    // Add task to the tasks container
    taskCont.appendChild(mainSpan);

    // Finally, Empty the input when click (plus)
    theInput.value = "";
    // Focus on input again after empty
    theInput.focus();


  }



});