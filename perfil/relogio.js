function atualizar(){
    var user = prompt("Qual é o seu nome? ")
    alert(`${user.toUpperCase()}, Seja bem-vindo ao nosso appweb! `)
}
function carregar(){
    
    var som = document.querySelector('audio#som')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var msgs = document.querySelector('p#msgs')
       
     var data=new Date()
        var hora=data.getHours()
        var minuto=data.getMinutes()
        var segundo=data.getSeconds()
        // cdg hora
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
        
        
        // cdg data

        var dt= new Date()
        var semana=dt.getDay()
        var dia=dt.getDate()
        var mes=dt.getMonth()
        var ano=dt.getFullYear()
       

        var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
        var semanas = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado")
        var data = semanas[semana] + ", " + dia + " de " + meses[mes] + " de " + ano
        msg.innerHTML = `Data e hora atual: ${data} | ${horas}`
        if(hora <= 11){
         
    
        //Bom dia!

        img.src = 'imagens-r/fotomc-200.png'
        som.src = 'audio/bom-dia.3gpp'
        var user = prompt("Qual é o seu nome? ")
        alert(`Bom dia! ${user.toUpperCase()}, \u{231A} Data e hora atual: ${data} | ${hora}`)
        
        //estado do usuário manhã!
        var estado = prompt("Como foi a noite?, boa ou mal?")
        switch(estado){
            case "boa":
                alert(`Senhor(a) ${user.toUpperCase()}, Continuação de um bom dia!`)
            break;
            case "mal":
                alert(`Senhor(a) ${user.toUpperCase()}, Ganhe anímo, e vá á luta!`)
            break;
            default:
                alert(`Senhor(a) ${user.toUpperCase()}, Mesmo assim, Desejamos para si um dia cheio de benção e alegria!`)
            break;
        }

        document.body.style.background = '#e2cd9f'
        msgs.innerHTML = `<strong><em>Boa dia! <q>${user.toUpperCase()}</q>, continuação de um dia cheio de alegria!</em></strong>`

    }else if(hora >=12 && hora <=17){
        //Boa tarde!
        som.src = 'audio/boa-tarde.3gpp'
        img.src = 'imagens-r/fototc-200.png'
        var user = prompt("Qual é o seu nome? ")
        alert(`Boa tarde! ${user.toUpperCase()},  \u{231A} Data e hora atual: ${data} | ${hora}`)
       
        //estado do usuário tarde!
        var estado = prompt("Como está sendo a sua tarde?, boa ou mal?")
        switch(estado){
            case "boa":
                alert(`Senhor(a) ${user.toUpperCase()}, Continuação de um boa tarde!`)
            break;
            case "mal":
                alert(`Senhor(a) ${user.toUpperCase()}, Ganhe anímo, e vá á luta!`)
            break;
            default:
                alert(`Senhor(a) ${user.toUpperCase()}, Mesmo assim, Desejamos para si uma tarde cheio de paz e alegria!`)
            break;
        }

        document.body.style.background = '#ad8779'
        msgs.innerHTML = `<strong><em> Boa tarde! <q>${user.toUpperCase()}</q>, continuação de uma boa tarde!</em></strong>`
    
    
    }else if(hora >= 18 && hora <=23){
        
        //Boa noite!
        som.src = 'audio/boa-noite.3gpp'
        img.src = 'imagens-r/fotonc-200.png'
        var user = prompt("Qual é o seu nome? ")
        alert(`Boa noite! ${user.toUpperCase()},  \u{231A} Data e hora atual: ${data} | ${hora}`)
        
        // estado do usuário noite!
        var estado = prompt("Como foi seu dia?, bom ou mal?")
        switch(estado){
            case "bom":
                alert(`Senhor(a) ${user.toUpperCase()}, Continuação de uma boa noite!`)
            break;
            case "mal":
                alert(`Senhor(a) ${user.toUpperCase()}, Ganhe anímo, e vá á luta!`)
            break;
            default:
                alert(`Senhor(a) ${user.toUpperCase()}, Mesmo assim, Desejamos para si uma noite tranquila e agradavél`)
            break;
        }

        document.body.style.background = '#515352'
        msgs.innerHTML = `<strong><em>Boa noite! <q>${user.toUpperCase()}</q>, Bons sonhos!</em></strong>`
    
    
    }else{
        alert("data inválida")
    }
    
    }
    var tempo = setInterval(relogio, 1000)

