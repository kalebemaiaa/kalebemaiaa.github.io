var email=document.querySelector('#email')
var assunto=document.querySelector('#assunto')

function sendMail() {
    var link = "mailto:kalebe258456@gmail.com"
             + "?cc=" +encodeURIComponent(email.value)
             + "&subject=" + encodeURIComponent(assunto.value)
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;
}