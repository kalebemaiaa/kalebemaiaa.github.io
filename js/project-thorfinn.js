const option_command = document.querySelector("#select-command")
const img_example_command= document.querySelector("#example-img")
const nome_do_comando = document.querySelector("#nome_do_comando")
const descrição_do_comando = document.querySelector("#descrição_do_comando")

function mostrarcomando(){
        img_example_command.src = `./img/command_${option_command.value}.jpg`
        nome_do_comando.textContent = option_command.value
}
