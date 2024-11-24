import { getScreenings, getScreeningById } from '../api/screenings';

// Función para obtener todas las proyecciones procesadas desde la API
export const fetchScreenings = async () => {
    const response = await getScreenings(); // Llama al endpoint para obtener proyecciones
    return response.data; // Retorna los datos de las proyecciones
};

// Función para obtener los detalles de una proyección específica
export const fetchScreeningDetails = async (id: number) => {
    const response = await getScreeningById(id); // Llama al endpoint para obtener una proyección
    return response.data; // Retorna los detalles de la proyección
};
