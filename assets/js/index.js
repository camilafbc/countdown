
import { countdown } from "./countdown.js";

import { toggleModal } from "./toggleModal.js";

// Atualiza a contagem
setInterval(() => countdown(), 1000)

// Chama o modal
const button = document.getElementById("btn")

button.addEventListener('click', toggleModal)


const submitBtn = document.getElementById('submitBtn')
const form = document.getElementById('form')

function success(ev){
    ev.target.parentNode.remove()
    document.getElementById("modal").innerHTML = `
    <div class="modal-content">
                <p>Inscrição realizada com sucesso!</p>
                <img src="assets/img/beam-flower-background.png" alt="">
                <p>Em breve você receberá todas as nossas novidades!</p>
            </div>
    `
}

// VALIDAR MODAL

const userEmail = document.getElementById("email") 
const userName = document.getElementById("name")

function validateEmail(email){
    if(!email.match(/\w{2,}@[a-z]{2,}\.[a-z]{2,}/)){
        const err = new Error("E-mail inválido")
        err.input = 'email'
        throw err
        console.log(email)
    }
}

function validateName(name){
    if(!name.match(/\w{3,}/)){
        const err = new Error("Nome deve conter mais de 3 caracteres.")
        err.input = 'name'
        throw err
    }
}

submitBtn.addEventListener('click', (ev) => {
    ev.preventDefault()

    try {
        // validateName(userName.value)
        validateEmail(userEmail.value) 
        console.log(userEmail.value)
        success(ev)

    } catch (err) {
        document.getElementById("email-error").innerText = `${err.message}`
        document.querySelector("input[name='email']").classList.add('error')
    }
})


