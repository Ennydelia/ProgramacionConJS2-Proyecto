/* Importacion de la URL */
import { API_URL, RES_PER_PAGE } from './config';
import { getJSON } from './helpers';


const state = {
    recipe: {},
    search :{
      query: '', 
      results: [],
      page: 1, 
      resultsPerPage: RES_PER_PAGE,
    }
};
export { state };
  
// Función asíncrona loadRecipe para obtener la receta de la API
const loadRecipe = async (id) => {
    try {
      /* Declaracion del res */
      /* const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data = await res.json(); */

      const url = `${API_URL}/${id}`;
      // const data = await res.json();
      const data = await getJSON(url);
  
      // Validar el estado de la url
      /* if (!res.ok) {
        throw new Error('Error al obtener la receta');
      } */
      
      // Destructuracion de la informacion
      const { recipe } = data.data;
      // console.log('Recipe:', recipe);
      state.recipe = recipe;
      // console.log('State:', state);
    } catch (err) {
      // Enviar Error
      // console.log(`${err.message} 💥💥💥💥`);
      throw err;
    }
};

// Funcion en la cual realiza la busqueda con el query obtenido de config.js
const loadSearchResults = async (query) => {
  try {
      const url = `${API_URL}/?search=${query}`;
      const data = await getJSON(url);

      state.search.query = query;

      state.search.results = data.data.recipes.map((rec) => ({
      // const recipes = data.data.recipes.map((rec) => ({
          id: rec.id,
          title: rec.title,
          publisher: rec.publisher,
          image: rec.image_url,
      }));

      return state.search.results;
  } catch (err) {
      throw err;
  }
};

const getSearchResultsPage = (page = state.search.page) => {
  state.search.page = page;

  // variables de inicio y fin de la paginas 
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

// Llamar la funcion con Pizza como ejemplo
// loadSearchResults('pizza')
// .then((results) => console.log('Search Results:', results))
// .catch((error) => console.error('Error:', error));
  
export {loadRecipe, loadSearchResults, getSearchResultsPage };