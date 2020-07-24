class ModelInfos{
    constructor(title, year, runtime, genre, director, actors, plot, poster, tomatoes, imdb, production, type){
        this._title = title;
        this._year = year;
        this._runtime = runtime;
        this._genre = genre;
        this._director = director;
        this._actors = actors;
        this._plot = plot;
        this._poster = poster;
        this._tomatoes = tomatoes;
        this._imdb = imdb;
        this._production = production;
        this._type = type;
    }

    get infos(){
        let infos = {
            title: this._title,
            year: this._year,
            runtime: this._runtime,
            genre: this._genre,
            director: this._director,
            actors: this._actors,
            plot: this._plot,
            poster: this._poster,
            tomatoes: this._tomatoes,
            imdb: this._imdb,
            production: this._production,
            type: this._type
        }
        return infos
    }
}

