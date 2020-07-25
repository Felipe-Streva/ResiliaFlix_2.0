class ModalController{

    static newInfos(imdbID){
        let request = new XMLHttpRequest()
        request.open("GET",`https://www.omdbapi.com/?i=${imdbID}&apikey=9a29db87`)

        request.addEventListener('load', ()=>{
            if(request.status != 200){
                throw "request error"
            } else {
                
                let resultJSON = JSON.parse(request.responseText)
                let modalTitle = document.querySelector("#ModalScrollableTitle")
                let modalTemplate = document.querySelector("#template")

                let rottenTomatoes = '-'

                for(let i = 0; i<resultJSON.Ratings.length;i++){
                    if(resultJSON.Ratings[i].Source=="Rotten Tomatoes"){
                        rottenTomatoes = resultJSON.Ratings[i].Value
                    }
                }
                    
                let modalSearch = new ModelInfos(resultJSON.Title, resultJSON.Year, 
                    resultJSON.Runtime, resultJSON.Genre, resultJSON.Director, resultJSON.Actors, resultJSON.Plot,
                    resultJSON.Poster, rottenTomatoes, resultJSON.imdbRating, resultJSON.Production, resultJSON.Type)
        
                modalTemplate.innerHTML = ModalView.template(modalSearch.infos)
                modalTitle.innerHTML = ModalView.title(modalSearch.infos)

                
            }


        })

        request.send()
    
    }
}