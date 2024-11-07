document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const createTaskElement = (taskText, taskId) => {
    const taskElement = document.createElement("li");
    taskElement.classList.add(
      "flex",
      "items-center",
      "justify-between",
      "bg-white",
      "p-3",
      "rounded-md",
      "shadow-sm"
    );

    const taskContent = document.createElement("span");
    taskContent.classList.add("text-gray-700");
    taskContent.textContent = taskText;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("space-x-2");

    const editButton = document.createElement("button");
    editButton.classList.add("text-blue-500", "hover:text-blue-700");
    editButton.textContent = "Editar";
    editButton.onclick = () => editTask(taskId, taskText);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("text-red-500", "hover:text-red-700");
    deleteButton.textContent = "Deletar";
    deleteButton.onclick = () => deleteTask(taskId);

    buttonsDiv.append(editButton, deleteButton);

    taskElement.append(taskContent, buttonsDiv);
    return taskElement;
  };

  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const taskId = Date.now();
      const taskElement = createTaskElement(taskText, taskId);

      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push({ id: taskId, text: taskText });
      localStorage.setItem("tasks", JSON.stringify(tasks));

      taskList.appendChild(taskElement);
      taskInput.value = "";
    }
  };

  const editTask = (taskId, oldText) => {
    const newText = prompt("Editar tarefa:", oldText);
    if (newText !== null && newText.trim() !== "") {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const taskIndex = tasks.findIndex((task) => task.id === taskId);
      tasks[taskIndex].text = newText;

      localStorage.setItem("tasks", JSON.stringify(tasks));

      const taskElement = taskList.querySelector(`li[data-id='${taskId}']`);
      taskElement.querySelector("span").textContent = newText;
    }
  };

  const deleteTask = (taskId) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    const taskElement = taskList.querySelector(`li[data-id='${taskId}']`);
    taskList.removeChild(taskElement);
  };

  const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => {
      const taskElement = createTaskElement(task.text, task.id);
      taskElement.setAttribute("data-id", task.id);
      taskList.appendChild(taskElement);
    });
  };

  addTaskBtn.addEventListener("click", addTask);

  loadTasks();
});
