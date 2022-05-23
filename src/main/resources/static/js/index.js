document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById('contenido').innerHTML = div_login
    var tab1 = document.getElementById("sign-up");
    tab1.addEventListener("click", function(e) {
        e.preventDefault();
        let clase = document.getElementById("sign-up").className
        if(clase=="tab"){
            document.getElementById('contenido').innerHTML = div_signup
            document.getElementById("sign-up").className = "tab active"
            document.getElementById("log-in").className = "tab"
            var form2 = document.getElementById('form-signup');
            form2.addEventListener("submit", function(e) {
                e.preventDefault();
                return signup();
            });
        }
        console.log("click1")
    });
    var tab2 = document.getElementById("log-in");
    tab2.addEventListener("click", function(e) {
        e.preventDefault();
        let clase = document.getElementById("log-in").className
        if(clase=="tab"){
            document.getElementById('contenido').innerHTML = div_login
            document.getElementById("log-in").className = "tab active"
            document.getElementById("sign-up").className = "tab"
            var form = document.getElementById('form-login');
            form.addEventListener("submit", function(e) {
                e.preventDefault();
                return login();
            });
        }
        console.log("click2")
    });
});

var div_signup = "<div id=\"signup\">\n" +
    "\n" +
    "                    <form id='form-signup' action=\"/\" method=\"post\">\n" +
    "\n" +
    "                        <div class=\"top-row\">\n" +
    "\n" +
    "                            <div class=\"field-wrap\">\n" +
    "                                <input id='signup-nombre' type=\"text\" required autocomplete=\"off\" placeholder=\"First Name\"/>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"field-wrap\">\n" +
    "                                <input id='signup-apellido' type=\"text\"required autocomplete=\"off\" placeholder=\"Last Name\"/>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"top-row\">\n" +
    "\n" +
    "                            <div class=\"field-wrap\">\n" +
    "                                <input id='signup-telefono' type=\"text\"required autocomplete=\"off\" placeholder=\"Telefono\"/>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"field-wrap\">\n" +
    "                                <input id='signup-email' type=\"email\"required autocomplete=\"off\" placeholder=\"Email Address\"/>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"field-wrap\">\n" +
    "                            <input id='signup-password' type=\"password\"required autocomplete=\"off\" placeholder=\"Set A Password\"/>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <button type=\"submit\" class=\"button button-block\"/>¡GO!</button>\n" +
    "\n" +
    "                    </form>\n" +
    "\n" +
    "                </div>"

var div_login = "<div id=\"login\">\n" +
    "                    <form action=\"/\" id='form-login' method=\"post\">\n" +
    "                        <div class=\"field-wrap\">\n" +
    "                            <input id='login-email' type=\"email\"required autocomplete=\"off\" placeholder=\"Email Address\"/>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"field-wrap\">\n" +
    "                            <input id='login-password' type=\"password\"required autocomplete=\"off\" placeholder=\"Password\"/>\n" +
    "                        </div>\n " +
    "<button type=\"submit\" class=\"button button-block\"/>¡GO!</button>"+
    "                    </form>\n" +
    "                </div>"