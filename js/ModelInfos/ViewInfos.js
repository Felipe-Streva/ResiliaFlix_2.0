class ViewInfos{
    static template(infos){
        return `<img src=${infos.poster} alt="Poster" class="img-poster">
        <p class="mt-1">
            ${infos.year}   <span class="ml-3">${infos.runtime}</span>  <span class="ml-3">${infos.type}</span></p>
            <p class="text-center">${infos.genre}</p><br>
            <p class="text-center">${infos.plot}</p><br>
            <p class="text-center">Director: ${infos.director}</p>
            <p class="text-center">Actors: ${infos.actors}</p>
            <p class="text-center">Production: ${infos.production}</p>
            <p>Rotten Tomatoes: ${infos.tomatoes}<span class="ml-4">IMDB: ${infos.imdb}</span>
        </p>  `
    }
}
