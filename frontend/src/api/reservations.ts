import axiosClient from './axiosClient';

// Obtiene todas las reservas desde el backend
export const getReservations = () => axiosClient.get('/reservations');

// Obtiene los detalles de una reserva específica usando su ID
export const getReservationById = (id: number) =>
    axiosClient.get(`/reservations/${id}`);

// Crea una nueva reserva enviando datos al backend
export const createReservation = (data: object) =>
    axiosClient.post('/reservations', data);

// Elimina una reserva específica usando su ID
export const deleteReservation = (id: number) =>
    axiosClient.delete(`/reservations/${id}`);
