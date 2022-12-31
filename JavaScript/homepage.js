const baseUrl = 'https://traveler-yd39.onrender.com/';
// const baseUrl = 'http://localhost:3003/';


if (localStorage.getItem('token') == null) {
    alert("Você precisa estar logado para ter acesso a esta página.");
    window.location.href = `https://traveler-io.netlify.app/`;
}


//pegar e filtrar anuncios (integraçao)
const divAnnouncement = document.querySelector('#announcement');
const filterDate = document.querySelector('#filterDate');
const filterEndRoute = document.querySelector('#filterEndRoute');
const filterStartRoute = document.querySelector('#filterStartRoute');
const filterOnlyEndRoute = document.querySelector('#searchBox')

async function getAnnouncements() {
    const response = await fetch(`${baseUrl}announcement`,{
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": window.localStorage.getItem("token")
        }
    });
    const announcements = await response.json();
    if (response.status === 200){
        fillScreen(announcements);
    } else {
        console.log(announcements.message);
    }
}

function fillScreen(announcements) {
    divAnnouncement.innerHTML = '';
    announcements.forEach(announcement => {
        const dateWithoutTime = announcement.date.split("T")[0];
        const smashDate = dateWithoutTime.split('-');
        const day = smashDate[2];
        const month = smashDate[1];
        const year = smashDate[0];
        const vehicle = announcement.vehicle;
        const image = announcement.image;
        const date = `${day}/${month}/${year}`;

        const newAnnouncementHtml = `
            <div class="box" data-aos="fade-up">
                <div class="image">
                    <img src="${image}" alt="">
                    <h3> <i class="fas fa-map-marker-alt"></i> ${vehicle} </h3>
                </div>
                <div class="content">
                    <p>Data: ${date}</p>
                    <div class="price"> R$${announcement.price} </div>
                    <p>${announcement.startRoute} para ${announcement.endRoute}</p>
                    <a href="#" class="btn"> acessar</a>
                </div>
            </div>
        `
        divAnnouncement.innerHTML = divAnnouncement.innerHTML + newAnnouncementHtml;
    });
}

//pegar e filtrar anuncios (integraçao)
async function filterAnnouncement(event) {
    event.preventDefault()
    try {
        const date = filterDate.value;
        let endRoute = filterEndRoute.value;
        const startRoute = filterStartRoute.value;

        if (!endRoute) {
            endRoute = filterOnlyEndRoute.value;
        }
 
        const response = await fetch(`${baseUrl}announcement/filter?date=${date}&endRoute=${endRoute}&startRoute=${startRoute}`,{
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
            fillScreen(announcements);
        } else {
            console.log(announcements);
        }
    } catch (error) {
        console.error(error.message);
    }
}
    
//pegar e filtrar anuncios (integraçao) - fim



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

function logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('id');
    window.localStorage.removeItem('name');
    window.localStorage.removeItem('email');
}