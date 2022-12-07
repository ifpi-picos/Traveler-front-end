let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

};





// popup image
function showModal() {
    var element = document.getElementById("modal");
    element.classList.add("show-modal");
}

function closeModal() {
    var element = document.getElementById("modal");
    element.classList.remove("show-modal");
}


// popup delete account
function showDelete() {
    var element = document.getElementById("delete");
    element.classList.add("show-delete");
}
function closeDelete() {
    var element = document.getElementById("delete");
    element.classList.remove("show-delete");
}   


