// JavaScript
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const totalTasksSpan = document.getElementById("total-tasks");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
  updateTotalTasks();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
    updateTotalTasks();
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  updateTotalTasks();
}

function updateTotalTasks() {
  const tasks = listContainer.getElementsByTagName("li");
  totalTasksSpan.textContent = tasks.length;
}

showTask();
