// THE CALCULATOR EXERCISE
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const addBtn = document.querySelector("#btn");
const result = document.querySelector("#result");

addBtn.addEventListener("click", () => {
  const sum = Number(num1.value) + Number(num2.value);
  result.textContent = `Result: ${sum}`;
});

// THE CHANGE COLOR EXERCISE
const message = document.querySelector("#messageInput");
const changeColorBtn = document.querySelector("#checkBtn");
const display = document.querySelector("#display");

changeColorBtn.addEventListener("click", function () {
  const text = message.value;
  display.textContent = text;

  if (text.includes("error")) {
    display.style.color = "red";
  } else {
    display.style.color = "green";
  }
});

// THE TODO LIST FIRSTTT EXERCISE
const input = document.querySelector("body > div.toDoList > input[type=text]");
const addListBtn = document.querySelector("#addList");
const ul = document.querySelector("#ul");

addListBtn.addEventListener("click", function () {
  const newTask = input.value.trim();

  if (newTask === "") {
    alert("Please type a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = newTask;

  ul.appendChild(li);

  input.value = "";
});

// TEXTAREA COUNT CHARS EXERCISE
const textarea = document.querySelector("#textarea");
const characters = document.querySelector("#charactersP");
const upperCase = document.querySelector("#upper");

textarea.addEventListener("input", function () {
  const count = textarea.value.length;
  characters.textContent = `Characters: ${count}`;
  if (count >= 100) {
    characters.style.color = "red";
  } else {
    characters.style.color = "green";
  }

  const text = textarea.value;

  const theUpper = text.toUpperCase();

  upper.textContent = theUpper;
});

// Greeting Program
const nameInput = document.querySelector("#nameInput");
const greetBtn = document.querySelector("#greetBtn");
const theGreeting = document.querySelector("#theGreeting");

function showGreeting() {
  const name = nameInput.value.trim();

  if (name === "") {
    theGreeting.textContent = `Please Enter A Name`;
    theGreeting.style.color = "red";
  } else {
    theGreeting.textContent = `Hello ${name}`;
    theGreeting.style.color = "green";
  }
}

greetBtn.addEventListener("click", showGreeting);

nameInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    showGreeting();
    // same logic as button click
  }
});

// Counter Program
const decreaseBtn = document.getElementById("decBtn");
const increaseBtn = document.getElementById("incBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let counter = 0;

increaseBtn.addEventListener("click", function () {
  counter += 1;
  countLabel.textContent = counter;
});

decreaseBtn.addEventListener("click", function () {
  counter -= 1;
  countLabel.textContent = counter;
});

resetBtn.addEventListener("click", function () {
  counter = 0;
  countLabel.textContent = counter;
});

// Dice Roll

const myButton = document.getElementById("diceBtn");
const myLabel = document.getElementById("diceLabel");
const min = 1;
const max = 6;

let randomNum;

myButton.onclick = function () {
  randomNum = Math.floor(Math.random() * max) + min;
  myLabel.textContent = `You rolled: ${randomNum}`;
};

// Password STRENGTH CHECKER

const pass = document.querySelector("#pass");
const toggleBtn = document.getElementById("toggleBtn");
const strengthText = document.getElementById("strengthText");

pass.addEventListener("input", function () {
  const password = pass.value;
  const length = password.length;

  if (length < 5) {
    strengthText.textContent = "Strength: Weak";
    strengthText.style.color = "red";
  } else if (length < 10) {
    strengthText.textContent = "Strength: Medium";
    strengthText.style.color = "orange";
  } else {
    strengthText.textContent = "Strength: Strong";
    strengthText.style.color = "green";
  }
});

toggleBtn.addEventListener("click", function () {
  if (pass.type === "password") {
    pass.type = "text";
    toggleBtn.textContent = "🙈";
  } else {
    pass.type = "password";
    toggleBtn.textContent = "👁️";
  }
});

const confirmPass = document.getElementById("passConfirm");
const confirmMsg = document.getElementById("matchText");

confirmPass.addEventListener("input", function () {
  if (confirmPass.value === pass.value) {
    confirmMsg.textContent = "Passwords match";
    confirmMsg.style.color = "blue";
  } else {
    confirmMsg.textContent = `Passwords don't match`;
    confirmMsg.style.color = "red";
  }
});

const charCount = document.getElementById("charCount");

pass.addEventListener("input", function () {
  charCount.textContent = `${pass.value.length} characters`;
});

// Dark Mode
const toggleTheme = document.getElementById("toggleTheme");

// When page loads, check localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Click handler
toggleTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Save mode
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// To Do List
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

  // Create and attach delete button for this specific li
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevents triggering the li click
    li.remove(); // Removes the specific li this button is attached to
  });
  li.appendChild(deleteBtn);

  // Append to the list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}

// Add task on button click
addTaskBtn.addEventListener("click", addTask);

// Add task on Enter key press
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

// Payment Section
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const submitBtn = document.getElementById("submitBtn");
const subResult = document.getElementById("subResult");
const cardResult = document.querySelectorAll("cardResult");

submitBtn.addEventListener("click", function () {
  if (myCheckBox.checked) {
    subResult.textContent = "Subscription confirmed. ";
    subResult.style.color = "green";
  } else {
    subResult.textContent = "You must agree to the terms. ";
    subResult.style.color = "red";
    return; // Stop further processing
  }
});

// Temperature Challenge
const textbox = document.getElementById("textbox");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const resultTemp = document.getElementById("resultTemp");
let temp;
function convert() {
  if (toFahrenheit.checked) {
    temp = Number(textbox.value);
    temp = (temp * 9) / 5 + 32;
    resultTemp.textContent = `${temp.toFixed(2)} °F`;
  } else if (toCelsius.checked) {
    temp = Number(textbox.value);
    temp = ((temp - 32) * 5) / 9;
    resultTemp.textContent = `${temp.toFixed(2)} °C`;
  } else {
    resultTemp.textContent = "Select the unit";
  }
}

// Dice Roller Game Advanced

function rollDice() {
  const numDice = document.getElementById("numDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for (let i = 1; i <= numDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="Dice_imgs/${value}.png" alt ="Dice ${value}" />`);
  }

  diceResult.textContent = `dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join(" ");
}

const students = ["as", "s", "fsafaa"];

function upperCasee(element) {
  return element.toUpperCase();
}

// Random Color Generator
const colorBtn = document.getElementById("colorBtn");
const colorDisplay = document.getElementById("colorDisplay");
const colorCode = document.getElementById("colorCode");

colorBtn.addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  colorDisplay.style.backgroundColor = randomColor;
  colorCode.textContent = `Color Code: ${randomColor}`;
});

// Fitness tracker challenge
class User {
  static totalUsers = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._workouts = [];
    User.totalUsers++;
  }

  addWorkout(workout) {
    this._workouts.push(workout);
  }
  get totalWorkouts() {
    return this._workouts.length;
  }
  set nickname(value) {
    if (value.length < 3) {
      console.log(`Nickname must be atleast 3 characters`);
      return;
    }
    this._nickname = value;
  }
  get nickname() {
    return this._nickname;
  }
  static showStats() {
    console.log(`The total users: ${User.totalUsers}`);
  }
}

class Athlete extends User {
  constructor(name, age, sport) {
    super(name, age);
    this.sport = sport;
  }
  train() {
    console.log(`${this.name} is training ${this.sport}`);
  }
  addWorkout(workout) {
    super.addWorkout(workout);
    console.log(`${this.name} is adding ${workout} for ${this.sport}`);
  }
}

// DOM Elements
const form = document.getElementById("userForm");
const usersDiv = document.getElementById("users");
let users = [];

// Render all users
function renderUsers() {
  usersDiv.innerHTML = "";
  users.forEach((user) => {
    const div = document.createElement("div");
    div.className = "user";

    const isAthlete = user instanceof Athlete;
    const sport = isAthlete ? ` (${user.sport})` : "";

    div.innerHTML = `
      <strong>${user.name}</strong>, Age: ${user.age}${sport}<br>
      Workouts: ${user.totalWorkouts}
      <button onclick="addWorkout('${user.name}')">+ Workout</button>
      <button onclick="showTrain('${user.name}')">Train</button>
    `;
    usersDiv.appendChild(div);
  });
}

// Add workout via prompt
function addWorkout(name) {
  const user = users.find((u) => u.name === name);
  const workout = prompt("Enter workout:");
  if (workout) {
    user.addWorkout(workout);
    renderUsers();
  }
}

// Train (Athlete only)
function showTrain(name) {
  const user = users.find((u) => u.name === name);
  if (user instanceof Athlete) {
    user.train();
  } else {
    alert("Only athletes can train!");
  }
}

// Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = +document.getElementById("age").value;
  const sport = document.getElementById("sport").value;

  const user = sport ? new Athlete(name, age, sport) : new User(name, age);

  users.push(user);
  renderUsers();
  form.reset();
});

// Focus Timer
const inputTime = document.getElementById("inputTime");
const startTimerBtn = document.getElementById("startTimerBtn");
const stopTimerBtn = document.getElementById("stopTimerBtn");
const displayTextArea = document.getElementById("displayTextArea");
const alarmSound = document.getElementById("alarmSound");

let countdown; // store the interval globally so Stop can clear it

startTimerBtn.addEventListener("click", function () {
  clearInterval(countdown); // reset any previous timer

  let timeLeft = parseInt(inputTime.value) * 60;

  if (isNaN(timeLeft) || timeLeft <= 0) {
    displayTextArea.textContent = "Enter a valid number!";
    return;
  }

  countdown = setInterval(function () {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    displayTextArea.textContent = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    alarmSound.play();

    if (timeLeft <= 0) {
      clearInterval(countdown);
      displayTextArea.textContent = "Timer is done!";
    }

    timeLeft--;
  }, 1000);
});

stopTimerBtn.addEventListener("click", function () {
  clearInterval(countdown);
  displayTextArea.textContent = "Timer stopped.";
});

// Expense Tracker Challenge
// === 1. DOM Elements ===
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const addExpenseBtn = document.getElementById("addExpenseBtn");
const resetBtnn = document.getElementById("resetBtnn");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

// === 2. Data ===
let expenses = [];

// === 3. Update UI ===
function updateUI() {
  expenseList.innerHTML = "";
  expenses.forEach((exp) => {
    const li = document.createElement("li");
    li.textContent = `${exp.name}: $${exp.amount}`;
    expenseList.appendChild(li);
  });
  totalAmount.textContent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
}

// === 4. Add Expense ===
addExpenseBtn.addEventListener("click", () => {
  const name = expenseName.value.trim();
  const amount = +expenseAmount.value;

  if (name && amount > 0) {
    expenses.push({ name, amount });
    updateUI();
    expenseName.value = "";
    expenseAmount.value = "";
  }
});
// === 5. Reset ===
resetBtnn.addEventListener("click", () => {
  expenses = [];
  updateUI();
});

// DIGITAL CLOCK PROGRAM
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const merediem = hours > 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format
  hours = hours.toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours} : ${minutes} : ${seconds} ${merediem}`;
  document.getElementById("clock").textContent = timeString;
}

updateClock(); // Initial call
setInterval(updateClock, 1000); // Update every second

// DOM CHALLENGES
const redBtnColor = document.getElementById("redBtnColor");
const blueBtnColor = document.getElementById("blueBtnColor");
const greenBtnColor = document.getElementById("greenBtnColor");

redBtnColor.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

blueBtnColor.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

greenBtnColor.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});
