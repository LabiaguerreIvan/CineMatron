import axiosClient from './axiosClient';

// Obtiene todas las películas desde el backend
export const getMovies = () => axiosClient.get('/movies');

// Obtiene los detalles de una película específica usando su ID
export const getMovieById = (id: number) => axiosClient.get(`/movies/${id}`);

// Crea una nueva película enviando datos al backend
export const createMovie = (data: object) => axiosClient.post('/movies', data);

// Actualiza una película existente por su ID enviando datos al backend
export const updateMovie = (id: number, data: object) =>
    axiosClient.put(`/movies/${id}`, data);

// Elimina una película específica usando su ID
export const deleteMovie = (id: number) => axiosClient.delete(`/movies/${id}`);
