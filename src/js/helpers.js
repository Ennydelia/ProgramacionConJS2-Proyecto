import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const getJSON = async (url) => {
  try {
    // const res = await fetch(url);
    
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    
    const data = await res.json();

    if (!res.ok) {
      throw new Error('Error al obtener los datos');
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export { getJSON };
