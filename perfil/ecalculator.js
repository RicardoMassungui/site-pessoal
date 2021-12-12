function atualizar(){
    var user = prompt("Qual é o seu nome? ")
        alert(`${user.toUpperCase()}, Seja bem-vindo ao nosso appweb! `)
}
function adicionar(){
        
    // M-S/ID
    var tn1 = document.getElementsByName('txtn1')[0]
    var tn2 = document.getElementsByName('txtn2')[0]
    
    // Convertendo string/number
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var total = n1 + n2
    
    // Método de acesso rápido, de exibição e de atribuir valor e alterar o conteúdo de um DOM-E
    var ask = document.getElementsByName('res')[0]. innerHTML = `<strong>O total da adição entre ${n1} e ${n2} equivale a ${total}</strong>`
    
    }

    function subtrair(){
        var tn1s = document.getElementsByName('txtn1s')[0]
        var tn2s = document.getElementsByName('txtn2s')[0]
        var n1s = Number(tn1s.value)
        var n2s = Number(tn2s.value)
        var resto = n1s - n2s

        var asks = document.getElementsByName('res2')[0].innerHTML = `<strong>O resto da subtração entre ${n1s} e ${n2s} equivale a ${resto}</strong>`
    }

    
    function multiplicar(){
        var tn1m = document.getElementsByName('txtn1m')[0]
        var tn2m = document.getElementsByName('txtn2m')[0]
        var n1m = Number(tn1m.value)
        var n2m = Number(tn2m.value)
        var produto = n1m * n2m

        var askm = document.getElementsByName('res3')[0].innerHTML = `<strong>O produto da multiplicação entre ${n1m} e ${n2m} equivale a ${produto}</strong>`
    }
    
    
    function repartir(){
        var tn1r = document.getElementsByName('txtn1r')[0]
        var tn2r = document.getElementsByName('txtn2r')[0]
        var n1r = Number(tn1r.value)
        var n2r = Number(tn2r.value)
        var coeficiente = n1r / n2r

        var askr = document.getElementsByName('res4')[0].innerHTML = `<strong>O coeficiente da divisão entre ${n1r} e ${n2r} equivale a ${coeficiente}</strong>`
    }

    /*var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    
    M-ID <- var ask = document.getElementById('res').textContent/innerText/innerHtml
    M-S/ID <- var ask = document.querySelector('div#res').textContent/innerText/innerHtml
    
    1 - ask.innerHTML = `<strong>o total da adição entre ${n1} e ${n2} equivale a ${total}</strong>`
    
    2 - ask.innerText = total...
    
    3 - ask.textContent = total...
   
    */