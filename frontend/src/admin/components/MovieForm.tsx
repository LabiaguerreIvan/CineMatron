import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { Box } from "@mui/material";

interface Movie {
    title: string;
    genre: string;
    duration: number;
    releaseDate: string | Date;
}

interface MovieFormProps {
    movie?: Movie | null;
    onSubmit: (movie: Movie) => void;
    onClose: () => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ movie, onSubmit, onClose }) => {
    const genres = [
        { label: "Action", value: "Action" },
        { label: "Comedy", value: "Comedy" },
        { label: "Drama", value: "Drama" },
        { label: "Sci-Fi", value: "Sci-Fi" },
    ];

    const [formState, setFormState] = useState<Movie>({
        title: "",
        genre: "",
        duration: 0,
        releaseDate: "",
    });

    useEffect(() => {
        if (movie) {
            setFormState(movie);
        }
    }, [movie]);

    const handleChange = (field: keyof Movie, value: any) => {
        setFormState((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ ...formState, releaseDate: formState.releaseDate.toString() });
    };

    return (
        <div>
            <h2 className="text-xxl font-semibold text-gray-700 mb-5">
                {movie ? "Editar Película" : "Nueva Película"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Title */}
                <Box className="mb-3">
                    <label htmlFor="title" className="block text-md font-medium text-gray-700">Título</label>
                    <InputText type="text" placeholder="Ingrese el título de la película" id="title" value={formState.title} onChange={(e) => handleChange("title", e.target.value)} className="w-full  mt-1" style={{ borderRadius: "0.5rem" }} required />
                </Box>

                {/* Genre */}
                <Box className="mb-3">
                    <label htmlFor="genre" className="block text-md font-medium text-gray-700">Género</label>
                    <Dropdown id="genre" value={formState.genre} options={genres} onChange={(e) => handleChange("genre", e.value)} placeholder="Seleccione el género" className="w-full mt-1" style={{ borderRadius: "0.5rem" }} required />
                </Box>

                {/* Duration */}
                <Box className="mb-3">
                    <label htmlFor="duration" className="block  font-medium text-gray-700 mb-1"> Duración (minutos) </label>
                    <InputText id="duration" value={formState.duration} onChange={(e) => handleChange("duration", Number(e.target.value))} type="number" className="w-full mt-1" style={{ borderRadius: "0.5rem" }} required />
                </Box>

                {/* Release Date */}
                <Box className="mb-3">
                    <label htmlFor="releaseDate" className="block  font-medium text-gray-700 mb-1" > Fecha de Estreno </label>
                    <Calendar id="releaseDate" placeholder="Ingrese una fecha" value={new Date(formState.releaseDate)} onChange={(e) => handleChange("releaseDate", e.value)} dateFormat="yy-mm-dd" className="w-full mt-1" style={{ borderRadius: "0.5rem" }} required />
                </Box>

                {/* Buttons */}
                <Box>
                    <div className="flex justify-end space-x-2">
                        <Button label="Guardar" icon="pi pi-check" type="submit" className="p-button-success mr-1" style={{borderRadius:"0.5rem" }}/>
                        <Button label="Cancelar" icon="pi pi-times" type="button" onClick={onClose} className="p-button-secondary ml-1" style={{borderRadius:"0.5rem" }}/>
                    </div>
                </Box>
            </form>
        </div>
    );
};

export default MovieForm;
