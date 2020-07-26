class InfoThriller{
   
    static info(){
        //imdbID poster list
        let imdbIDPoster= ["tt0382625", "tt6751668", "tt6857112", "tt11390036"];

        //Image poster html
        let imagePoster = document.querySelectorAll("#imgPoster"); 

        //Modal html
        let modalBody = document.querySelector("#modalBody");
        let modalTitle = document.querySelector("#modalTitle");

        //Click event and imdb capture of the clicked poster
        for(let i = 0; i < imagePoster.length; i++){
            imagePoster[i].onclick = function() {
                let requisicao = new XMLHttpRequest();
                requisicao.open("GET", `https://www.omdbapi.com/?i=${imdbIDPoster[i]}&apikey=f2a7ff8a`, false);
                
                requisicao.addEventListener("load", () => {
                    let info = JSON.parse(requisicao.responseText);

                    let rottenTomatoes = "-"
                    for(let i = 0; i<info.Ratings.length;i++){
                        if(info.Ratings[i].Source=="Rotten Tomatoes"){
                            rottenTomatoes = info.Ratings[i].Value
                        }
                    }

                    //Save the fetched data within an object instantiated by the user model
                    let infoModel = new ModelInfos(info.Title, info.Year, 
                        info.Runtime, info.Genre, info.Director, info.Actors,
                        info.Plot, info.Poster, rottenTomatoes, info.imdbRating,
                        info.Production,  info.Type
                    );

                    //Show in view
                    modalBody.innerHTML = ViewInfos.template(infoModel.infos);
                    modalTitle.innerHTML = info.Title;
                })
                requisicao.send();
            };
        }
    }
}
InfoThriller.info();
