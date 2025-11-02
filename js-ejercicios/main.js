import { createButtons } from "./buttons.js";
const display = document.getElementById('display');
const historyList = document.getElementById('history-list');
const errorMsg = document.getElementById('error');

export function handleInput(input) {
    errorMsg.textContent = '';
    if (input === 'C') {
        display.value = '';
        return;
    }

    if (input === '=') {
        try {
            if (display.value.trim() === '') return;
            const result = eval(display.value);
            if (isNaN(result) || !isFinite(result)) throw new Error();
            historyList.innerHTML += `<p>${display.value} = ${result}</p>`;
            display.value = result;
        } catch {
            errorMsg.textContent = 'Error: operación no válida';
        }
    } else {
        display.value += input;
    }
}
window.onload = () => createButtons();
