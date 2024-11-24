import { getMovies, getMovieById } from '../api/movies';

// Función para obtener todas las películas procesadas desde la API
export const fetchMovies = async () => {
    const response = await getMovies(); // Llama al endpoint para obtener películas
    return response.data; // Retorna los datos obtenidos
};

// Función para obtener los detalles de una película específica
export const fetchMovieDetails = async (id: number) => {
    const response = await getMovieById(id); // Llama al endpoint para obtener una película
    return response.data; // Retorna los detalles de la película
};

