function sendMail() {
    var email=document.querySelector('#email')
    var assunto=document.querySelector('#assunto')
    var text =document.querySelector('#myText')

    if(assunto.value!=""&&email.value!=""&&text.value!=""){
        var link = "mailto:kalebe258456@gmail.com"
                + "?cc=" +encodeURIComponent(email.value)
                + "&subject=" + encodeURIComponent(assunto.value)
                + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    
        window.location.href = link;

        text.value=('')
        assunto.value=('')
        email.value=('')
    }
    else{
        text.value=('')
        assunto.value=('')
        email.value=('')
        alert("Preencha todos os campos")
    }
}

var pixels=50
var carrossel=document.getElementById(`carrossel`)

function mover_left(){
    if(pixels<=1200){
       pixels=pixels+50
}
    carrossel.style=`transform:translateX(${pixels}px)`
}

function mover_right(){
    if(pixels>=-1200){
        pixels=pixels-50
}
    carrossel.style=`transform:translateX(${pixels}px)`
}

function mostra_itens(){
const botão_mostra_itens = document.querySelector('#mobile-button')
botão_mostra_itens.style.display="none"
}