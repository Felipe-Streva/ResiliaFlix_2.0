let input = document.querySelector('#textInput')


input.addEventListener('keyup',function(event){
    if(event.keyCode==13){
        SearchController.newSearch(event.target.value.split(" ").join("+"))
    }
})
