function calcular() {
    event.preventDefault();
    let select = document.getElementById("calculo");
    let opcao = select.options[select.selectedIndex].value;

    let select2 = document.getElementById("figura");
    let figura = select2.options[select2.selectedIndex].value2;

    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;

    switch (opcao) {
        case 'area':
            calcularArea(base, altura, figura);
            break;

        case 'volume':
            break;
    }
}

function calcularArea(base, altura, figura) {
    let resultado;
    switch (figura) {
        case 'quadrado':
            resultado = base * altura;
            break;

        case 'triangulo':
            resultado = base * altura / 2;
            break;

        case 'circulo':
            break;

        case 'trapezio':
            break;
    }
    document.getElementById("resultado").innerHTML = resultado;
}