import validatePassword from './cadastrar';
const baseUrl = 'https://traveler-yd39.onrender.com/';
// const baseUrl = 'http://localhost:3003/';


// if (localStorage.getItem('token') == null) {
//     alert("Você precisa estar logado para ter acesso a esta página.");
//     window.location.href = `https://traveler-io.netlify.app/`;
// }

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

const divAvatarUser = document.querySelector('#avatarUser');


// id do usuário
function getIdUser() {
    const id = localStorage.getItem('id');
    return id;
}

// coloca a imagem do usuario
function fillScreenImage(imageUrl) {
    if (imageUrl) {
        const newAvatarUser = `
            <img src="${imageUrl}" alt="" id="image">
            <label class="fas fa-image" for="picture_image" id="label_image_profile">
                <input type="file" onchange="updateImage()" accept="image/*" id="picture_image" class="fas fa-image"></input>
            </label>
        `;
        divAvatarUser.innerHTML = newAvatarUser;

        return;
    } else {
        divAvatarUser.innerHTML = `
            <img src="/img/space_cinematic.png" alt="" id="image">
            <label class="fas fa-image" for="picture_image" id="label_image_profile">
                    <input type="file" onchange="updateImage()" accept="image/*" id="picture_image" class="fas fa-image"></input>
            </label>
        `;

        return;
    }
}

//pega o usuário da api
getUser();
async function getUser() {
    const idUser = getIdUser();
    const resp = await fetch(`${baseUrl}users/${idUser}`, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': localStorage.getItem("token")
        }
    });
    const user = await resp.json();
    //Printar imagem na tela
    fillScreenImage(user.image);
    fillUserData();
}
// popup image
//Atualizar imagem
async function updateImage() {
    var element = document.getElementById("picture_image");

    let data = new FormData();
    data.append('image', element.files[0]);

    // pegar id do user
    const idUser = getIdUser();

    const resp = await fetch(`${baseUrl}users/image/${idUser}`, {
        method: 'PATCH',
        body: data,
        headers: {
            "Accept": "application/json",
            'Authorization': localStorage.getItem("token")
        }
    });

    data = null;

    const imageLink = await resp.json();

    //Printar imagem na tela
    fillScreenImage(imageLink.image);

}
const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
    const inputEmail = document.querySelector("#emailDel");
    const userEmail = inputEmail.value;
    deleteAcc(userEmail);
}
function deleteAcc(email) {
    if (email == localStorage.getItem("email")) {
        const idUser = getIdUser();
        fetch(`${baseUrl}users/${idUser}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(response => {
                if (response.ok) {
                    alert('Foi bom enquanto durou :( ');
                    window.location.href = "/index.html";
                    return { status: data }
                } else if (!response.ok) {
                    throw new Error("Erro ao apagar usuário");
                }
            }
            )
    } else {
        alert('Email ou senha inválidos')
    }
}

const alterButton = document.querySelector(".btn-profile");
alterButton.onclick = function () {
    const inputOldPass = document.querySelector("#senha");
    const inputNewPass = document.querySelector("#novasenha");
    const inputConfirm = document.querySelector("#confirmar");
    const oldPass = inputOldPass.value;
    const newPass = inputNewPass.value;
    const confirm = inputConfirm.value;
    validatePassword(newPass);
    if (confirm != newPass) {
        alert("As senhas devem ser iguais");
        return;
    } else {
        updatePass(oldPass, newPass);
    }
}
async function updatePass(oldPass, newPass) {
    try {
        const idUser = getIdUser()
        const user = {
            name: localStorage.getItem("name"),
            email: localStorage.getItem("email"),
            password: oldPass,
            newPassword: newPass

        };
        const resp = await fetch(`${baseUrl}users/${idUser}`,
            {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                },
                body: JSON.stringify(user),
            }
        );
        if (resp.status === 201) {
            alert("Senha alterada");
            window.location.href = "/index.html";
        } else {
            console.log("erro");
        }
    } catch (error) {
        console.error(error.message);
    }
}



function fillUserData() {
    const userTitle = document.querySelector("#userTitle");
    userTitle.innerHTML = localStorage.getItem("name");
    document.getElementById("username").value = localStorage.getItem("name");
    document.getElementById("useremail").value = localStorage.getItem("email");
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

//remover td do local storage ao deslogar do sistema
function logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('id');
    window.localStorage.removeItem('name');
    window.localStorage.removeItem('email');
}
