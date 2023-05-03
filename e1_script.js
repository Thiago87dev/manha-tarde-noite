function carregar(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#img')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${String(minutos).padStart(2,'0')} horas`
    if(hora < 12){
        img.src = 'assets/manha.png' // alterando atribudo do elemento img 
        document.body.style.background = '#e2cd9f'
    }else if(hora < 18){
        img.src = 'assets/tarde.png' // alterando atribudo do elemento img
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'assets/noite.png' // alterando atribudo do elemento img
        document.body.style.background = '#515154'
    }
}
