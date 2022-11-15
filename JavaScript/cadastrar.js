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
           if(nome.value.length <= 3){
               labelNome.setAttribute('style','color: red')
               labelNome.innerHTML = 'Nome * no minimo 4 caracteres'
               nome.setAttribute('style','color: red')
            } else {
                labelNome.setAttribute('style','color: green')
                labelNome.innerHTML = 'Nome'    
                nome.setAttribute('style','color: green')
            }
        })
        email.addEventListener('keyup', ()=>{
            if(email.value.length <= 5){
                labelEmail.setAttribute('style','color: red')
                labelEmail.innerHTML = 'E-Mail * no minimo 6 caracteres'
                nome.setAttribute('style','color: red')
             } else {
                labelEmail.setAttribute('style','color: green')
                labelEmail.innerHTML = 'E-mail' 
             }
         })
         senha.addEventListener('keyup', ()=>{
            if(senha.value.length <= 7){
                labelSenha.setAttribute('style','color: red')
                labelSenha.innerHTML = 'Senha * no minimo 8 caracteres'
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
                labelConfirmarSenha.innerHTML = 'Senhas incorretas'
                nome.setAttribute('style','color: red')
             } else {
                labelConfirmarSenha.setAttribute('style','color: green')
                labelConfirmarSenha.innerHTML = 'confirmar senha'
                confirmarSenha.setAttribute('style','color: green')
             }
         })

         
    
// async function cadastrar(){
//     console.log("foi")
//     try {
//         const user = {
//             name: nome.value,
//             email: email.value,
//             password: senha.value
//         }
//         const resp = await fetch('https://traveler-yd39.onrender.com/users/cadastro', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(user)
//         })
//         if (resp.status === 201) {
//             console.log('certo')
//         } else {
//             console.log('erro');
//         }
//     } catch (error) {
//         console.error(error.message)
//     }
// }

