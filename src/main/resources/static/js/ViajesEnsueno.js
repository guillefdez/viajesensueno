document.addEventListener("DOMContentLoaded", function(event) {
    cargarContenido()
    ponerCorazon()
});

function cargarContenido() {
    var address =  'api/viajes'
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
            document.getElementById('viajes-encontrados').innerText =  r.length+' viajes encontrados';
            for (let step = 0; step < r.length; step++){
                var id = r[step].id
                var asia = r[step].asia
                var europa = r[step].europa
                var america = r[step].america
                var africa = r[step].africa
                var oceania = r[step].oceania
                var descuento = r[step].descuento
                var desc_corta = r[step].desc_CORTA
                var imagen = r[step].imagen
                var nombre = r[step].nombre
                var precio = r[step].precio
                añadirViaje(id,asia,europa,america,africa,oceania,descuento,desc_corta,imagen,nombre,precio)
            }
            cargarFavoritos()
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

function verReservas() {
    document.getElementById('añadir-viajes').innerHTML=""
    document.getElementById('titulo').innerText="Tus reservas"
    var address =  'api/reservas/'+localStorage.getItem('email')
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

            document.getElementById('viajes-encontrados').innerText =  r.length+' reservas encontradas';
            const fecha_actual = new Date();
            for (let step = 0; step < r.length; step++){
                var id_reserva = r[step].id_RESERVA
                var id_viaje =  r[step].id_VIAJE
                var fecha_inicio = r[step].fecha_INICIO
                var fecha_final = r[step].fecha_FINAL
                var personas = r[step].numero_PERSONAS

                var año = fecha_inicio.substr(0,4)
                var mes = fecha_inicio.substr(5,2)-1
                var dia = fecha_inicio.substr(8,2)


                var f1 = new Date(año, mes, dia);

                console.log(fecha_actual)
                console.log(f1)
                var status="PROXIMAMENTE";
                if(fecha_actual>f1){
                    console.log("mayor")
                    status = "CADUCADO"
                }
                añadirViajeReserva(id_reserva,id_viaje,personas,f1,status,fecha_inicio,fecha_final)
            }
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

function añadirViajeReserva(id_reserva,id_viaje,personas,f1,status,fecha_inicio,fecha_final) {
    var address = "/api/viajes/"+id_viaje
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
            var id = r.id
            var asia = r.asia
            var europa = r.europa
            var america = r.america
            var africa = r.africa
            var oceania = r.oceanica
            var descuento = r.descuento
            var imagen = r.imagen
            var nombre = r.nombre
            var precio = r.precio
            var calle = r.calle

            añadirReserva(id_reserva,asia,europa,america,africa,oceania,descuento,imagen,nombre,precio,calle,personas,f1,status,fecha_inicio,fecha_final,id_viaje)
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

function añadirReserva(id_reserva,asia,europa,america,africa,oceania,descuento,imagen,nombre,precio,calle,personas,f1,status,fecha_inicio,fecha_final,hora,id_viaje) {
    var clase = "programado"
    var boton = "<button type=\"button\" class=\"btn btn-warning \" onclick=\"actualizarReserva("+id_reserva+","+id_viaje+")\">MODIFICAR</button>";

    if(status=="CADUCADO"){
        clase = "caducado"
        boton = "";

    }
    var fecha = f1.toString().substr(0,21)
    var botones = ""
    if(asia==true)
        botones += "<button type=\"button\" class=\"btn btn-success\">Asia</button>\n"
    if(europa==true)
        botones += "<button type=\"button\" class=\"btn btn-danger\">Europa</button>\n"
    if(america==true)
        botones += "<button type=\"button\" class=\"btn btn-warning\">America</button>\n"
    if(africa==true)
        botones += "<button type=\"button\" class=\"btn btn-info\">Africa</button>\n"
    if(oceania==true)
        botones += "<button type=\"button\" class=\"btn btn-info\">Oceania</button>\n"
    if(descuento==null || descuento==0)
        descuento_p = "<p class=\"descuento\">¡No se han encontrado descuentos!</p>\n"
    document.getElementById('añadir-viajes').innerHTML += "<div class=\"viajes\">\n" +
        "            <div class=\"father individual\">\n" +
        "                <div class=\"children cursor\">\n" +
        "                    <img class=\"imagen-viajes\" src=\"images/"+imagen+"\" width=\"534\" height=\"300\">\n" +
        "                </div>\n" +
        "                <div class=\"children cursor medio\">\n" +
        "                    <div class=\"info\">\n" +
        "                        <h2>"+nombre +
        "                        "+ " - Precio total "+ (precio*personas) +"€</h2>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"children cursor medio\">\n" +
        "                    <h2>Detalles de la reserva</h2>" +
        "                    <h3 class='"+clase+"'>"+status+"</h3>" +
        "                    <p>"+personas+" personas · Inicio "+fecha_inicio+" · Final " + fecha_final +"</p>" +
        "                 <div class='padre'>"+
        "                <input id=\"fecha_inicio"+id_reserva+"\" class=\"formato\" type=\"date\" value='"+fecha_inicio+"'>\n" +
        "                <input id=\"fecha_final"+id_reserva+"\" class=\"formato\" type=\"date\" value='"+fecha_final+"'>\n" +
        "                <input id=\"personas"+id_reserva+"\" class=\"formato\" type=\"number\"min=\"1\" placeholder=\"Numero de personas\" value='"+personas+"'>"+
        "                </div>"+
        "                 <div class=\"children \">" +boton+
        "                 <button type=\"button\" class=\"btn btn-dark\" onclick=\"cancelarReserva("+id_reserva+")\">CANCELAR</button>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <hr size=\"1px\" color=\"black\" />\n" +
        "        </div>"
}

function cancelarReserva(id) {
    try {
        const address = '/api/reservas/'+id;
        fetch(address, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
            },
        })
            .then(response => response.text()
            ) //.text() si es un int/string/float/long
            .then(data => {
                swal("¡Tu reservada acaba de cancelada!", "", "success")
                    .then(function () {
                        verReservas()
                    })
            });

    } catch (err) {
        console.error(err.message);
    }
}

function actualizarReserva(id_reserva,id_viaje) {
    var email = localStorage.getItem('email')
    var fecha_inicio = document.getElementById('fecha_inicio'+id_reserva).value;
    var fecha_final = document.getElementById('fecha_final'+id_reserva).value;
    var personas = document.getElementById('personas'+id_reserva).value;
    try {
        const data = {
            ID_RESERVA: id_reserva,
            EMAIL: email,
            ID_VIAJE: id_viaje,
            NUMERO_PERSONAS: personas,
            FECHA_INICIO: fecha_inicio,
            FECHA_FINAL: fecha_final
        };
        console.log(data)
        const address = '/api/reservas';
        fetch(address, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.text()
            ) //.text() si es un int/string/float/long
            .then(r => {
                verReservas()
            });

    } catch (err) {
        console.error(err.message);
    }
}

function añadirViaje(id,asia,europa,america,africa,oceania,descuento,desc_corta,imagen,nombre,precio) {
    var botones = ""
    if(asia==true)
        botones += "<button type=\"button\" class=\"btn btn-success\">Asia</button>\n"
    if(europa==true)
        botones += "<button type=\"button\" class=\"btn btn-danger\">Europa</button>\n"
    if(america==true)
        botones += "<button type=\"button\" class=\"btn btn-warning\">America</button>\n"
    if(africa==true)
        botones += "<button type=\"button\" class=\"btn btn-info\">Africa</button>\n"
    if(oceania==true)
        botones += "<button type=\"button\" class=\"btn btn-info\">Oceania</button>\n"
    if(descuento==null || descuento==0)
        descuento_p = "<p class=\"descuento\">¡No se han encontrado descuentos!</p>\n"
    document.getElementById('añadir-viajes').innerHTML += "<div class=\"viajes\">\n" +
        "            <div class=\"father individual\">\n" +
        "                <div class=\"children cursor\">\n" +
        "                    <img class=\"imagen-viaje\" src=\"images/"+imagen+"\" width=\"534\" height=\"300\">\n" +
        "                </div>\n" +
        "                <div class=\"children cursor medio\">\n" +
        "                    <div class=\"filtros\">\n" +botones+
        "                        <button type=\"button\" class=\"btn btn-dark\">Descuento: "+descuento+"%</button>\n" +
        "                    </div>\n" +
        "                    <div class=\"info\">\n" +
        "                        <h2>"+nombre+"</h2>\n" +
        "                        <p>"+desc_corta+"</p>\n" +
        "                        <p>Precio por persona "+precio+"€</p>\n" +
        "                    </div>\n" +
        "                    <button type=\"button\" class=\"btn btn-primary\" onclick=\"reservar("+id+")\">RESERVAR</button>\n" +
        "                    <button id='"+id+"' type=\"button\" class=\"btn btn-dark linea\" onclick=\"like("+id+")\">"+corazon_linea+"</button>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <hr size=\"1px\" color=\"black\" />\n" +
        "        </div>"
}

function cargarFavoritos(){
    var email = localStorage.getItem('email')
    console.log(email)
    var address =  'api/favoritos/'+email
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
            for (let step = 0; step < r.length; step++) {
                document.getElementById(r[step].id).innerHTML = corazon_relleno
                document.getElementById(r[step].id).className = 'btn btn-dark relleno'
            }
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}






function like(id) {
    var clase = document.getElementById(id).className
    console.log(clase)
    if(clase=='btn btn-dark linea') {
        document.getElementById(id).innerHTML = corazon_relleno
        document.getElementById(id).className = 'btn btn-dark relleno'
        añadirFavorito(id)
    }else {
        document.getElementById(id).innerHTML = corazon_linea
        document.getElementById(id).className = 'btn btn-dark linea'
        eliminarFavorito(id)
    }
}

function añadirFavorito(id) {
    try {
        var email = localStorage.getItem('email');
        const data = { email: email,
            id: id
        };
        console.log(data)
        const address = '/api/favoritos';
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
            });

    } catch (err) {
        console.error(err.message);
    }
}

function eliminarFavorito(id) {
    try {
        var email = localStorage.getItem('email');
        const data = { email: email,
            id: id
        };
        console.log(data)
        const address = '/api/favoritos';
        fetch(address, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.text()
            ) //.text() si es un int/string/float/long
            .then(data => {
            });

    } catch (err) {
        console.error(err.message);
    }
}

var corazon_linea = "<svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\n" +
    "width=\"24\" height=\"24\"\n" +
    "viewBox=\"0 0 172 172\"\n" +
    "style=\" fill:#000000;\"><g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"><path d=\"M0,172v-172h172v172z\" fill=\"none\"></path><g fill=\"#ffffff\"><path d=\"M118.25,21.5c-20.7475,0 -32.25,14.97833 -32.25,14.97833c0,0 -11.5025,-14.97833 -32.25,-14.97833c-21.77233,0 -39.41667,17.64433 -39.41667,39.41667c0,29.89217 35.20267,58.85983 45.01383,68.01167c11.30183,10.535 26.65283,24.08 26.65283,24.08c0,0 15.351,-13.545 26.65283,-24.08c9.81117,-9.15183 45.01383,-38.1195 45.01383,-68.01167c0,-21.77233 -17.64433,-39.41667 -39.41667,-39.41667zM106.1455,115.455c-1.2685,1.14667 -2.37217,2.14283 -3.268,2.98133c-5.38217,5.01667 -11.74617,10.7715 -16.8775,15.3725c-5.13133,-4.601 -11.5025,-10.363 -16.8775,-15.3725c-0.903,-0.8385 -2.00667,-1.84183 -3.268,-2.98133c-10.17667,-9.19483 -37.18783,-33.61883 -37.18783,-54.53833c0,-13.83167 11.25167,-25.08333 25.08333,-25.08333c13.0935,0 20.683,9.1375 20.88367,9.374l11.36633,12.126l11.36633,-12.126c0.07167,-0.09317 7.79017,-9.374 20.88367,-9.374c13.83167,0 25.08333,11.25167 25.08333,25.08333c0,20.9195 -27.01117,45.3435 -37.18783,54.53833z\"></path></g></g></svg>"

var corazon_relleno = "<svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\n" +
    "width=\"24\" height=\"24\"\n" +
    "viewBox=\"0 0 172 172\"\n" +
    "style=\" fill:#000000;\"><g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"><path d=\"M0,172v-172h172v172z\" fill=\"none\"></path><g fill=\"#ffffff\"><path d=\"M118.25,21.5c-20.7475,0 -32.25,14.97833 -32.25,14.97833c0,0 -11.5025,-14.97833 -32.25,-14.97833c-21.77233,0 -39.41667,17.64433 -39.41667,39.41667c0,29.89217 35.20267,58.85983 45.01383,68.01167c11.30183,10.535 26.65283,24.08 26.65283,24.08c0,0 15.351,-13.545 26.65283,-24.08c9.81117,-9.15183 45.01383,-38.1195 45.01383,-68.01167c0,-21.77233 -17.64433,-39.41667 -39.41667,-39.41667z\"></path></g></g></svg>"

function reservar(id) {
    localStorage.setItem("viaje",id)
    document.location = "Calendario.html"
}

function actualizarViajes() {
    document.getElementById('añadir-viajes').innerHTML = ""
    var asia = filtro.includes( 'asia')
    var europa = filtro.includes( 'europa')
    var america = filtro.includes( 'america')
    var africa = filtro.includes( 'africa')
    var oceania = filtro.includes( 'oceania')
    try {
        const address = 'http://localhost:8080/api/viajes/filtros';
        var url = new URL(address)
        var params = [['asia', asia],['europa', europa],['america', america],['africa', africa],['oceania', oceania]]
        url.search = new URLSearchParams(params).toString();
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
            },
        })
            .then(response => response.json())
            .then(r => {
                console.log(r);
                document.getElementById('viajes-encontrados').innerText =  r.length+' viajes encontrados';
                for (let step = 0; step < r.length; step++){
                    var id = r[step].id
                    var asia = r[step].asia
                    var europa = r[step].europa
                    var america = r[step].america
                    var africa = r[step].africa
                    var oceania = r[step].oceania
                    var descuento = r[step].descuento
                    var desc_corta = r[step].desc_CORTA
                    var imagen = r[step].imagen
                    var nombre = r[step].nombre
                    var precio = r[step].precio
                    añadirViaje(id,asia,europa,america,africa,oceania,descuento,desc_corta,imagen,nombre,precio)
                }
                cargarFavoritos()
            });

    } catch (err) {
        console.error(err.message);
    }
}

function filtrar(id) {
    var elemento = document.getElementById(id).className
    console.log(elemento)
    if (elemento == "btn btn-light") {
        document.getElementById(id).className = "btn btn-dark";
        filtro.push(id)
    }else {
        document.getElementById(id).className = "btn btn-light";
        eliminarId(filtro,id)
    }
    actualizarViajes()
}
var filtro = new Array();

function eliminarId ( arr, item ) {
    var i = arr.indexOf( item );

    if ( i !== -1 ) {
        arr.splice( i, 1 );
    }
}
function logout() {
    localStorage.clear()
    document.location="index.html"
}

function refrescar(){
    location.reload();
}

function ponerCorazon() {
    try {
        document.getElementById('favoritos').innerHTML = corazon_relleno
    } catch (error){
        return null
    }


}

function paginaFavoritos() {
    document.getElementById('añadir-viajes').innerHTML=""
    document.getElementById('titulo').innerText="¡Tus viajes favoritos!"
    var email = localStorage.getItem('email')
    var address =  'api/favoritos/'+email
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
            document.getElementById('viajes-encontrados').innerText =  r.length+' viajes encontrados';
            for (let step = 0; step < r.length; step++){
                var id = r[step].id
                buscarViaje(id)
            }
            cargarFavoritos()
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}


function verOfertas() {
    document.getElementById('añadir-viajes').innerHTML=""
    document.getElementById('titulo').innerText="¡Las mejores viajes con descuento!"

    var address =  'api/viajes/ofertas'
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
            var viajes_en_oferta = 0;
            for (let step = 0; step < r.length; step++){
                var id = r[step].id
                var descuento = r[step].descuento
                if (descuento > 0){
                    buscarViaje(id)
                    viajes_en_oferta ++;
                }

            }
            document.getElementById('viajes-encontrados').innerText =  viajes_en_oferta +' viajes encontrados';
            cargarFavoritos()
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}


function buscarViaje(id) {
    var address = "/api/viajes/"+id
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
            var id = r.id
            var asia = r.asia
            var europa = r.europa
            var america = r.america
            var africa = r.africa
            var oceania = r.oceania
            var descuento = r.descuento
            var desc_corta = r.desc_CORTA
            var imagen = r.imagen
            var nombre = r.nombre
            var precio = r.precio
            añadirViaje(id,asia,europa,america,africa,oceania,descuento,desc_corta,imagen,nombre,precio)
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}
