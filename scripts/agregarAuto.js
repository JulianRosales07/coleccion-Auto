function previewImage(event) {
    var preview = document.getElementById('previewImage');
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}

function agregarAuto() {
    var formData = new FormData(document.getElementById('agregarAutoForm'));
    var nuevoAuto = {};

    formData.forEach(function(value, key) {
        nuevoAuto[key] = value;
    });

    // Obtener la imagen seleccionada y convertirla en una URL de datos
    var imageFile = document.querySelector('input[type=file]').files[0];
    if (imageFile) {
        var reader = new FileReader();
        reader.onload = function(event) {
            nuevoAuto.imagen = event.target.result; // Guardar la URL de datos en el objeto del auto
            // Verificar si el vehículo ya existe
            if (!existeAuto(nuevoAuto)) {
                guardarAuto(nuevoAuto);
            } else {
                alert('Este vehículo ya ha sido agregado.');
            }
        }
        reader.readAsDataURL(imageFile);
    } else {
        alert('Por favor seleccione una imagen.');
    }
}

function existeAuto(nuevoAuto) {
    var autos = JSON.parse(localStorage.getItem('autos')) || [];
    return autos.some(function(auto) {
        return auto.marca === nuevoAuto.marca && auto.modelo === nuevoAuto.modelo;
    });
}

function guardarAuto(auto) {
    var autos = JSON.parse(localStorage.getItem('autos')) || [];
    autos.push(auto);
    localStorage.setItem('autos', JSON.stringify(autos));
    window.location.href = './mostrarColeccion.html';
}
