function atualizar(){
    var user = prompt("Qual é o seu nome? ")
    alert(`${user.toUpperCase()}, Seja bem-vindo ao nosso appweb! `)
}
function calcular(){
    let txtn1 = document.querySelector('input#txtn1')
    let res = document.getElementById('res')
        
    if(txtn1.value.length == 0){
        alert("ERRO! digite um número, e tente novamente!")
    }else{
        tn1 = Number(txtn1.value)
        res.innerHTML = ''
        let c = 0
        while(c <= 12){
        item = document.createElement('option')
        item.text = `${tn1} X ${c} = ${c*tn1}`
        item.value = `tab${c}`
        res.appendChild(item)
        c ++
            }
    
        }
    
    
    }