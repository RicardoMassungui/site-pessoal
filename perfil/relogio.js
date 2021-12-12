function atualizar(){
    var user = prompt("Qual é o seu nome? ")
    alert(`${user.toUpperCase()}, Seja bem-vindo ao nosso appweb! `)
}
function carregar(){
    var som = document.querySelector('audio#som')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var msgs = document.querySelector('p#msgs')
    var hora = new Date()
    var atual = hora.getHours()
    
    msg.innerHTML = `<strong><em>Hora atual: ${atual} horas</  em></strong>`
        if(atual <= 11){
        
        //Bom dia!

        img.src = 'imagens-r/fotomc-200.png'
        som.src = 'audio/bom-dia.3gpp'
        var user = prompt("Qual é o seu nome? ")
        alert(`Bom dia! ${user.toUpperCase()}, Agora são ${atual} horas do dia.`)
        
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

    }else if(atual >=12 && atual <=17){
        //Boa tarde!
        som.src = 'audio/boa-tarde.3gpp'
        img.src = 'imagens-r/fototc-200.png'
        var user = prompt("Qual é o seu nome? ")
        alert(`Boa tarde! ${user.toUpperCase()}, Agora são ${atual} horas da tarde.`)
       
        //estado do usuário tarde!
        var estado = prompt("Como está sendo a sua tarde?, boa ou mal?")
        switch(estado){
            case "boa":
                alert(`Senhor(a) ${user.toUpperCase()}, Continuação de um bom manhã!`)
            break;
            case "mal":
                alert(`Senhor(a) ${user.toUpperCase()}, Ganhe anímo, e vá á luta!`)
            break;
            default:
                alert(`Senhor(a) ${user.toUpperCase()}, Mesmo assim, Desejamos para si um dia cheio de paz e alegria!`)
            break;
        }

        document.body.style.background = '#ad8779'
        msgs.innerHTML = `<strong><em> Boa tarde! <q>${user.toUpperCase()}</q>, continuação de uma boa tarde!</em></strong>`
    
    
    }else if(atual >= 18 && atual <=23){
        
        //Boa noite!
        som.src = 'audio/boa-noite.3gpp'
        img.src = 'imagens-r/fotonc-200.png'
        var user = prompt("Qual é o seu nome? ")
        alert(`Boa noite! ${user.toUpperCase()}, Agora são ${atual} horas da noite.`)
        
        // estado do usuário noite!
        var estado = prompt("Como foi seu dia?, bom ou mal?")
        switch(estado){
            case "bom":
                alert(`Senhor(a) ${user.toUpperCase()}, Continuação de um boa noite!`)
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
        alert("[ERRO] hora Inválida!")
    }







}