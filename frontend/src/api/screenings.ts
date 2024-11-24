import axiosClient from './axiosClient';

// Obtiene todas las proyecciones (movie screenings) desde el backend
export const getScreenings = () => axiosClient.get('/movie-screenings');

// Obtiene los detalles de una proyección específica usando su ID
export const getScreeningById = (id: number) =>
    axiosClient.get(`/movie-screenings/${id}`);

// Crea una nueva proyección enviando datos al backend
export const createScreening = (data: object) =>
    axiosClient.post('/movie-screenings', data);

// Elimina una proyección específica usando su ID
export const deleteScreening = (id: number) =>
    axiosClient.delete(`/movie-screenings/${id}`);
