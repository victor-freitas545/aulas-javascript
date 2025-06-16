function validarLogin(){
    const inputEmail = document.getElementById("email")
    const inputPassword = document.getElementById("password")
    //concatenação de valores através de crase

if(inputEmail == true){
    alert(`
        Usuário logado com sucesso!
        Acesso com e-mail: ${inputEmail.value}
        `);
} else {
    alert('Usuário ou senha incorretos');
}

alert(`
    Usuário logado com sucesso!
    Acesso com e-mail: ${inputEmail.value}
    `);
}