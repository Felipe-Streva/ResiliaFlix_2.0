class SearchController{

    static newSearch(input){
        let request = new XMLHttpRequest()
        request.open("GET",`https://www.omdbapi.com/?apikey=9a29db87&s=${input}&page=1`)

        request.addEventListener('load', ()=>{
            if(request.status != 200){
                throw "request error"
            } else {
                
                let resultJSON = JSON.parse(request.responseText)
                if(resultJSON.Response == "False"){
                    let errorSearch = document.querySelector('#errorSearch')
                    errorSearch.textContent = `${resultJSON.Error}`
                    errorSearch.classList.remove('hidden')
                    setTimeout(()=>{errorSearch.classList.add('hidden')},3000)
                } else {
                    let picture = document.querySelector('#picture')

                    
                    picture.innerHTML = ''
                    
                    for(let i = 0; i< resultJSON.Search.length; i++){
                        if(resultJSON.Search[i].Poster=='N/A')continue
                        let SearchModel = new SearchModels(resultJSON.Search[i].Title, resultJSON.Search[i].Year, 
                            resultJSON.Search[i].imdbID, resultJSON.Search[i].Poster)

                            
                        picture.innerHTML += SearchViews.template(SearchModel.search)
                    }



                }


            }
        })

        request.send()
    }
}