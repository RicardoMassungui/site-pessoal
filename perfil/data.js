var dt= new Date()
var semana=dt.getDay()
var dia=dt.getDate()
var mes=dt.getMonth()
var ano=dt.getFullYear()

var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
var semanas = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado")
var data = document.getElementById('dmy').innerHTML = semanas[semana] + ", " + dia + " de " + meses[mes] + " de " + ano
