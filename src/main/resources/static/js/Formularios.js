document.addEventListener("DOMContentLoaded", function(event) {

    var form = document.getElementById('form-login');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        return login();
    });

});

function login() {
    try {
        var email = document.getElementById('login-email').value;
        var contraseña = document.getElementById('login-password').value;
        const data = { email: email,
            contraseña: contraseña };
        const address = '/api/login';
        fetch(address, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.text()
            ) //.text() si es un int/string/float/long
            .then(data => {
                if(data=="Found"){
                    localStorage.setItem("email",email)
                    document.location="Viajesensueno.html"
                }else{
                    swal("Oops!", "Credenciales incorrectas, ¡Vuelva a intentarlo!", "error");
                }
            });

    } catch (err) {
        console.error(err.message);
    }
}

function signup() {
    try {
        var email = document.getElementById('signup-email').value;
        var contraseña = document.getElementById('signup-password').value;
        var telefono = document.getElementById('signup-telefono').value;
        var nombre = document.getElementById('signup-nombre').value;
        var apellidos = document.getElementById('signup-apellido').value;
        const data = { EMAIL: email,
            PASSWORD: contraseña,
            NOMBRE: nombre,
            APELLIDOS: apellidos,
            TELEFONO: telefono
        };
        console.log(data)
        const address = '/api/cliente';
        fetch(address, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.text()
            ) //.text() si es un int/string/float/long
            .then(data => {
                if(data=="Created"){
                    localStorage.setItem("email",email)
                    document.location="Viajesensueno.html"
                }else{
                    swal("Oops!", "Ya existe una cuenta con dicho correo", "error");
                }
            });

    } catch (err) {
        console.error(err.message);
    }
}
