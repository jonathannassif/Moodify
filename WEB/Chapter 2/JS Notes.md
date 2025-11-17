// ToDo List

<div class="todo">
  <input type="text" id="taskInput" placeholder="Enter a task" />
  <button id="addTaskBtn">Add</button>
  <p id="errorTask"></p>
  <ul id="taskList"></ul>
</div>
// ToDo List

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const errorTask = document.getElementById("errorTask");
const taskList = document.getElementById("taskList");

function addTask() {
const taskText = taskInput.value.trim();

if (taskText === "") {
errorTask.textContent = "Please enter a task";
errorTask.style.color = "red";
return;
}

errorTask.textContent = "";

// Create LI element
const li = document.createElement("li");
li.textContent = taskText;

// Toggle "done" class on click
li.addEventListener("click", function () {
li.classList.toggle("done");
});

// Append to the list
taskList.appendChild(li);

// Clear input
taskInput.value = "";
}

// Add task on button click
addTaskBtn.addEventListener("click", addTask);

// (Optional) Add task on Enter key press
taskInput.addEventListener("keypress", function (e) {
if (e.key === "Enter") addTask();
});

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "❌";
deleteBtn.classList.add("delete-btn");
deleteBtn.addEventListener("click", function (e) {
e.stopPropagation();
li.remove();
});

li.appendChild(deleteBtn);
taskList.appendChild(li);

taskInput.value = "";
