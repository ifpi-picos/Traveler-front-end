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


  async function init () {
    const inputEmail = document.querySelector("#EmailLogin")
    const senhalogin = document.querySelector("#senhalogin")
    const submitBuutton = document.querySelector("#button")
    
    const errorHandler = () =>{
        submitBuutton.classList.remove("success")
        submitBuutton.classList.add("error")
        submitBuutton.textContent = "error"
    }

    const successHandler = ()=>{
        submitBuutton.classList.remove("error")
        submitBuutton.classList.add("success")
        submitBuutton.textContent = "sent!"
    }
    if(submitBuutton){
            submitBuutton.addEventListener("click",async (event)=>{
                submitBuutton.textContent = "...Loading"
                // event.preventDefault()
               
                await fetch("https://traveler-yd39.onrender.com/authentication/login",{
                    method: 'POST',
                    headers: {
                        'content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        email: inputEmail.value,
                        password:senhalogin.value
                    })
                    
                }).then((response) => {
                    if(response.status!== 201){
                        console.log(response)
                        return  errorHandler();
                    }
                    successHandler()
                    window.location = "/pages/homepage.html"
                }).catch(()=>{
                    errorHandler();
                })
                
            })
    }
}
window.onload = init