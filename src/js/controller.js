/* Importaciones */
import recipeView from './views/RecipeView';
import * as model from './model';

async function controlRecipes(){
  try{
     // Declara una variable id y asígnale el método window.location.hash
    const id = window.location.hash.slice(1);

    // Antes de obtener, muestra la imagen de cargando
    recipeView.renderSpinner();


    await model.loadRecipe(id);

    /* Se hace el cambio por la vista */
    recipeView.render(model.state.recipe);

  } catch (error){
    // alert('Error: ' + error.message);
    recipeView.renderError(error.message);
  }
}

// const events = ['hashchange', 'load'];

// metodoForeach para obtener los eventos 
/* events.forEach(ev => {
  window.addEventListener(ev, () => controlRecipes(ev));
});
 */

function init() {
  recipeView.addHandlerRender(controlRecipes);
}

// Instancia addHandlerRender y pasa controlRecipes como parámetro
init();




































/* AVANCE 2 */


/* /* Importaciones 
import recipeView from './views/RecipeView';
import * as model from './model';

// const recipeContainer = document.querySelector('.recipe');

/* Se elimina el timeout para pasarlo a helpers */
/* const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
}; */

// Se elimina el renderspinner del controller.js y se pasa al recipeview
/* function renderSpinner(parentEl) {
  const markup = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
} 

async function controlRecipes(){
  try{
     // Declara una variable id y asígnale el método window.location.hash
    const id = window.location.hash.slice(1);

    // Imprime en la consola el resultado
    // console.log('ID de la receta:', id);

    // Antes de obtener, muestra la imagen de cargando
    recipeView.renderSpinner();

    /* // Obtiene la informacion de una receta con sus ingredientes a traves de un Array
    // const resp = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
    // Modificacion de la URL de manera que obtenga el ID que se toma del index.html
    const resp = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);

    // Mensaje de Error en caso de que la pagina sea igual a falso
    if (!resp.ok) {
      throw new Error('Error al obtener la receta');
    } 

    await model.loadRecipe(id);
    //const { recipe } = model.state;

    /* Se hace el cambio por la vista 
    recipeView.render(model.state.recipe);

    /* const data = await resp.json();
    const recipeData = data.data.recipe;

    
    // Valida que obtenga informacion para crear la constante para los datos de la receta
    if (data.data) {
      const { id, title, publisher, source_url, image_url, servings, cooking_time, ingredients } = recipeData;

      const recipe = {
        id,
        title,
        publisher,
        sourceUrl: source_url,  
        image: image_url,
        servings,
        cookTime: cooking_time,
        ingredients,
      }; */

      // Parte HTML, donde muestra los datos de la receta y a su vez hace los cambios directos en el HTML
      /* Debido al siguiente error: Cannot read properties of undefined (reading 'map') se genera una validacion del MAP */
      /* Se desactiva la parte HTML, ya que se encuentra en el RecipeView */
      /* const markup = ` <figure class="recipe__fig">
        <img src="${recipe.image_url}" alt="Tomato" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="../img/icons.svg#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${recipe.cooking_time}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
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
        ${recipe.ingredients ? recipe.ingredients.map(ing => {
            return `
          <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${icons}icon-check"></use>
            </svg>
            <div class="recipe__quantity">${ing.quantity}</div>
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
          <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a class="btn--small recipe__btn" href="${recipe.source_url}" target="_blank">
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>`;
 */
      // Imprimir en la consola el contenido
     /*  recipeContainer.innerHTML = '';
      recipeContainer.insertAdjacentHTML('afterbegin', markup); */
    /* } else {
      throw new Error('La estructura de los datos no es la esperada.');
    } 
  } catch (error){
    alert('Error: ' + error.message);
  }
}

// evento 'hashchange' 
//window.addEventListener('hashchange', showRecipe);

// evento 'load' 
//window.addEventListener('load', showRecipe);
const events = ['hashchange', 'load'];

// metodoForeach para obtener los eventos 
events.forEach(ev => {
  window.addEventListener(ev, () => controlRecipes(ev));
}); */



























////////////////////////////////////////////////////////////AVANCE 1/////////////////////////////////////////////////////////////////////

// Importacion de Iconos 
/* import icons from '../img/icons.svg';
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
}; */

// Se toma la parte HTML del spinner que se encuentra comentado en el archivo index
// para crear la funcion render Spinner
/* function renderSpinner(parentEl) {
  const markup = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;

  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
} */

// Funcion asincronica ShowRecipe
/* async function showRecipe(){
  try{
    // Antes de subir toda la informacion, muestra la imagen de cargando
    renderSpinner(recipeContainer);
    // Const para obtener la API mediante el await
    // Si se obtiene mediante esta direccion realiza lo siguiente:
    // ¿Cuál es el contenido de resp?
    // Obtiene un status de para identificar si la pagina existe o detecta informacion de la misma
    // ¿Cuál es el contenido de data?
    // Obtiene la informacion de una receta con sus ingredientes a traves de un Array
    const resp = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');

    // ¿Qué sucede si le pasas esta URL a la función?
    // Obtiene un mensaje de error al obtener la receta, indicando que la pagina no existe o hay un error en el URL Error 400
    // const resp = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886zzz');

    // Mensaje de Error en caso de que la pagina sea igual a falso
    if (!resp.ok) {
      throw new Error('Error al obtener la receta');
    }

    const data = await resp.json();
    const recipeData = data.data.recipe;

    // Valida que obtenga informacion para crear la constante para los datos de la receta
    if (data.data) {
      const { id, title, publisher, source_url, image_url, servings, cooking_time, ingredients } = recipeData;

      const recipe = {
        id,
        title,
        publisher,
        sourceUrl: source_url,  
        image: image_url,
        servings,
        cookTime: cooking_time,
        ingredients,
      };

      // Parte HTML, donde muestra los datos de la receta y a su vez hace los cambios directos en el HTML
      const markup = ` <figure class="recipe__fig">
        <img src="${recipe.image}" alt="Tomato" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="../img/icons.svg#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
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
        ${recipe.ingredients.map(ing => {
            return `
          <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${icons}icon-check"></use>
            </svg>
            <div class="recipe__quantity">${ing.quantity}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${ing.unit}</span>
              ${ing.description}
            </div>
          </li>
          `;
          }).join('')}        
        </ul>
      </div>
      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a class="btn--small recipe__btn" href="${recipe.sourceUrl}" target="_blank">
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>`;

      // Imprimir en la consola el contenido
      recipeContainer.innerHTML = '';
      recipeContainer.insertAdjacentHTML('afterbegin', markup);
      // console.log('Contenido de la Receta: ', recipe);
      // console.log('Respuesta:', resp);
      // console.log('Datos:', data);
      // console.log('Recipe: ', recipe);
    } else {
      throw new Error('La estructura de los datos no es la esperada.');
    }
  } catch (error){
    alert('Error: ' + error.message);
  }
}

showRecipe(); */