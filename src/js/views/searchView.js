class SearchView{
    _parentEl;

    constructor(parentEl){
        this._parentEl = document.querySelector('.search');

        this._parentEl.addEventListener('click', this._handleClick.bind(this));
    }

    _clearInput(){
        this._parentEl.querySelector('.search__field').value = '';
    }

    getQuery() {
        const query = this._parentEl.querySelector('.search__field').value;

        this._clearInput();
        
        return query;
        
    }


    _handleClick(event) {
        // console.log('Click en el elemento de búsqueda:', event.target);
    }

    addHandlerSearch(handler) {
        this._parentEl.addEventListener('submit', function (e) {
            e.preventDefault(); 
            handler(); 
        });
    }
}

export default new SearchView();