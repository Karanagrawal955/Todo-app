let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") return;

 let li = document.createElement("li");
li.className = "list-group-item d-flex justify-content-between";
li.innerText = taskText;
  li.onclick = function () {
  li.classList.toggle("completed");
};

  // delete button
  let btn = document.createElement("button");
  btn.innerText = "X";

btn.onclick = function () {
  li.style.opacity = "0";
  li.style.transform = "translateX(50px)";
  setTimeout(() => {
    li.remove();
  }, 300);
};

  li.appendChild(btn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}