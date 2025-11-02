import { saveTasks } from "./storage.js";
export function createTask(taskName, tasks) {
    const newTask = {
        id: Date.now(),
        name: taskName,
        done: false
    };
    tasks.push(newTask);
    saveTasks(tasks);
    return newTask;
}

export function removeTask(id, tasks){
    const updatedTasks = tasks.filter(task => task.id !== id);
    saveTasks(updatedTasks);
    return updatedTasks;
}

export function toggleTaskDone(id, tasks) {
    const taskFound = tasks.find(task => task.id === id);
    if (taskFound) {
        taskFound.done = !taskFound.done;
        saveTasks(tasks);
    }
}
