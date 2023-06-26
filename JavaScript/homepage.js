const baseUrl = 'https://traveler-yd39.onrender.com/';
// const baseUrl = 'http://localhost:3003/';


if (localStorage.getItem('token') == null) {
    alert("Você precisa estar logado para ter acesso a esta página.");
    window.location.href = `https://traveler-io.netlify.app/`;
}


//pegar e filtrar anuncios (integraçao)
const divAnnouncement = document.querySelector('#announcement');
const filterDate = document.querySelector('#filterDate');
const filterEndCity = document.querySelector('#filterEndCity');
const filterStartCity = document.querySelector('#filterStartCity');
const filterOnlyEndCity = document.querySelector('#searchBox')

function showAdd() {
    var element = document.getElementById("formCreate");
    element.classList.add("show-create");
}
function closeRemove() {
    var element = document.getElementById("formCreate");
    element.classList.remove("show-create");
} 

//pegar e filtrar anuncios (integraçao)
async function getAnnouncements() {
    try {
        const date = filterDate.value;
        let endCity = filterEndCity.value;
        const startCity = filterStartCity.value;

        if (!endCity) {
            endCity = filterOnlyEndCity.value;
        }

        const response = await fetch(`${baseUrl}announcement?date=${date}&endCity=${endCity}&startCity=${startCity}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": window.localStorage.getItem("token")
            }
        }
        );

        const announcements = await response.json();

        if (response.status === 200) {
            //printar anuncios encontrados na tela
            fillScreen(announcements);
        } else {
            console.log(announcements);
        }
    } catch (error) {
        console.error(error.message);
    }
}

//printar anuncios encontrados na tela
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
                    <h3> <i class="fas fa-map-marker-alt"></i> ${announcement.destinationAddress.city}-${announcement.destinationAddress.state} </h3>
                </div>
                <div class="content">
                    <p>Data: ${date}</p>
                    <div class="price"> R$${announcement.price} </div>
                    <p>${announcement.originAddress.city}-${announcement.originAddress.state} para ${announcement.destinationAddress.city}-${announcement.destinationAddress.state}</p>
                    <a href="#" class="btn"> acessar</a>
                </div>
            </div>
        `
        divAnnouncement.innerHTML = divAnnouncement.innerHTML + newAnnouncementHtml;
    });
}
//pegar e filtrar anuncios (integraçao) - fim



let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');

    if (themeBtn.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }

};

//remover td do local storage ao deslogar do sistema
function logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('id');
    window.localStorage.removeItem('name');
    window.localStorage.removeItem('email');
}