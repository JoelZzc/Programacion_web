const options = {
    headers: {
        'x-api-key': 'live_9xAXeOySuZF12pqsDZzqNZy3lMzRgjHdcdFDViMWLt5kIahrWeNrkjQZ5QwzVkWA'
    }
};

// Obtener el id de la imagen (que contiene info de la raza)
const breedId = new URLSearchParams(window.location.search).get('id');

async function getCatDetails(id) {
    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`, options);
        if (!response.ok) throw new Error("Error al obtener detalles: " + response.status);
        const data = await response.json();
        showCatDetails(data);
    } catch (error) {
        console.error(error);
    }
}

function showCatDetails(cat) {
    const container = document.createElement('div');
    container.classList.add('cat-details');

    const breed = cat.breeds[0]; // Información de la raza
    container.innerHTML = `
        <img src="${cat.url}" alt="${breed?.name || 'Gato'}" width="300">
        <h2>${breed?.name || 'Nombre no disponible'}</h2>
        <p><strong>Origen:</strong> ${breed?.origin || 'Desconocido'}</p>
        <p><strong>Temperamento:</strong> ${breed?.temperament || 'No disponible'}</p>
        <p><strong>Descripción:</strong> ${breed?.description || 'Sin descripción'}</p>
    `;

    document.body.appendChild(container);
}

getCatDetails(breedId);
