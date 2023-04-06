
const fade = document.querySelector("#fade")
const modal = document.querySelector("#modal")

function toggleModal(){
    [fade, modal].forEach((element => {
        element.classList.toggle("hide")
    }))
}

fade.addEventListener('click', toggleModal)

export { toggleModal }