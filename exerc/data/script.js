function carregar() {
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('foto')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 18
    msg.innerHTML = `Agora são ${horas} horas`

    if (hora >= 0 && hora < 12) {
        img.src = "imagens/manha.jpg"
    }
    else if (hora >= 12 && hora < 18) {
        img.src = "imagens/tarde.jpg"
    }
    else {
        img.src = "imagens/noite.jpg"
    }
}