

/*
// Get the to-do list element
const todoList = document.getElementById("todo-list");

// Fetch the task data from the "task-data.json" file
fetch("task-data.json")
  .then(response => response.json())
  .then(data => {
    // Loop through the tasks
    data.forEach(task => {
      // Create a new list item element
      const listItem = document.createElement("li");
      listItem.innerText = task.title;

      // Add the list item to the to-do list
      todoList.appendChild(listItem);
    });
  });

  */
//+++++ second parte

/*
// Get the to-do list element
const todoList = document.getElementById("todo-list");

// Declare the data array
let data = [];

// Fetch the task data from the "task-data.json" file
fetch("task-data.json")
  .then(response => response.json())
  .then(data => {
    // Loop through the tasks
    data.forEach(task => {
      // Create a new list item element
      const listItem = document.createElement("li");
      listItem.innerText = task.title;

      // Add the list item to the to-do list
      todoList.appendChild(listItem);
    });
  });

// Get the add task form
const addTaskForm = document.getElementById("todo-form");

// Add a submit event listener to the form
addTaskForm.addEventListener("submit", event => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the task input element
  const taskInput = document.getElementById("todo-input");

  // Add a new task to the data array
  const newTask = {
    id: data.length + 1,
    title: taskInput.value,
    completed: false
  };
  data.push(newTask);

  // Update the "task-data.json" file with the new data
  updateTaskData(newTask);

  // Clear the input field
  taskInput.value = "";

  // Create a new list item element for the new task
  const listItem = document.createElement("li");
  listItem.innerText = newTask.title;

  // Add the list item to the to-do list
  todoList.appendChild(listItem);
});

// Update the "task-data.json" file with the new data
function updateTaskData(task) {
  fetch("task-data.json", {
    method: "POST",
    body: JSON.stringify(task)
  });
}
*/

// Tercera Parte

// Get the to-do list element
const todoList = document.getElementById("todo-list");

// Get the add task form
const addTaskForm = document.getElementById("todo-form");

// Declare the data array
let data = [];

// Fetch the task data from the "task-data.json" file
fetch("task-data.json")
  .then(response => response.json())
  .then(fetchedData => {
    // Update the data array
    data = fetchedData;

    // Loop through the tasks
    data.forEach((task, index) => {
      // Create a new list item element
      const listItem = document.createElement("li");
      listItem.innerText = task.title;

      // Create a delete button
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";

      // Add a click event listener to the delete button
      deleteButton.addEventListener("click", () => {
        // Remove the task from the data array
        data.splice(index, 1);

        // Update the "task-data.json" file with the new data
        updateTaskData(data);

        // Remove the list item from the to-do list
        todoList.removeChild(listItem);
      });

      // Add the delete button to the list item
      listItem.appendChild(deleteButton);

      // Add the list item to the to-do list
      todoList.appendChild(listItem);
    });
  });

// Add a submit event listener to the form
addTaskForm.addEventListener("submit", event => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the task input element
  const taskInput = document.getElementById("todo-input");

  // Add a new task to the data array
  const newTask = {
    id: data.length + 1,
    title: taskInput.value,
    completed: false
  };
  data.push(newTask);

  // Update the "task-data.json" file with the new data
  updateTaskData(data);

  // Clear the input field
  taskInput.value = "";

  // Create a new list item element for the new task
  const listItem = document.createElement("li");
  listItem.innerText = newTask.title;

  // Create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

//CZ------
// Declare the data array
let index = [];


    // Add a click event listener to the delete button
deleteButton.addEventListener("click", () => {
  // Remove the task from the data array
  data.splice(index, 1);

  // Update the "task-data.json" file with the new data
  updateTaskData(data);

  // Remove the list item from the to-do list
  todoList.removeChild(listItem);
});

// Add the delete button to the list item
listItem.appendChild(deleteButton);

// Add the list item to the to-do list
todoList.appendChild(listItem);
});

// Update the "task-data.json" file with the new data
function updateTaskData(data) {
  fetch("task-data.json", {
    method: "POST",
    body: JSON.stringify(data)
  });
}
