let labelNome =document.querySelector('#labelNome')
let nome =document.querySelector('#nome')

let labelUsuario =document.querySelector('#labelUsuario')
let email =document.querySelector('#email')

let labelSenha =document.querySelector('#labelSenha')
let senha =document.querySelector('#senha')

let labelConfirmarSenha =document.querySelector('#labelSenha')
let confirmarSenha =document.querySelector('#senha')

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        labelNome.setAttribute("style", "color: red")
        labelNome.innerHTML = "<strong>Nome *pelo menos 3 caracteres</strong>"
    }else {
        labelNome.setAttribute("style", "color: green")
        
    }
})

function cadastrar(){
    console.log("foi")
}