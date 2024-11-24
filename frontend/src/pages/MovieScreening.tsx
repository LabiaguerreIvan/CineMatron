// Página que muestra las funciones disponibles para una película en específico, incluyendo la sala y el horario de cada función.

import React, { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';
import { MovieScreening } from '../types';

interface Props {
    movieId: number;
}

const MovieScreeningList: React.FC<Props> = ({ movieId }) => {
    const [movieScreenings, setMovieScreenings] = useState<MovieScreening[]>([]);

    useEffect(() => {
        // Se actualiza la URL para reflejar la ruta del backend.
        axiosClient
            .get<MovieScreening[]>(`/movies/${movieId}/movie-screenings`)
            .then(response => setMovieScreenings(response.data))
            .catch(error => console.error('Error fetching movie screenings:', error));
    }, [movieId]);

    return (
        <div>
            <h2>Funciones Disponibles</h2>
            <ul>
                {movieScreenings.map((screening) => (
                    <li key={screening.id}>
                        Sala: {screening.roomId} - Hora: {screening.startTime} - {screening.endTime}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieScreeningList;
