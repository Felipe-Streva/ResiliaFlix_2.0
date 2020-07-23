class SearchModels{
    constructor(title, year, imdbID, poster){
        this._title = title;
        this._year = year;
        this._imdbID = imdbID;
        this._poster = poster;
    }

    get search(){
        return {
            title: this._title,
            year: this._year,
            imdbID: this._imdbID,
            poster: this._poster
        }
    }
}