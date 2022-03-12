function mostrar() {
    let nascimento = document.getElementById("nascimento").value;
    let data = new Date();
    let ano = data.getFullYear();
    let idade = ano - nascimento;

    let sexo = document.getElementByName("sexo");

    let img = document.querySelector('div#resImg');
    let res = document.querySelector("div#res");

    let genero = ' ';
    if (sexo[0].checked) {
        genero = 'feminino';
    }
    else {
        genero = 'masculino';
    }
    res.innerHTML = `vc ${genero} com ${idade}`;
}