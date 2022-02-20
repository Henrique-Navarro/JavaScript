function carregar() {
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('foto')

    var data = new Date()
    //var hora = data.getHours()
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.style.backgroundImage = "url('imagens/manha.jpg')";
    }
    else if (hora >= 12 && hora < 18) {
        img.style.backgroundImage = "url('imagens/tarde.jpg')";
    }
    else {
        img.style.backgroundImage = "url('imagens/noite.jpg')";
    }
}