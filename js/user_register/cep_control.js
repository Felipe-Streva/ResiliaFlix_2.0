let cep = document.querySelector('#inputCEP')
cep.addEventListener('keyup', (event)=>{
    if(!(event.code=='Backspace' || event.code=='Delete')){
        if(event.target.value.length==5){
            event.target.value += "-"
        }
    }
})