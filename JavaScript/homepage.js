// Link da API online = https://traveler-yd39.onrender.com

//pegar e filtrar anuncios (integraçao)
const divAnnouncement = document.querySelector('#announcement');
const filterDate = document.querySelector('#filterDate');
const filterEndRoute = document.querySelector('#filterEndRoute');
const filterStartRoute = document.querySelector('#filterStartRoute');

async function getAnnouncements() {
    const response = await fetch('https://traveler-yd39.onrender.com/announcement');
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
        const date = announcement.date.split("T")[0];
        
        const newAnnouncementHtml = `
            <div class="box" data-aos="fade-up">
                <div class="image">
                    <img src="/img/Teresina.jpg" alt="">
                    <h3> <i class="fas fa-map-marker-alt"></i> teresina </h3>
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
        const endRoute = filterEndRoute.value;
        const startRoute = filterStartRoute.value;

        const response = await fetch(`https://traveler-yd39.onrender.com/announcement/filter?date=${date}&endRoute=${endRoute}&startRoute=${startRoute}`,{
           headers: {
            Accept: "application/json",
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