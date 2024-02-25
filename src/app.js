// Function to add a new task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  var taskText = taskInput.value.trim();

  if (taskText !== "") {
    var li = document.createElement("li");
    li.innerHTML =
      taskText +
      ' <button class="edit-btn" onclick="editTask(this)">Edit</button> <button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

// Function to delete a task
function deleteTask(btn) {
  var li = btn.parentElement;
  li.remove();
}

// Function to edit a task
function editTask(btn) {
  var li = btn.parentElement;
  var taskText = li.firstChild.textContent;
  var taskInput = document.getElementById("taskInput");
  taskInput.value = taskText;
  li.remove();
}

// Add event listener for the "Add Task" button
document.getElementById("addTaskBtn").addEventListener("click", addTask);
