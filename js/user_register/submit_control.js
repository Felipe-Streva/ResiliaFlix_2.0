let submit = document.querySelector('#submitButton')


function validationPassword(){
    let password = document.querySelector('#inputPassword4')
    let confirmPassword = document.querySelector('#inputConfirmPassword4')

    if(password.value === confirmPassword.value){
        
        return true
    } else {
        let passwordFail = document.querySelector('#passwordFail')
        passwordFail.classList.remove('hidden')
        setTimeout(()=>{passwordFail.classList.add('hidden')}, 3000)
        password.focus()
    }

    return false
}
let form = document.querySelector('#form-register')
form.addEventListener('submit', function(event){
    event.preventDefault()
    event.stopPropagation()
    let sucessRegister = document.querySelector('#sucessRegister')
    sucessRegister.classList.remove('hidden')
    setTimeout(()=>{sucessRegister.classList.add('hidden')}, 2000)
    setTimeout(()=>{window.location.href = 'home.html'}, 2000)
})