function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var date = new Date()
    var hora = date.getHours()
    //var hora = 9
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}