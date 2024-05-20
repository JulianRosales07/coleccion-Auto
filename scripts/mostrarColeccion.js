var autos = JSON.parse(localStorage.getItem('autos')) || [];
var autosContainer = document.getElementById('autosContainer');

autos.forEach(function(auto, index) {
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
   deleteButton.textContent = 'Eliminar';
   deleteButton.classList.add('delete-button'); // Agrega la clase delete-button
   deleteButton.addEventListener('click', function() {
       eliminarAuto(index);
   });
   card.appendChild(deleteButton);

   var favoriteButton = document.createElement('button');
   favoriteButton.textContent = 'Agregar a Favoritos';
   favoriteButton.classList.add('favorite-button'); // Agrega la clase favorite-button
   favoriteButton.addEventListener('click', function() {
       agregarAFavoritos(auto);
   });
   card.appendChild(favoriteButton);

   autosContainer.appendChild(card);
});

// Función para eliminar un auto del array y del almacenamiento local
function eliminarAuto(index) {
   autos.splice(index, 1);
   localStorage.setItem('autos', JSON.stringify(autos));
   location.reload(); // Recargar la página para reflejar los cambios
}

// Función para agregar un auto a la lista de favoritos
function agregarAFavoritos(auto) {
   // Obtener los vehículos favoritos del almacenamiento local
   var favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

   // Verificar si el vehículo ya está en la lista de favoritos
   var existente = favoritos.some(function(favorito) {
       return favorito.marca === auto.marca && favorito.modelo === auto.modelo;
   });

   // Si el vehículo no está en la lista de favoritos, agregarlo
   if (!existente) {
       favoritos.push(auto);
       localStorage.setItem('favoritos', JSON.stringify(favoritos));
       alert('Vehículo agregado a favoritos.');
   } else {
       alert('Este vehículo ya está en la lista de favoritos.');
   }
}

// Función para generar el reporte en formato de texto
// Función para generar el reporte de autos
function generarReporte() {
    // Contenido del reporte
    var contenidoReporte = "";
    autos.forEach(function(auto) {
        contenidoReporte += "Marca: " + auto.marca + "\n";
        contenidoReporte += "Modelo: " + auto.modelo + "\n";
        contenidoReporte += "Motor: " + auto.motor + "\n";
        contenidoReporte += "Año: " + auto.año + "\n";
        contenidoReporte += "Cilindraje: " + auto.cilindraje + "\n";
        contenidoReporte += "\n"; // Separador entre autos
    });

    // Generar el archivo de texto
    var blob = new Blob([contenidoReporte], { type: "text/plain;charset=utf-8" });

    // Crear un enlace <a> para descargar el archivo
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);

    // Ruta completa al archivo en la carpeta "data" dentro de la carpeta "assets"
    link.download = "assets/data/reporte_autos.txt";

    // Hacer clic en el enlace para iniciar la descarga del archivo
    link.click();

    // Limpiar y liberar el enlace
    URL.revokeObjectURL(link.href);
}

// Asociar la función generarReporte al evento click del botón
document.getElementById('generarReporteBtn').addEventListener('click', function() {
    generarReporte();
});

