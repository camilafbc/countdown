function validateEmail(email){
    if(!email.match(/\w{2,}@[a-z]{2,}\.[a-z]{2,}/)){
        const err = new Error("E-mail inválido")
        err.input = 'email'
        throw err
    }
}

export { validateEmail }