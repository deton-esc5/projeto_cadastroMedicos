var contador = 3;
function contar() {
    document.getElementById('contador').innerHTML = contador;
    contador--;
}
function redirecionar() {
    contar();
    if (contador == 0) {
        document.location.href = '/';
    }
}
setInterval(redirecionar, 3000);