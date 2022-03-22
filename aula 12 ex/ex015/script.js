function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
     
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora <12){
        //Bom Dia !!
        img.src = "./img/fotomanha.jpg"
        document.body.style.background = "#e2cd9f"
    }else if ( hora >= 12 && hora <18){
        //Boa Tarde!!
        img.src = "./img/fototarde.jpg"
        document.body.style.background = "#b9846f"
    }else{
        //Boa Noite!!
        img.src = "./img/fotonoite.jpg"
        document.body.style.background = "#515154"
    }
}

