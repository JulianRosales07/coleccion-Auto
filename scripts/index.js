function agregarAuto(){
            document.getElementById("agregarAuto").submit();
            window,location.href="./agregarAuto.html";
        }
function mostrarColeccion() {
            // Enviar el formulario
            document.getElementById("mostrarColeccionForm").submit();

            // Redireccionar a la página mostrarColeccion.html
            window.location.href = "./mostrarColeccion.html";
        }
        // Función para crear el botón de Cerrar Sesión y agregarlo al navbar
function addLogoutButton() {
            // Crear el elemento de enlace <a>
            var logoutLink = document.createElement("a");
            logoutLink.setAttribute("href", "./login.html");
            logoutLink.classList.add("nav-link");
            logoutLink.textContent = "Cerrar Sesión";

            // Crear el elemento de lista <li>
            var logoutItem = document.createElement("li");
            logoutItem.classList.add("nav-item");
            logoutItem.appendChild(logoutLink);

            // Obtener la lista de navegación y agregar el elemento de lista <li>
            var navbarNav = document.querySelector(".navbar-nav");
            navbarNav.appendChild(logoutItem);
}

        // Llamar a la función para agregar el botón de Cerrar Sesión
addLogoutButton();
