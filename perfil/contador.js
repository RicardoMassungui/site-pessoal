function atualizar(){
        var user = prompt("Qual é o seu nome? ")
        alert(`${user.toUpperCase()}, Seja bem-vindo ao nosso appweb! `)
    }
function contar(){
    let txti = document.getElementById('txti')
    let txtf = document.getElementById('txtf')
    let txtp = document.getElementById('txtp')
    let res = document.querySelector('div#res')
    
    if(txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0){
        alert("verifique e Preencha todos espaços em branco, e tente novamente!")
        res.innerHTML = "Impossivél realizar a contagem!"
    }else{
        res.innerHTML = `contando: <br>`
        let inicio = Number(txti.value)
        let fim = Number(txtf.value)
        let passo = Number(txtp.value)
        if(passo <= 0){
            alert("Passo inválido, considerando passo 1!")
            passo = 1
        }
        if(inicio <= fim){
            // contagem crescente!
            for(let c = inicio; c <= fim; c += passo){
            res.innerHTML += ` ${c} \u{1f449} `
            }
        }else if(inicio >= fim){
            //contagem decrescente!
            for(let c = inicio; c >= fim; c -= passo)
            res.innerHTML += ` ${c} \u{1f449} `
        }
       
    }
    res.innerHTML += `\u{1f3c1}`




}