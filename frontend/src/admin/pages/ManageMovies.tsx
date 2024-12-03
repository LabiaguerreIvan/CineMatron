import React, { useState } from "react";
import MovieForm from "../components/MovieForm";
import MovieList from "../components/MovieList";
import AdminNavbar from "../components/AdminNavbar";
import { Container, Typography } from "@mui/material";
import Footer from "../../components/Footer";

const ManageMovies: React.FC = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: "Inception", genre: "Sci-Fi", duration: 148, releaseDate: "2010-07-16" },
        { id: 2, title: "The Dark Knight", genre: "Action", duration: 152, releaseDate: "2008-07-18" },
    ]); // Películas iniciales, puedes reemplazar con datos de API.

    const [editingMovie, setEditingMovie] = useState<any | null>(null); // Controla la película que se está editando.
    const [isFormVisible, setFormVisible] = useState(false); // Controla la visibilidad del formulario.

    // Maneja el guardado de una película.
    const handleSaveMovie = (newMovie: any) => {
        if (editingMovie) {
            // Actualiza una película existente.
            setMovies((prev) =>
                prev.map((movie) =>
                    movie.id === editingMovie.id ? { ...movie, ...newMovie } : movie
                )
            );
        } else {
            // Añade una nueva película.
            setMovies((prev) => [...prev, { ...newMovie, id: prev.length + 1 }]);
        }
        setEditingMovie(null);
        setFormVisible(false); // Oculta el formulario tras guardar.
    };

    // Maneja la edición de una película.
    const handleEditMovie = (id: number) => {
        const movieToEdit = movies.find((movie) => movie.id === id);
        if (movieToEdit) {
            setEditingMovie(movieToEdit);
            setFormVisible(true); // Muestra el formulario para editar.
        }
    };

    // Maneja la eliminación de una película.
    const handleDeleteMovie = (id: number) => {
        setMovies((prev) => prev.filter((movie) => movie.id !== id));
    };

    // Muestra el formulario para añadir una película.
    const handleAddMovie = () => {
        setEditingMovie(null);
        setFormVisible(true); // Muestra el formulario vacío para añadir.
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <AdminNavbar />
            <Container sx={{ flexGrow: 1, py: 4 }}>
                <Typography variant="h4" sx={{ mb: 2 }} gutterBottom>
                    Gestión de Películas
                </Typography>
                {isFormVisible ? (
                    <MovieForm
                        movie={editingMovie || null} // Si hay una película en edición, pasa los datos; si no, pasa null.
                        onSave={handleSaveMovie}
                        onClose={() => setFormVisible(false)} // Cierra el formulario si se cancela.
                    />
                ) : (
                    <MovieList
                        movies={movies}
                        onEdit={handleEditMovie}
                        onDelete={handleDeleteMovie}
                        onAddMovie={() => setFormVisible(true)} // Muestra el formulario para añadir una nueva película.
                    />
                )}
            </Container>
            <Footer />
        </div>
    );
};

export default ManageMovies;
