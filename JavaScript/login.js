let nomelgin = document.querySelector("#nomelgin")
let labelnomelogin = document.querySelector("#labelnomelogin")

let labelsenhalogin = document.querySelector("#labelsenhalogin")
let senhalogin = document.querySelector("#senhalogin")

nomelgin.addEventListener('keyup', ()=>{
    if(nomelgin.value.length <= 2){
        labelnomelogin.setAttribute('style','color: red')
        labelnomelogin.innerHTML = 'Nome * no minimo 3 caracteres'
        nomelgin.setAttribute('style','color: red')
     } else {
         labelnomelogin.setAttribute('style','color: green')
         labelnomelogin.innerHTML = 'Nome'
         nomelgin.setAttribute('style','color: green')
     }
 })
 senhalogin.addEventListener('keyup', ()=>{
    if(senhalogin.value.length <= 5){
        labelsenhalogin.setAttribute('style','color: red')
        labelsenhalogin.innerHTML = 'Senha * no minimo 6 caracteres'
        senhalogin.setAttribute('style','color: red')
     } else {
        labelsenhalogin.setAttribute('style','color: green')
        labelsenhalogin.innerHTML = 'Senha'
        senhalogin.setAttribute('style','color: green')
     }
 }) 