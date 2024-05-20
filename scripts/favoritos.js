
// Obtener los vehículos favoritos del almacenamiento local
var favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

// Mostrar los vehículos favoritos en la página
var favoritosContainer = document.getElementById('favoritosContainer');
favoritos.forEach(function(auto, index) {
    var card = document.createElement('div');
    card.classList.add('card');

    var image = document.createElement('img');
    image.src = auto.imagen || 'placeholder.jpg'; // Si no hay imagen, muestra un placeholder
    image.classList.add('card-img-top');
    card.appendChild(image);

    var marca = document.createElement('p');
    marca.textContent = 'Marca: ' + auto.marca;
    card.appendChild(marca);

    var modelo = document.createElement('p');
    modelo.textContent = 'Modelo: ' + auto.modelo;
    card.appendChild(modelo);

    var motor = document.createElement('p');
    motor.textContent = 'Motor: ' + auto.motor;
    card.appendChild(motor);

    var año = document.createElement('p');
    año.textContent = 'Año: ' + auto.año;
    card.appendChild(año);

    var cilindraje = document.createElement('p');
    cilindraje.textContent = 'Cilindraje: ' + auto.cilindraje;
    card.appendChild(cilindraje);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar de Favoritos';
    deleteButton.classList.add('delete-button'); // Agrega la clase delete-button
    deleteButton.addEventListener('click', function() {
        eliminarDeFavoritos(index);
    });
    card.appendChild(deleteButton);

    favoritosContainer.appendChild(card);
});

// Función para eliminar un vehículo de favoritos
function eliminarDeFavoritos(index) {
    favoritos.splice(index, 1);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    location.reload(); // Recargar la página para reflejar los cambios
}
