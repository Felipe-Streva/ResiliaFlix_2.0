
function validateEmail() {
    let email = document.querySelector("#exampleInputEmail1");
    
     if(!(email.value == "" )) { 
         let textOk = document.querySelector("#sucessRegister");
         textOk.classList.remove('hidden')
         setTimeout(()=>{textOk.classList.add('hidden')}, 5000)
         
     }
     return false;
 }