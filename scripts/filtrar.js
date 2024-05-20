
    
 function buscarAutos() {
    var marcaInput = document.getElementById("marcaInput").value.toLowerCase();
    var modeloInput = document.getElementById("modeloInput").value.toLowerCase();

    var autos = JSON.parse(localStorage.getItem('autos')) || [];
    
    var resultado = autos.filter(function(auto) {
        return auto.marca.toLowerCase().includes(marcaInput) && auto.modelo.toLowerCase().includes(modeloInput);
    });

    mostrarResultados(resultado);
}

function mostrarResultados(resultados) {
            var resultadoContainer = document.getElementById("resultado");
            resultadoContainer.innerHTML = "";

            if (resultados.length === 0) {
                resultadoContainer.innerHTML = "<p>No se encontraron resultados.</p>";
                return;
            }

            resultados.forEach(function(auto) {
                var card = document.createElement("div");
                card.classList.add("card");

                var image = document.createElement("img");
                image.src = auto.imagen;
                image.alt = auto.marca + " " + auto.modelo;
                card.appendChild(image);

                var marca = document.createElement("p");
                marca.textContent = "Marca: " + auto.marca;
                card.appendChild(marca);

                var modelo = document.createElement("p");
                modelo.textContent = "Modelo: " + auto.modelo;
                card.appendChild(modelo);

                var motor = document.createElement("p");
                motor.textContent = "Motor: " + auto.motor;
                card.appendChild(motor);

                var año = document.createElement("p");
                año.textContent = "Año: " + auto.año;
                card.appendChild(año);

                var cilindraje = document.createElement("p");
                cilindraje.textContent = "Cilindraje: " + auto.cilindraje;
                card.appendChild(cilindraje);

                resultadoContainer.appendChild(card);
            });
        }