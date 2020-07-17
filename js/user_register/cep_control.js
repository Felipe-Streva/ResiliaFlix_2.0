let cep = document.querySelector('#inputCEP')
cep.addEventListener('keyup', (event)=>{
    if(!(event.key=='Backspace' || event.key=='Delete')){
        if(event.target.value.length==5){
            event.target.value += "-"
        }
    }
})