
import { countdown } from "./countdown.js";

import { toggleModal } from "./toggleModal.js";

// Atualiza a contagem
setInterval(() => countdown(), 1000)

// Chama o modal
const button = document.getElementById("btn")

button.addEventListener('click', toggleModal)


const submitBtn = document.getElementById('submitBtn')
const form = document.getElementById('form')


// submitBtn.addEventListener('click', (ev) => {
//     ev.preventDefault()

//     const teste = ev.target.parentNode.remove()
//     // modal.removeChild(form)
//     // modal.innerHTML = "<p>Inscrição efetuada com sucesso!</p>"

// console.log(teste)
// })

// VALIDAR MODAL

const userEmail = document.getElementById("email") 
const userName = document.getElementById("name")

function validateEmail(email){
    if(!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){
        const err = new Error("E-mail inválido")
        err.input = 'email'
        throw err
    }
}

function validateName(name){
    if(!name.match(/\w{3,}/)){
        const err = new Error("Nome deve conter mais de 3 caracteres.")
        err.input = 'name'
        throw err
    }
}

submitBtn.addEventListener('submit', () => {
    try {
        validateName(userName.value)
        validateEmail(userEmail.value) 
        document.getElementById("email").classList.add('success')
    } catch (err) {
        document.getElementById("email").classList.add('error')
    }
})

