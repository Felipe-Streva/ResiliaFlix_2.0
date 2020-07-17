let cep = document.querySelector('#inputCEP')
cep.addEventListener('keyup', (event)=>{
    if(!(event.keyCode==8 || event.keyCode==46)){
        if(event.target.value.length==5){
            event.target.value += "-"
        }
    }
})