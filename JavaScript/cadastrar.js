console.log("adas")
let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let email = document.querySelector('#email')

let labelEmail = document.querySelector('#labelUsuario')

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')

let confirmarSenha = document.querySelector('#confirmarSenha')
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')



console.log(nome)

    nome.addEventListener('keyup', ()=>{
           if(nome.value.length <= 2){
               labelNome.setAttribute('style','color: red')
               labelNome.innerHTML = 'Nome * no minimo 3 caracteres'
               nome.setAttribute('style','color: red')
            } else {
                labelNome.setAttribute('style','color: green')
                labelNome.innerHTML = 'Nome'
                nome.setAttribute('style','color: green')
            }
        })
        email.addEventListener('keyup', ()=>{
            if(email.value.length <= 2){
                labelEmail.setAttribute('style','color: red')
                nome.setAttribute('style','color: red')
             } else {
                labelEmail.setAttribute('style','color: green')
                labelEmail.innerHTML = 'E-mail' 
             }
         })
         senha.addEventListener('keyup', ()=>{
            if(senha.value.length <= 5){
                labelSenha.setAttribute('style','color: red')
                labelSenha.innerHTML = 'Senha * no minimo 6 caracteres'
                nome.setAttribute('style','color: red')
             } else {
                labelSenha.setAttribute('style','color: green')
                labelSenha.innerHTML = 'Senha'
                 senha.setAttribute('style','color: green')
             }
         })
         confirmarSenha.addEventListener('keyup', ()=>{
            if(senha.value != confirmarSenha.value){
                labelConfirmarSenha.setAttribute('style','color: red')
                labelConfirmarSenha.innerHTML = 'erro nas senhas'
                nome.setAttribute('style','color: red')
             } else {
                labelConfirmarSenha.setAttribute('style','color: green')
                labelConfirmarSenha.innerHTML = 'confirmar senha'
                confirmarSenha.setAttribute('style','color: green')
             }
         })

         
    
function cadastrar(){
    console.log("foi")
}