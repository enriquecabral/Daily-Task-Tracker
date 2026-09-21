
const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");

const taskList = document.getElementById("taskList");


addTaskBtn.addEventListener("click", function () {


    const task = taskInput.value.trim();

    if (task === "") {
        document.getElementById("errorMessage").textContent =
            "Please enter a task.";
        return;
    }

    document.getElementById("errorMessage").textContent = "";



    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createElement("span");
    taskText.textContent = task;

    checkbox.addEventListener("change", function () {
        taskText.style.textDecoration =
            checkbox.checked ? "line-through" : "none";
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);

    taskList.appendChild(listItem);

});