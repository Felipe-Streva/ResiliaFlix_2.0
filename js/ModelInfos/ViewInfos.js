class ViewInfos{
    static template(infos){
        return `<img src=${infos.poster} alt="Poster" class="img-poster">
        <br></br>
        <p>
            ${infos.year}   ${infos.runtime}  ${infos.type}<br>
            ${infos.genre}<br><br>
            ${infos.plot}<br><br>
            Director: ${infos.director}<br>
            Actors: ${infos.actors}<br><br>
            Production: ${infos.production}<br>
            Rotten Tomatoes: ${infos.tomatoes}       IMDB: ${infos.imdb}
        </p>  `;
    }
}
