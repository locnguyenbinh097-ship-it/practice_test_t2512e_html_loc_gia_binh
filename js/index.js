document.addEventListener('DOMContentLoaded', function(){
    let searchInput:Document.keyword =document.form['search-form'][keyword];
    searchInput.addEventListener('keydown', function(e: ): {
        if(e.kay == 'enter'){
            e.preventDefault();
            //neu khong co gia tri
        alert(searchInput.value);
    }
    })
})