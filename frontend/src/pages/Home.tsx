// Página de inicio de la aplicación

// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/movieService';
import { Movie } from '../types';

const Home: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const moviesData = await fetchMovies();
                setMovies(moviesData); // Guardamos las películas en el estado
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false); // Finalizamos el estado de carga
            }
        };

        getMovies();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Películas en Cartelera</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>{movie.description}</p>
                        <p>Género: {movie.genre}</p>
                        <p>Duración: {movie.duration} minutos</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;

