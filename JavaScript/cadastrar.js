let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelUsuario");

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");

let confirmarSenha = document.querySelector("#confirmarSenha");
let labelConfirmarSenha = document.querySelector("#labelConfirmarSenha");

let maiuscula = document.querySelector("#maiuscula");
let especial = document.querySelector("#especial");
let numero = document.querySelector("#numero");


nome.addEventListener("keyup", () => {
  if (validateUser(nome.value) !== true) {
    labelNome.setAttribute("style", "color: red");
  } else {
    labelNome.setAttribute("style", "color: green");
  }
});
email.addEventListener("keyup", () => {
  if (validateEmail(email.value) !== true) {
    labelEmail.setAttribute("style", "color: red");
  } else {
    labelEmail.setAttribute("style", "color: green");
  }
});
senha.addEventListener("keyup", () => {
  if (validatePassword(senha.value) !== true) {
    labelSenha.setAttribute("style", "color: red");
  } else {
    labelSenha.setAttribute("style", "color: green");
  }
});
confirmarSenha.addEventListener("keyup", () => {
  if (
    validatePassword(confirmarSenha.value) === validatePassword(senha.value)
  ) {
    labelConfirmarSenha.setAttribute("style", "color: green");
  } else {
    labelConfirmarSenha.setAttribute("style", "color: red");
  }
});
function validateEmail(email) {
  let valemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,3}$/g;

  return valemail.test(email);
}

function hasUpperCase(password) {
  if (/[A-Z]/.test(password)) {
    maiuscula.setAttribute("style", "color:green");
    return true;
  } else {
    maiuscula.setAttribute("style", "color:red");
    return false;
  }
}

function hasSpecialChar(password) {
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    especial.setAttribute("style", "color:green");
    return true;
  } else {
    especial.setAttribute("style", "color:red");
    return false;
  }
}

function hasNumber(password) {
  if (/[0-9]/.test(password)) {
    numero.setAttribute("style", "color:green");
    return true;
  } else {
    numero.setAttribute("style", "color:red");
    return false;
  }
}

function validatePassword(password) {
  if (hasUpperCase(password) & hasSpecialChar(password) & hasNumber(password)) {
    return true;
  } else {
    return false;
  }
}

function validateUser(User) {
  let valuser = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,8}[a-zA-Z0-9]$/g;

  return valuser.test(User);
}

async function cadastrar() {
  try {
    const user = {
      name: nome.value,
      email: email.value,
      password: senha.value,
    };
    const resp = await fetch(
      "https://traveler-yd39.onrender.com/users/cadastro",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    if (resp.status === 201) {
      alert('Usuário cadastrado com sucesso.')
      limparCampos();
      window.location.href = "/index.html";
    } else {
      console.log("erro");
      limparCampos();
    }
  } catch (error) {
    console.error(error.message);
  }
}
function limparCampos() {
  document.querySelector("#nome").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#senha").value = "";
  document.querySelector("#confirmarSenha").value = "";
}
