class SearchViews{

    static template(infos){
        return `<img src="${infos.poster}" class="img-thumbnail col-12 col-md-3 shadow p-3 mb-5 bg-white rounded movie-image" onclick="ModalController.newInfos('${infos.imdbID}')" data-toggle="modal" data-target="#ModalScrollable">`
    }
}