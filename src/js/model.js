/* Importacion de la URL */
import { API_URL } from './config';
import { getJSON } from './helpers';


const state = {
    recipe: {},
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
      // Envía a una alerta el error
      // console.log(`${err.message} 💥💥💥💥`);
      throw err;
    }
};

export {loadRecipe };
  