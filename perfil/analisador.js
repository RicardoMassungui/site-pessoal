let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
function atualizar(){
    var user = prompt("Qual é o seu nome? ")
        alert(`${user.toUpperCase()}, Seja bem-vindo ao nosso appweb! `)
}
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Número ${num.value} Adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista!')
    }

    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert("Digite algum número antes de finalizar!")
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        soma = 0
        média = 0
        par = 0
        ímpar = 0
        tpar = 0
        timpar = 0 
        for(let pos in valores){
            if(valores[pos]%2==0){
                par ++ 
                tpar += valores[pos]
            }else{
                ímpar ++
                timpar += valores[pos]
            }
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        média = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo foram ${total} números digitados!</p>`
        res.innerHTML += `<p>O maior número digitado foi ${maior}</p>`
        res.innerHTML += `<p>O menor número digitado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os números digitados equivale a ${soma}</p>`
        res.innerHTML += `<p>A média de todos os números digitados equivale a ${média}</p>`
        res.innerHTML += `<p>Números pares digitados ${par}</p>`
        res.innerHTML += `<p>Números ímpares digitados ${ímpar}</p>`
        res.innerHTML += `<p>Soma de todos os Números pares digitados ${tpar}</p>`
        res.innerHTML += `<p>Soma de todos os Números ímpares digitados ${timpar}</p>`
       

    }
}