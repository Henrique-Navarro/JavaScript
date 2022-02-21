function insert(valor) {
    document.getElementById("resultado").innerHTML += valor;
}

function clean() {
    document.getElementById("resultado").innerHTML = '';
}

function back() {
    let resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1);
}

function calc() {
    let resultado = document.getElementById("resultado").innerHTML;
    if (resultado) {
        document.getElementById("resultado").innerHTML = eval(resultado);
    }
    else {
        document.getElementById("resultado").innerHTML = "Erro";
    }
}