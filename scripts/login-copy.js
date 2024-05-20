
        function redirect() {
            window.location.href = "login.html";
        }
    
        function register() {
            var email = document.getElementById("email").value;
            var emailRepeat = document.getElementById("email-repeat").value;
            var password = document.getElementById("password").value;
            var passwordConfirm = document.getElementById("password-confirm").value;
    
            if (email === "" || emailRepeat === "" || password === "" || passwordConfirm === "") {
                alert("Por favor complete todos los campos.");
                return;
            }
    
            if (email !== emailRepeat) {
                alert("Los correos electrónicos no coinciden.");
                return;
            }
    
            if (password !== passwordConfirm) {
                alert("Las contraseñas no coinciden.");
                return;
            }
    
            // Verificar si el correo ya está registrado
            var users = JSON.parse(localStorage.getItem('users')) || [];
            var usuarioRegistrado = users.some(function(user) {
                return user.email === email;
            });
    
            if (usuarioRegistrado) {
                alert("El correo electrónico ya está registrado.");
                return;
            }
    
            // Almacenar los datos en localStorage
            users.push({ email: email, password: password });
            localStorage.setItem('users', JSON.stringify(users));
    
            alert("Registro exitoso. Por favor inicie sesión.");
    
            // Redirigir a la página de inicio de sesión
            window.location.href = "login.html";
        }
    
        function validateLogin() {
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
    
            if (email.trim() === '' || password.trim() === '') {
                alert('Por favor, complete todos los campos.');
                return;
            }
    
            // Obtener los usuarios almacenados en localStorage
            var users = JSON.parse(localStorage.getItem('users')) || [];
    
            // Verificar si existe un usuario con el correo y contraseña ingresados
            var userFound = users.find(function(user) {
                return user.email === email && user.password === password;
            });
    
            if (userFound) {
                alert('Inicio de sesión exitoso.');
                // Redirigir a la página de inicio de sesión exitoso
                window.location.href = "index.html";
            } else {
                alert('Correo electrónico o contraseña incorrectos.');
            }
        }
