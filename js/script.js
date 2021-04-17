function sendMail() {
    var email=document.querySelector('#email')
    var assunto=document.querySelector('#assunto')
    var link = "mailto:kalebe258456@gmail.com"
             + "?cc=" +encodeURIComponent(email.value)
             + "&subject=" + encodeURIComponent(assunto.value)
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;
}

var btn_right=document.getElementById(`right-arrow`)
var btn_left=document.getElementById(`left-arrow`)
var carrossel=document.getElementById(`carrossel`)
var pixels=50

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