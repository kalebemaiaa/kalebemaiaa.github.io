function sendMail() {
    var email=document.querySelector('#email')
    var assunto=document.querySelector('#assunto')
    var text =document.querySelector('#myText')

    if(assunto.value!=""&&email.value!=""&&text.value!=""){
        console.log("oi")
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
        console.log("tchau")
    }
}

var pixels=50
var carrossel=document.getElementById(`carrossel`)
var btn_left=document.getElementById(`left-arrow`)
var btn_right=document.getElementById(`right-arrow`)

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
btn_right.onclick=mover_right
btn_left.onclick=mover_left