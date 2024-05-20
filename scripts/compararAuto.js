
            var autos = JSON.parse(localStorage.getItem('autos')) || [];
            var comparisonContainer = document.getElementById('comparisonContainer');
    
            // Función para generar las opciones de selección de autos
            function generarOpcionesAutos() {
                var car1Select = document.getElementById('car1');
                var car2Select = document.getElementById('car2');
    
                autos.forEach(function(auto) {
                    var option = document.createElement('option');
                    option.value = auto.modelo; // O cualquier otra propiedad que identifique al auto de manera única
                    option.textContent = auto.modelo; // O cualquier otra información relevante del auto
                    car1Select.appendChild(option.cloneNode(true));
                    car2Select.appendChild(option);
                });
            }
    
            // Función para actualizar la comparación cuando se seleccionan autos diferentes
            function actualizarComparacion() {
                var car1 = document.getElementById('car1').value;
                var car2 = document.getElementById('car2').value;
    
                if (car1 && car2 && car1 !== car2) {
                    // Buscar los autos seleccionados en la lista de autos
                    var auto1 = autos.find(function(auto) {
                        return auto.modelo === car1;
                    });
                    var auto2 = autos.find(function(auto) {
                        return auto.modelo === car2;
                    });
    
                    // Mostrar la comparación en la página
                    mostrarComparacion(auto1, auto2);
                } else {
                    // Limpiar el contenedor de comparación si no se han seleccionado dos autos diferentes
                    comparisonContainer.innerHTML = '';
                }
            }
    
            // Función para mostrar la comparación en la página
            function mostrarComparacion(auto1, auto2) {
                // Limpiar contenido previo
                comparisonContainer.innerHTML = '';
    
                // Crear elementos para mostrar la comparación
                // Por ejemplo, podrías mostrar las propiedades de los autos en una tabla o en cualquier otro formato que prefieras
    
                // Aquí deberías agregar código para mostrar la comparación de manera adecuada según tus necesidades
            }
            
            function buscarVehiculos() {
    var car1 = document.getElementById('car1').value;
    var car2 = document.getElementById('car2').value;

    if (car1 && car2 && car1 !== car2) {
        // Buscar los autos seleccionados en la lista de autos
        var auto1 = autos.find(function(auto) {
            return auto.modelo === car1;
        });
        var auto2 = autos.find(function(auto) {
            return auto.modelo === car2;
        });

        // Mostrar la comparación en la página
        mostrarComparacion(auto1, auto2);
    } else {
        // Limpiar el contenedor de comparación si no se han seleccionado dos autos diferentes
        comparisonContainer.innerHTML = '';
    }
}

function mostrarComparacion(auto1, auto2) {
    // Limpiar contenido previo
    comparisonContainer.innerHTML = '';

    // Crear tarjeta para el primer auto
    var card1 = crearTarjeta(auto1);
    comparisonContainer.appendChild(card1);

    // Crear tarjeta para el segundo auto
    var card2 = crearTarjeta(auto2);
    comparisonContainer.appendChild(card2);
}

function crearTarjeta(auto) {
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

    return card;
}


            // Generar las opciones de selección de autos al cargar la página
            generarOpcionesAutos();