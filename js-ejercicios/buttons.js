import {handleInput} from './main.js';
const buttons = ['7','8','9','/','4','5','6','*','1','2','3','-','0','=','C','+'];
const container = document.getElementById('buttons');

export function createButtons(){
    buttons.forEach(symbol => {
    const btn = document.createElement('button');
    btn.textContent = symbol;
    btn.addEventListener('click', () => handleInput(symbol));
        container.appendChild(btn);
    });

    document.addEventListener('keydown', e => {
    const key = e.key;
    if (/[\d\+\-\*\/]/.test(key)) handleInput(key);
        else if (key === 'Enter') handleInput('=');
        else if (key.toLowerCase() === 'c') handleInput('C');
    });
}