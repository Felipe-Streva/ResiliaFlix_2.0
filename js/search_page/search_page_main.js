let input = document.querySelector('#textInput')


input.addEventListener('keyup',function(event){
    if(event.keyCode==13){
        SearchController.newSearch(event.target.value.split(" ").join("+"))
    }
})

function closeModal(){
    let modal = document.querySelector('#ModalScrollable')
    modal.style.display = 'none'
    //let modalBG = document.querySelector('.modal-backdrop')
    //modalBG.style.backgroundColor = 'rgb(0,0,0,0)'
    //modalBG.style.zIndex = '-1'
}
