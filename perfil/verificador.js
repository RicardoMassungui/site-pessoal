function atualizar(){
    var user = prompt("Qual é o seu nome? ")
    alert(`${user.toUpperCase()}, Seja bem-vindo ao nosso appweb! `)
}
function verificar(){
    var now = new Date()
    var mes = now.getMonth()
    var atual = new Date()
    var ano = atual.getFullYear()
    var textano = document.getElementById('textano')
    var res = document.querySelector('div#res')

    if(Number(textano.value.length == 0) || Number(textano.value) > ano && Number(textmes.value.length == 0) || Number(textmes.value) > 12){
        alert(`[ERRO#] Verifique os dados, tente novamente!
        `)
    }else{
        var radsex = document.getElementsByName('radsex')
        if(Number(textmes.value > mes)){  
            var idade = ano - Number(textano.value) - 1
        }else{
            var idade = ano - Number(textano.value) 
        }
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var audio = document.querySelector('audio#voz')
        if(radsex[0].checked){
            genero = 'Homem'
        if(Number(textano.value) == 2015 && Number(textmes.value) == 8){
                img.setAttribute('src', 'imagens-v/nataniel.png')
                audio.src = "audio/nael.3gpp"
            }else if (Number(textano.value) == 2013 && Number(textmes.value) == 2){
                img.setAttribute('src', 'imagens-v/helio.png')
                audio.src = "audio/helio.3gpp"
            }else if(Number(textano.value) == 2012 && Number(textmes.value) == 7){ 
                img.setAttribute('src', 'imagens-v/esmael.png')
                audio.src = "audio/esmael.3gpp"
            }else if(Number(textano.value) == 2004 && Number(textmes.value) == 4){
                img.setAttribute('src', 'imagens-v/gradi.png')
                audio.src = "audio/ricardo.3gpp"
            }else if(Number(textano.value) == 2004 && Number(textmes.value) == 12){
                img.setAttribute('src', 'imagens-v/augusto.png')
                audio.src = "audio/augusto-16.3gpp"
            }else if(Number(textano.value) == 2002 && Number(textmes.value) == 3){
                img.setAttribute('src', 'imagens-v/nata.png')
                audio.src = "audio/pedro.3gpp"
            }else if(Number(textano.value) == 1994 && Number(textmes.value) == 2){
                img.setAttribute('src', 'imagens-v/eidi.png')
                audio.src = "audio/adilson.3gpp"
            }else if(Number(textano.value) == 1991 && Number(textmes.value) == 10){
                img.setAttribute('src', 'imagens-v/noco.png')
                audio.src = "audio/afonso-30.3gpp"
            }else if(Number(textano.value) == 1988 && Number(textmes.value) == 12){
                img.setAttribute('src', 'imagens-v/luisao.png')
                audio.src = "audio/tsingui-32.3gpp"
            }else if(Number(textano.value) == 1987 && Number(textmes.value) == 2){
                img.setAttribute('src', 'imagens-v/hamilton.png')
                audio.src = "audio/hamilton-34.3gpp"
            }else if(Number(textano.value) == 1986 && Number(textmes.value) == 10){
                img.setAttribute('src', 'imagens-v/sivi.png')
                audio.src = "audio/sivi-35.3gpp"
            }else{
                img.setAttribute('src', 'imagens-v/resultadoimg.png')
                audio.src = "audio/resultado-2.3gpp"
            }
        }else if(radsex[1].checked){
            genero = 'Mulher'
            if(Number(textano.value) == 2015 && Number(textmes.value) == 7){
                img.setAttribute('src', 'imagens-v/luria.png')
                audio.src = "audio/luriane-6.3gpp"
            }else if (Number(textano.value) == 2011 && Number(textmes.value) == 4){
                img.setAttribute('src', 'imagens-v/celma.png')
                audio.src = "audio/celma.3gpp"
            }else if(Number(textano.value) == 2010 && Number(textmes.value) == 6){  
                img.setAttribute('src', 'imagens-v/leni.png')
                audio.src = "audio/madalena.3gpp"
            }else if(Number(textano.value) == 1997 && Number(textmes.value) == 2){
                img.setAttribute('src', 'imagens-v/nice.png')
                audio.src = "audio/eunice.3gpp"
            }else if(Number(textano.value) == 1996 && Number(textmes.value) == 6){
                img.setAttribute('src', 'imagens-v/tieny.png')
                audio.src = "audio/tieny.3gpp"
            }else if(Number(textano.value) == 1996 && Number(textmes.value) == 9){
                img.setAttribute('src', 'imagens-v/joseani.png')
                audio.src = "audio/joseani.3gpp"
            }else if(Number(textano.value) == 1996 && Number(textmes.value) == 1){
                img.setAttribute('src', 'imagens-v/fada.png')
                audio.src = "audio/weza.3gpp"
            }else if(Number(textano.value) == 1992 && Number(textmes.value) == 4){
                img.setAttribute('src', 'imagens-v/maezinha.png')
                audio.src = "audio/wandi-29.3gpp"
            }else if(Number(textano.value) == 1988 && Number(textmes.value) == 10){
                img.setAttribute('src', 'imagens-v/elizeth.png')
                audio.src = "audio/elizeth-32.3gpp"
            }else if(Number(textano.value) == 1987 && Number(textmes.value) == 10){
                img.setAttribute('src', 'imagens-v/catia.png')
                audio.src = "audio/catia-34.3gpp"
            }else if(Number(textano.value) == 1966  && Number(textmes.value) == 12){
                img.setAttribute('src', 'imagens-v/mama.png')
                audio.src = "audio/tona-54-m.3gpp"
            }else{
                img.setAttribute('src', 'imagens-v/resultadoimg.png')
                audio.src = "audio/resultado-2.3gpp"
            } 
        
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detetamos ${genero} com  ${idade} anos de idade!`
        res.appendChild(img)
        res.appendChild(audio)
 
        
        
        
            
    }

}
