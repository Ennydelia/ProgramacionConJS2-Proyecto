import icons from '../../img/icons.svg';
import View from './View';
import { Fraction } from 'fractional';

class RecipeView extends View{
    _parentElement;
    _data;
    _errorMessage = 'We could not find that recipe. Please try another one!';
    _successMessage = 'Recipe successfully loaded!';
  
    constructor(parentElement) {
      super(parentElement);
      this._parentElement = document.querySelector(parentElement);
    }
  
    render(data) {
      this._data = data;
      const markup = this._generateMarkup();
      this._parentElement.innerHTML = markup;
    }

    addHandlerRender(handler) {
      ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, event => handler(event)));
    }
  
    /* Se copia el HTML que tenemos en Controller JS, ya que es nuestra parte de la vista */
    /* Debido al siguiente error: Cannot read properties of undefined (reading 'map') se genera una validacion del MAP */
    _generateMarkup() {
      return `<figure class="recipe__fig">
        <img src="${this._data.image_url}" alt="Tomato" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="../img/icons.svg#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cooking_time}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
              <use href="${icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
              <use href="${icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="${icons}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>
      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
        ${this._data.ingredients ? this._data.ingredients.map(ing => {
          /* Se agrega la funcion para obtener la fraccion de la cantidad */
            const quantity = ing.quantity ? new Fraction(ing.quantity).toString() : '';
            return `
          <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${icons}icon-check"></use>
            </svg>
            <div class="recipe__quantity">${quantity}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${ing.unit}</span>
              ${ing.description}
            </div>
          </li>
          `;
        }).join('') : ''}      
        </ul>
      </div>
      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a class="btn--small recipe__btn" href="${this._data.source_url}" target="_blank">
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>`;
    }
  
    _clear() {
      this._parentElement.innerHTML = '';
    }

    renderSpinner() {
      const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
      `;
      this._parentElement.innerHTML = '';
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderError(message = this._errorMessage) {
      this._clear();
      
      const markup = `
        <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
      `;
      
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderMessage(message = this._message) {
      this._clear();
  
      const markup = `
        <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
      `;
  
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
  }
  
/* Exportacion de la clase RecipeView */
export default new RecipeView('.recipe');