import { toggleTaskDone, removeTask } from './tasks.js';

function createTaskElement(t) {
    const li = document.createElement('li');
    li.dataset.id = t.id;
    if (t.done) li.classList.add('done');
    return li;
}

function createCheckbox(t, tasks, updateUI) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = t.done;

    checkbox.addEventListener('change', () => {
        toggleTaskDone(t.id, tasks);
        updateUI();
    });

    return checkbox;
}

function createDeleteButton(t, tasks, updateUI) {
    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';

    btn.addEventListener('click', () => {
        const newTasks = removeTask(t.id, tasks);
        updateUI(newTasks);
    });

    return btn;
}

export function renderTask(t, tasks, toDoList, updateUI) {
    const li = createTaskElement(t);
    const checkbox = createCheckbox(t, tasks, updateUI);
    const btnDelete = createDeleteButton(t, tasks, updateUI);
    const text = document.createTextNode(' ' + t.name + ' ');

    li.append(checkbox, text, btnDelete);
    toDoList.appendChild(li);
}