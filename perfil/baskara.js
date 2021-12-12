let va1 = document.querySelector('input#a')
let vb2 = document.querySelector('input#b')
let vc3 = document.querySelector('input#c')
let res = document.querySelector('div#res')
function atualizar(){
    var user = prompt("Qual é o seu nome? ")
        alert(`${user.toUpperCase()}, Seja bem-vindo ao nosso appweb! `)
}
function calcular(){
    if(Number(va1.value.length)==0 || Number(vb2.value.length)==0 || Number(vc3.value.length)==0){
        window.alert("[ERRO!] espaço não preenchido!")
    }
    let a = Number(va1.value)
    let b = Number(vb2.value)
    let c = Number(vc3.value)
    
    let h1s = document.createElement('div')
    h1s.setAttribute('id', 'fundo')
    let delta = b*b-4*a*c
    let rqdelta = Math.sqrt(delta)
    let X1 = -b+rqdelta/2*a
    let X2 = -b-rqdelta/2*a
    res.innerHTML = ''
    res.innerHTML += `<strong>Equação: ${a}x<sup>2</sup> + ${b}x + ${c} = 0<br><br></strong>` 
    res.innerHTML += `<strong>&Delta; Delta = ${delta}<br><br></strong>`
    res.innerHTML += `<strong>Raiz quadrada de Delta = ${rqdelta}<br><br></strong>`
    res.innerHTML += `<strong>Valor de X<sub>1</sub>(+) = ${X1}<br><br></strong>`
    res.innerHTML += `<strong>Valor de X<sub>2</sub>(-) = ${X2}<br><br></strong>`
    
    if(delta < 0){
        h1s.style.background = '#dd3322'
        h1s.innerHTML += `<strong>Se &Delta; < 0; Logo não existe solução de resolução!</strong>`
        res.appendChild(h1s)
        window.alert("Alerta de Solução: Para Delta negativos, Não existem raizes reais!") 
    }else if(delta > 0){
        h1s.style.background= '#3de42e'
        h1s.innerHTML += `<strong>Se &Delta; > 0; Logo existem duas soluções de resolução!</strong>`
        window.alert("Alerta de solução: Para Delta positivos, Raizes diferentes!")
        res.appendChild(h1s)
    }else if(delta == 0){
        h1s.style.background = '#ecdf25'
        h1s.innerHTML += `<strong>Se &Delta; = 0; Logo existe uma só solução de resolução!</strong>`
        window.alert("Alerta de Solução: Para Delta zero, Raizes raizes iguais!")
        res.appendChild(h1s)
    }

    





}