const miDiv = document.getElementById('miDiv');

function mostrarAlertaDiv() {
    alert("Hola! Soy el div");
    miDiv.removeEventListener('click', mostrarAlertaDiv);
}

miDiv.addEventListener('click', mostrarAlertaDiv);
