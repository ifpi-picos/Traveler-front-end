// const divAnnouncement = document.querySelector('#')

// async function getAnnouncements() {
//     const response = await fetch('https://traveler-yd39.onrender.com/announcement');
//     const announcements = await response.json();
//     fillScreen(announcements);
// }

// function fillScreen(announcements) {
//     announcements.forEach(announcement => {
//         const newAnnouncementHtml = `
//             <div class="box" data-aos="fade-up">
//                 <div class="image">
//                     <img src="/img/Teresina.jpg" alt="">
//                     <h3> <i class="fas fa-map-marker-alt"></i> teresina </h3>
//                 </div>
//                 <div class="content">
//                     <div class="price"> R$${announcement.price} </div>
//                     <p>picos para teresina</p>
//                     <a href="#" class="btn"> acessar</a>
//                 </div>
//             </div>
//         `
//         divAnnouncement.innerHTML = divAnnouncement.innerHTML + newAnnouncementHtml;
//     });
// }

// integraçao com a api (WESLEY)

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

