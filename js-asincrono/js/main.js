import { getBreeds } from './api.js';
import { showBreeds, updateButtons } from './ui.js';

let currentPage = 1;
let limit= 5;

async function loadBreeds(page) {
    const breeds = await getBreeds(page, limit);
    showBreeds(breeds.breeds);
    updateButtons(currentPage, breeds.pageCount);
}

document.getElementById('prevPage').addEventListener('click', () => {
    if(currentPage > 1){
        currentPage--;
        loadBreeds(currentPage);
    }
})

document.getElementById('nextPage').addEventListener('click', () => {
    currentPage++;
    loadBreeds(currentPage);
})

window.addEventListener('DOMContentLoaded', () =>{
    const limitInput = document.getElementById("limit");
    limit = parseInt(limitInput.value, 10);

    limitInput.addEventListener('input', () => {
        const newLimit = parseInt(limitInput.value, 10);
        if (!isNaN(newLimit) && newLimit > 0) {
            limit = newLimit;
            currentPage = 1;
            loadBreeds(currentPage);
        }
    });
    loadBreeds(currentPage);
});