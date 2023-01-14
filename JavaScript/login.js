const baseUrl = 'https://traveler-yd39.onrender.com/';
// const baseUrl = 'http://localhost:3003/';

let EmailLogin = document.querySelector("#EmailLogin")
let labelEmailLogin = document.querySelector("#labelEmailLogin")

let senhalogin = document.querySelector("#senhalogin")
let labelsenhalogin = document.querySelector("#labelsenhalogin")

EmailLogin.addEventListener("keyup", () => {
    if (validateEmail(EmailLogin.value) !== true) {
        labelEmailLogin.setAttribute("style", "color: red");
    } else {
        labelEmailLogin.setAttribute("style", "color: green");
    }
});
senhalogin.addEventListener("keyup", () => {
    if (validatePassword(senhalogin.value) !== true) {
        labelsenhalogin.setAttribute("style", "color: red");
    } else {
        labelsenhalogin.setAttribute("style", "color: green");
    }
});
function validateEmail(email) {
    let valemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,3}$/g;

    return valemail.test(email);
}
function validatePassword(Password) {
    let valpass =
        /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g;

    return valpass.test(Password);
}

function setUserData(userData) {
    localStorage.setItem("id", userData.id);
    localStorage.setItem("email", userData.email);
    localStorage.setItem("name", userData.name);

    return;
}

function setToken(token) {
    localStorage.setItem("token", token);

    return;
}


async function init() {
    const inputEmail = document.querySelector("#EmailLogin")
    const senhalogin = document.querySelector("#senhalogin")
    const submitBuutton = document.querySelector("#button")

    const errorHandler = () => {
        submitBuutton.classList.remove("success")
        submitBuutton.classList.add("error")
        submitBuutton.textContent = "error"
    }

    const successHandler = () => {
        submitBuutton.classList.remove("error")
        submitBuutton.classList.add("success")
        submitBuutton.textContent = "sent!"
    }
    if (submitBuutton) {
        submitBuutton.addEventListener("click", async (event) => {
            if (validatePassword(senhalogin.value) === true && validateEmail(EmailLogin.value) === true) {
                submitBuutton.textContent = "...Loading"
                // event.preventDefault()

                await fetch(`${baseUrl}authentication/login`, {
                    method: 'POST',
                    headers: {
                        "content-Type": "application/json",
                        Accept: "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        email: inputEmail.value,
                        password: senhalogin.value
                    })

                }).then(async (response) => {
                    if (response.status !== 200) {
                        console.log(response)
                        return errorHandler();
                    }
                    const { token, userData } = await response.json()
                    setToken(token);
                    document.cookie = token;

                    setUserData(userData);
                    successHandler()
                    window.location = "/pages/homepage.html"
                }).catch(() => {
                    errorHandler();
                })
            } else {
                errorHandler();
            }
        })

    }
}
let mostrarSenha = document.getElementById("mostrarsenha");
let campoSenha = document.getElementById("senhalogin");
let verificaBotao = false;
mostrarSenha.addEventListener("click", function (event) {
    event.preventDefault();
    if (!verificaBotao) {
        campoSenha.setAttribute("type", "text");
        mostrarSenha.src = "img/eyeclose.svg";
        verificaBotao = true;
    } else {
        campoSenha.setAttribute("type", "password");
        mostrarSenha.src = "img/eyeopen.svg";
        verificaBotao = false;
    }
});
window.onload = init
