function atualizar(){
    var user = prompt("Qual é o seu nome? ")
    alert(`${user.toUpperCase()}, Seja bem-vindo ao nosso appweb! `)
}
function calcular(){
var txtn1 = document.querySelector('input#txtn1')
var txtn2 = document.getElementById('txtn2')
var res = document.getElementById('res')
    
if(txtn1.value.length == 0 || txtn2.value.length == 0){
    alert("ERRO! digite um número, e tente novamente!")
}else{
    tn1 = Number(txtn1.value)
    tn2 = Number(txtn2.value)

    res.innerHTML = ''
    var c = 0
    while(c <= tn2){
    item = document.createElement('option')
    item.text = `${tn1} X ${c} = ${tn1*c}`
    item.value = `tab${c}`
    res.appendChild(item)
    c ++
        }

    }


}