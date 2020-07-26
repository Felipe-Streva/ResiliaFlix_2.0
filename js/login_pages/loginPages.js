
function validateEmail() {
    let email = document.querySelector("#exampleInputEmail1");
    let password = document.querySelector("#exampleInputPassword1");
     
    if(!(email.value == "" || password.value == ""))  { 
         let textOk = document.querySelector("#sucessRegister");
         textOk.classList.remove('hidden')
         setTimeout(()=>{textOk.classList.add('hidden')}, 2000)
         setTimeout(()=>{window.location.href = 'home.html'}, 2000)
         
     }
     return false;
 }