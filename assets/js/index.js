
import { countdown } from "./countdown.js";

import { toggleModal } from "./toggleModal.js";

import { validateEmail } from "./validateEmail.js";

import { success } from "./success.js";

const button = document.getElementById("btn")
const submitBtn = document.getElementById('submitBtn')
const userEmail = document.getElementById("email")

// Atualiza a contagem
setInterval(() => countdown(), 1000)

// Chama o modal
button.addEventListener('click', toggleModal)

// Valida a entrada do e-mail
submitBtn.addEventListener('click', (ev) => {
    ev.preventDefault()

    try {
        validateEmail(userEmail.value) 

        setTimeout(() => success(ev), 1000 * 3)
        // success(ev)
    } catch (err) {
        document.getElementById("email-error").innerText = `${err.message}`
        document.querySelector("input[name='email']").classList.add('error')
    }
})

// Limpa o input pós erro
userEmail.addEventListener('input', () => {
    userEmail.classList.remove('error')
    document.getElementById("email-error").innerText = ""
})