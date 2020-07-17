class CepController{

    static newLocation(cep){
        //Cep in the right format
        cep = cep.split('-').join('').split('.').join('')

        let cepRequest = new XMLHttpRequest()

        cepRequest.open("GET", `https://viacep.com.br/ws/${cep}/json/`)

        cepRequest.addEventListener('load', ()=>{

            if(cepRequest.status != 200){
                throw "Fail request"
            } else {

                let locationJSON = JSON.parse(cepRequest.responseText)
                console.log(locationJSON)
                let locationModel = new CepModels(locationJSON.localidade, locationJSON.logradouro, 
                    locationJSON.bairro, locationJSON.uf)

                console.log(locationModel.location)
                CepView.completeLocation(locationModel.location)

            }


        })

        cepRequest.send()

    }
}