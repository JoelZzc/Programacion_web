import{loadTasks, saveTasks} from "./storage.js";
import { createTask } from "./tasks.js";
import { renderTask } from "./ui.js";

const toDoList = document.getElementById('to-do-list');
const taskInput = document.getElementById('task');
const btnAdd = document.getElementById('btn-add');

let tasks = [];

function updateUI(newTasks = tasks) {
    toDoList.innerHTML = '';
    tasks = newTasks;
    tasks.forEach(t => renderTask(t, tasks, toDoList, updateUI));
    saveTasks(tasks);
}

window.onload = function () {
    tasks = loadTasks();
    updateUI();
};

btnAdd.addEventListener('click', () => {
    const taskName = taskInput.value.trim();
    if (taskName === '') return;
    createTask(taskName, tasks);
    updateUI(tasks);
    taskInput.value = '';
});
