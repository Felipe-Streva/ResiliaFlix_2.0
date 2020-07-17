class CepController{

    static newLocation(cep){
        //Cep in the right format
        cep = cep.split('-').join('').split('.').join('')

        let cepRequest = new XMLHttpRequest()

        cepRequest.open("GET", `https://viacep.com.br/ws/${cep}/json/`)

        cepRequest.addEventListener('load', ()=>{

            if(cepRequest.status != 200){
                let requestProblem = document.querySelector('#requestProblem')
                requestProblem.classList.remove('hidden')
                setTimeout(()=>{requestProblem.classList.add('hidden')}, 5000)
            } else {

                let locationJSON = JSON.parse(cepRequest.responseText)
                if(!(locationJSON.localidade === undefined)){
                    let locationModel = new CepModels(locationJSON.localidade, locationJSON.logradouro, 
                        locationJSON.bairro, locationJSON.uf)

                    CepView.completeLocation(locationModel.location)
                
                } else {
                    let invalidCep = document.querySelector('#invalidCep')
                    invalidCep.classList.remove('hidden')
                    setTimeout(()=>{invalidCep.classList.add('hidden')}, 5000)
                    cepInput.value = ""
                }
                
            }


        })

        cepRequest.send()

    }
}