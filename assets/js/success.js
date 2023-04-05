function success(ev){
    ev.target.parentNode.remove()
    document.getElementById("modal").style.setProperty('height', 'auto')
    document.getElementById("modal").innerHTML = `
    <div class="modal-content">
        <p>Inscrição realizada com sucesso!</p>
        <img src="assets/img/beam-flower-background.png" alt="">
        <p>Em breve você receberá todas as nossas novidades!</p>
    </div>
    `
}

export { success }