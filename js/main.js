const tazaCambio = document.getElementById('taza-cambio');
const valorPesos = document.getElementById('cant-pesos');
const valorBolibares = document.getElementById('cant-bolibares');
const btnCalcular = document.getElementById('btn-calcular');

window.addEventListener("load", function () {
    valorPesos.addEventListener("keypress", soloNumeros, false);
});

function soloNumeros(e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}

btnCalcular.addEventListener("click", () => {
    let pesos = parseInt(valorPesos.value);
    let taza = parseInt(tazaCambio.value);
    valorBolibares.value = pesos / taza;
});

const btnWhatsapp = document.getElementById("whatsapp");

btnWhatsapp.addEventListener("click", sendMessage);

function sendMessage() {
    const url = `https://api.whatsapp.com/send?phone=573133163630&text=Hola Darwin, Me gustaria saber mas sobre tus servicios de transferencias`;
    window.open(url);
}

const btnEmail = document.getElementById("email");
btnEmail.addEventListener("click", sendMailMessage);

function sendMailMessage() {
    const url = `mailto:rodriguezsolmar1789@gmail.com?subject=Servicios Disponibles&body=Me gustaria conocer la taza de cambio actual y los banco disponibles`;
    window.open(url);
}