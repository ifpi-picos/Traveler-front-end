const baseUrl = 'https://traveler-yd39.onrender.com/';
// const baseUrl = 'http://localhost:3003/';

if (localStorage.getItem('token') == null) {
    alert("Você precisa estar logado para ter acesso a esta página.");
    window.location.href = `https://traveler-io.netlify.app/`;
}   

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


// popup create announcement
function showAdd() {
    var element = document.getElementById("formCreate");
    element.classList.add("show-create");
}
function closeRemove() {
    var element = document.getElementById("formCreate");
    element.classList.remove("show-create");
}   

//Integração da página, pegar meus anuncios

const divMyAnnouncements = document.querySelector("#announcement");

// printar os anúncios na tela
function fillScreen(announcements) {
    divMyAnnouncements.innerHTML = '';
    announcements.forEach(announcement => {
        const dateWithoutTime = announcement.date.split("T")[0];
        const smashDate = dateWithoutTime.split('-');
        const day = smashDate[2];
        const month = smashDate[1];
        const year = smashDate[0];
        // const vehicle = announcement.vehicle;
        const image = announcement.image;
        const date = `${day}/${month}/${year}`;

        const newAnnouncementHtml = `
            <div class="box" data-aos="fade-up">
            <div class="image">
                <img src=${image} alt="">
                <h3> <i class="fas fa-map-marker-alt"></i> ${announcement.endRoute} </h3>
            </div>
            <div class="content">
                <div class="price"> ${announcement.price} </div>
                <p>${announcement.startRoute} para ${announcement.endRoute}</p>
                <div class="date">${date}</div>
                <a href="#" class="btn"> Acessar</a>
            </div>
            </div>
        `
        divMyAnnouncements.innerHTML = divMyAnnouncements.innerHTML + newAnnouncementHtml;
    });
}

// id do usuário
function getIdUser(){
    const userId = localStorage.getItem('id');
    
    return userId;
}

// comunicar com api
getMyAnnouncements();
async function getMyAnnouncements() {
    try{
        const userId = getIdUser();

        const endRoute = document.querySelector('#searchBox');
        const response = await fetch(`${baseUrl}announcement?endRoute=${endRoute.value}&userId=${userId}`,{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": window.localStorage.getItem("token")
            }
        } 
        );

        const announcements = await response.json();

        if (response.status === 200){
            //printar anuncios encontrados na tela
            fillScreen(announcements);
        } else {
            console.log(announcements);
        }
}   catch (error) {
        console.error(error.message);
}
}
//fim integração da página, pegar meus anuncios 

//integração da página, criar anuncio - wesley

//FALTA FAZER TUDO PARA ADICIONAR A IMAGEM!

// const name = document.querySelector("#name");
// const socialLink = document.querySelector("#socialLink");
// const price = document.querySelector("#price");
// const date = document.querySelector("#date");
// const startRoute = document.querySelector("#startRoute");
// const endRoute = document.querySelector("#endRoute");

// async function addAnnouncement() {
//     const name = name.value;
//     const socialLink = socialLink.value;
//     const price = price.value;
//     const date = date.value;
//     const startRoute = startRoute.value;
//     const endRoute = endRoute.value;

//     try {
//          const response = await fetch(`${baseUrl}announcements`, {
//         method: 'POST',
//         headers: {
//             "content-Type":"application/json",
//             Accept: "application/json",
//             "Authorization": window.localStorage.getItem("token"),
//         },
//         credentials: "include",
//         body: JSON.stringify({
//             name,
//             socialLink,
//             price,
//             date,
//             startRoute,
//             endRoute,
//         })
//     });

//     const newAnnouncement = await response.json();

//     if(response.status === 201) {
//         //printar msg de sucesso
//         alert(newAnnouncement.msg);
//         //atualizar os anuncios na tela
//         getMyAnnouncements();
//     } else {
//         console.error(`Erro no servidor: ${newAnnouncement}`)
//     }
//     } catch (error) {
//         console.error(error.message);
//     }
   
// }

//integração da página, criar anuncio - fim