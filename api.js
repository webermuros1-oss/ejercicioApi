const API_URL = `https://devsapihub.com/api-fast-food`;
const cardDiv = document.getElementById('cardsContainer');
document.addEventListener('DOMContentLoaded', fetchFastFoodJson);
function getApiUrl() {
  return API_URL;
}
module.exports = getApiUrl;


async function fetchFastFoodJson() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error de la solucitud: ${response.status}`);
        }
        cardDiv.innerHTML =
        `
        <div class="card">
            <h2>Menú de Comida Rápida</h2>
            <h2>Nombre plato : ${name}</h2>
            <h2>Precio: ${price}</h2>
            <h2>Descripción: ${description}</h2>
        </div>
        `
    } catch (error) {
        console.error('Error al hacer el fetch de la API:', error);
        return null;
    }
}



export default API_URL;