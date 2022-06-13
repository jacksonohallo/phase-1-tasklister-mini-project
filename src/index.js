document.addEventListener("DOMContentLoaded", () => {
  const createNewTask = document.getElementById("create-task-form");

  const newTaskDescription = document.getElementById("new-task-description");


  const listOfTask = document.getElementById("tasks");

  createNewTask.addEventListener("submit", writeNewTask);
  
});

const writeNewTask = event => {

  event.preventDefault();
  //stop form from trying to submit.


  const newTaskDeescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDeescription.value;

  appendNewTask(newTask);
  event.target.reset();

};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};







  



















