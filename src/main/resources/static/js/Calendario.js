document.addEventListener("DOMContentLoaded", function(event) {
    cargarContenido()
});

function cargarContenido() {
    var email = localStorage.getItem('email')
    var id_viaje = localStorage.getItem('viaje')
    var address =  'api/viajes/'+id_viaje
    fetch(address,
        {
            method: 'GET',
            headers: {
                Accept : 'application/json',
            }
        })
        //Suscribimos a la promesa Response
        .then(res => {
            return res.json();
        })
        //Suscribimos a la promesa Body
        .then(r => {
            console.log(r)
            var imagen = r.imagen
            var nombre = r.nombre
            document.getElementById('nombre-viaje').innerText = nombre
            document.getElementById('viaje').style.backgroundImage = "url(\"../images/"+imagen+"\")"
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

function reservar() {
    var email = localStorage.getItem('email')
    var id_viaje = localStorage.getItem('viaje')
    var fecha_inicio = document.getElementById('fecha_inicio').value;
    var fecha_final = document.getElementById('fecha_final').value;
    var personas = document.getElementById('personas').value;
    if(fecha_inicio=="" || fecha_final=="" || personas=="" || personas<=0) {
        swal("Parece que ha ocurrido un problema", "Por favor rellene todos los campos", "error");
    }else{
        try {
            const data = { EMAIL: email,
                ID_VIAJE: id_viaje,
                NUMERO_PERSONAS: personas,
                FECHA_INICIO: fecha_inicio,
                FECHA_FINAL: fecha_final
            };
            console.log(data)
            const address = '/api/reservas';
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
                .then(r => {
                    swal("¡Tu reservada acaba de ser confirmada!", "Puede ver mas detalles en tu apartado de reservas", "success")
                    .then(function () {
                        document.location="Viajesensueno.html"
                    })

                });

        } catch (err) {
            console.error(err.message);
        }
    }
}

function obtenerReservas() {
    var email = localStorage.getItem('email')
    var address =  'api/reservas/'+email
    fetch(address,
        {
            method: 'GET',
            headers: {
                Accept : 'application/json',
            }
        })
        //Suscribimos a la promesa Response
        .then(res => {
            return res.json();
        })
        //Suscribimos a la promesa Body
        .then(r => {
            console.log(r)
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}
