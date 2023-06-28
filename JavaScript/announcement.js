const baseUrl = 'https://traveler-yd39.onrender.com/';
// const baseUrl = 'http://localhost:3003/';

// if (localStorage.getItem('token') == null) {
//     alert("Você precisa estar logado para ter acesso a esta página.");
//     window.location.href = `https://traveler-io.netlify.app/`;
// }   

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
                <h3> <i class="fas fa-map-marker-alt"></i> ${announcement.destinationAddress.city}-${announcement.destinationAddress.state} </h3>
            </div>
            <div class="content">
                <div class="price"> ${announcement.price} </div>
                <p>${announcement.originAddress.city}-${announcement.originAddress.state} para ${announcement.destinationAddress.city}-${announcement.destinationAddress.state}</p>
                <div class="date">${date}</div>
                <a href="#" class="btn"> Acessar</a>
            </div>
            </div>
        `
        divMyAnnouncements.innerHTML = divMyAnnouncements.innerHTML + newAnnouncementHtml;
    });
    divMyAnnouncements.innerHTML = divMyAnnouncements.innerHTML + `<div class="addAnnouncement">
    <i class="fas fa-plus" onclick="showAdd()"></i>
    <span class="tooltipe">Solicitar viagem?</span>
</div>
<div class="delete" id="formCreate">
    <div class="formAdd">
        <form action="" class="form-announcement">
           
            <div class="column-image">
                <img src="../img/profile-icon.jpg" alt="">
                <label id="label_image_announcement" for="picture_image" >Inserir imagem</label>
                <input type="file" onchange="" accept="image/*" id="picture_image"
                    class="fas fa-image" required></input>
            </div>
            <div class="input-account">
                <label>Link de contato</label>
                <input id="socialLink" type="text" placeholder="Whatsapp: (99) 99999-9999" required>
            </div>
            <div class="column">
                <div class="input-account">
                    <label>Placa do veículo</label>
                    <input id="licensePlate" type="text" placeholder="AAA0A00" required>
                </div>
                <div class="input-account">
                    <label>Marca do veículo</label>
                    <input id="vehicle" type="text" placeholder="Honda" required>
                </div>
            </div>
            <div class="column">
                <div class="input-account">
                    <label>Valor</label>
                    <input id="price" type="text" placeholder="Valor" required>
                </div>
                <div class="input-account">
                    <label>Data</label>
                    <input id="date" type="text" placeholder="Data" required>
                </div>
            </div>
            <div class="column">
                <div class="input-account">
                    <label>Cep do local de saída da viagem</label>
                    <input id="startZipCode" type="text" placeholder="Cep origem" minlength="8" maxlength="8" required>
                </div>
            </div>
            <div class="column">
                <div class="input-account">
                    <label>Cidade de origem</label>
                    <input id="startCity" placeholder="Cidade origem" disabled>
                </div>
                <div class="input-account">
                    <label>Estado de origem</label>
                    <input id="startState" placeholder="Estado origem" disabled>
                </div>
            </div>
            <div class="column">
                <div class="input-account">
                    <label>Rua de origem</label>
                    <input id="startStreet" placeholder="Rua origem" disabled>
                </div>
                <div class="input-account">
                    <label>Bairro de origem</label>
                    <input id="startDistrict" placeholder="Bairro origem" disabled>
                </div>
            </div>
            <div class="column">
                <div class="input-account">
                    <label>Informe um ponto de referência (Campo não obrigatório)</label>
                    <input id="startReferencePoint" placeholder="Próximo à(o)...">
                </div>
            </div>
            <div class="column">
                <div class="input-account">
                    <label>Cep do local de chegada da viagem</label>
                    <input id="endZipCode" type="text" placeholder="Cep destino" minlength="8" maxlength="8" required>
                </div>
            </div>
            <div class="column">
                <div class="input-account">
                    <label>Cidade de destino</label>
                    <input id="endCity" placeholder="Cidade destino" disabled>
                </div>
                <div class="input-account">
                    <label>Estado de destino</label>
                    <input id="endState" placeholder="Estado destino" disabled>
                </div>
            </div>
            <div class="column">
                <div class="input-account">
                    <label>Rua de destino</label>
                    <input id="endStreet" placeholder="Rua destino" disabled>
                </div>
                <div class="input-account">
                    <label>Bairro de destino</label>
                    <input id="endDistrict" placeholder="Bairro destino" disabled>
                </div>
            </div>
            <div class="column">
                <div class="input-account">
                    <label>Informe um ponto de referência (Campo não obrigatório)</label>
                    <input id="endReferencePoint" placeholder="Próximo à(o)...">
                </div>
            </div>
        </form>
        <p>Adicionar?</p>
        <div class="buttons">
            <button class="no" onclick="closeRemove()">Não</button>
            <button class="yes" onclick="addAnnouncement()">Sim</button>
        </div>
    </div>
</div>`
    
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

        const endCity = document.querySelector('#searchBox');
        const response = await fetch(`${baseUrl}announcement?endCity=${endCity.value}&userId=${userId}`,{
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

const licensePlateInput = document.querySelector("#licensePlate");
const socialLinkInput = document.querySelector("#socialLink");
const priceInput = document.querySelector("#price");
const dateInput = document.querySelector("#date");
const vehicleInput = document.querySelector("#vehicle");
//address
const startZipCodeInput = document.querySelector("#startZipCode");
const startCityInput = document.querySelector("#startCity");
const startStateInput = document.querySelector("#startState");
const startStreetInput = document.querySelector("#startStreet");
const startDistrictInput = document.querySelector("#startDistrict");
const startReferencePointInput = document.querySelector("#startReferencePoint");
const endZipCodeInput = document.querySelector("#endZipCode");
const endCityInput = document.querySelector("#endCity");
const endStateInput = document.querySelector("#endState");
const endDistrictInput = document.querySelector("#endDistrict");
const endStreetInput = document.querySelector("#endStreet");
const endReferencePointInput = document.querySelector("#endReferencePoint");

const imageInput = document.querySelector("#image");
const element = document.getElementById("picture_image");

// Chamar api para cadastrar anuncio
async function addAnnouncement() {

    try {

        let data = new FormData();
        data.append('image', element.files[0]);
        data.append('licensePlate', licensePlateInput.value);
        data.append('socialLink', socialLinkInput.value);
        data.append('price', priceInput.value);
        data.append('date', dateInput.value);
        //address
        data.append('startZipCode', startZipCodeInput.value);
        data.append('startCity', startCityInput.value);
        data.append('startState', startStateInput.value);
        data.append('startStreet', startStreetInput.value);
        data.append('startDistrict', startDistrictInput.value);
        data.append('startReferencePoint', startReferencePointInput.value);
        data.append('endZipCode', endZipCodeInput.value);
        data.append('endCity', endCityInput.value);
        data.append('endState', endStateInput.value);
        data.append('endStreet', endStreetInput.value);
        data.append('endDistrict', endDistrictInput.value);
        data.append('endReferencePoint', endReferencePointInput.value);
        //addd addressss
        data.append('vehicle', vehicleInput.value);
        data.append('advertiserId', getIdUser());

        const response = await fetch(`${baseUrl}announcement`, {
            method: 'POST',
            credentials: "include",
            body: data,
            headers: {
                "Accept": "application/json",
                "Authorization": window.localStorage.getItem("token"),
            },
        });

        data = null;

        const newAnnouncement = await response.json();

        if(response.status === 201) {
            //printar msg de sucesso
            alert('Anúncio criado!');
            //atualizar os anuncios na tela
            closeRemove();
            getMyAnnouncements();
        } else {
            console.error(`Erro no servidor: ${newAnnouncement}`)
        }
    } catch (error) {
        console.error(error.message);
    }
   
}

// ALESSANDRO ESTA QUEBRANDO AKI POIS O startZipCodeInput... SO TEM QUANDO OS DADOS DO BACK-END CHEGA
//zipCode
startZipCodeInput.addEventListener("keypress", (e) => onlyNumber(e));
startZipCodeInput.addEventListener("keyup", (e) => verifyZipCode(e));
endZipCodeInput.addEventListener("keypress", (e) => onlyNumber(e));
endZipCodeInput.addEventListener("keyup", (e) => verifyZipCode(e));

function verifyZipCode(e) {
    const inputValue = e.target.value;

    if (inputValue.length === 8) {
        alert('1')
        getAddress(inputValue);
    }
}

function onlyNumber(e) {

    const onlyNumbers = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);
    
    if (!onlyNumbers.test(key)) {
        alert('Preencha o Cep somente com números.');
        setTimeout(function() {e.target.value = ''}, 500);
        
        return;
    }
}

async function getAddress(zipCode) {
    endZipCodeInput.blur();
    startZipCodeInput.blur();

    const apiUrl = `https://viacep.com.br/ws/${zipCode}/json/`;

    const response = await fetch(apiUrl);

    const data = await response.json();

    if (zipCode === startZipCodeInput.value) {
        startCityInput.value = data.localidade;
        startDistrictInput.value = data.bairro;
        startStateInput.value = data.uf;
        startStreetInput.value = data.logradouro;
    } else if (zipCode === endZipCodeInput.value) {
        endCityInput.value = data.localidade;
        endDistrictInput.value = data.bairro;
        endStateInput.value = data.uf;
        endStreetInput.value = data.logradouro;
    }
    
}

//integração da página, criar anuncio - fim

//remover td do local storage ao deslogar do sistema
function logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('id');
    window.localStorage.removeItem('name');
    window.localStorage.removeItem('email');
}


