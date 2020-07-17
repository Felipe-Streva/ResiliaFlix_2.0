class CepView{
    static completeLocation(location){
        let inputCity = document.querySelector('#inputCity')
        inputCity.value = location.city

        let inputAddress = document.querySelector('#inputAddress')
        inputAddress.value = location.address

        let inputDistrict = document.querySelector('#inputDistrict')
        inputDistrict.value = location.district

        let inputState = document.querySelector('#inputState')
        inputState.value = location.state
    }
}