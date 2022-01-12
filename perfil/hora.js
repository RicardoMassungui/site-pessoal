function relogio(){
    var data=new Date()
    var hora=data.getHours()
    var minuto=data.getMinutes()
    var segundo=data.getSeconds()
    
    if(hora < 10){
        hora = "0"+hora
    }
    if(minuto < 10){
        minuto="0"+minuto
    }
    if(segundo < 10){
        segundo="0"+segundo
    }
    var horas = hora + ":" + minuto + ":" + segundo
    document.getElementById("rel").value=horas
    
}
var tempo = setInterval(relogio, 1000)