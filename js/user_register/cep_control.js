let cepInput = document.querySelector('#inputCEP')
cepInput.addEventListener('keyup', (event)=>{
    if(!(event.key=='Backspace' || event.key=='Delete')){
        if(event.target.value.length==2){
            event.target.value += "."
        }else if(event.target.value.length==6){
            event.target.value += "-"
        }
    }
})//Formating CEP

cepInput.addEventListener('keyup', (event)=>{
    if(event.target.value.length==10){
        CepController.newLocation(event.target.value)
    }
})// Call Controller to find the location