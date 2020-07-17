class CepModels{
    constructor(city, address, district, state){
        this._city = city;
        this._address = address;
        this._district = district;
        this._state = state;
    }

    get location(){
        let location = {
            city: this._city,
            address: this._address,
            district: this._district,
            state: this._state
        }
        return location
    }
}