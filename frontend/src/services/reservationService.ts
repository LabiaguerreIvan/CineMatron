import { getReservations, createReservation } from '../api/reservations';

// Función para obtener todas las reservas procesadas desde la API
export const fetchReservations = async () => {
    const response = await getReservations(); // Llama al endpoint para obtener reservas
    return response.data; // Retorna los datos de las reservas
};

// Función para crear una nueva reserva en la API
export const addReservation = async (data: object) => {
    const response = await createReservation(data); // Llama al endpoint para crear una reserva
    return response.data; // Retorna la reserva creada
};
