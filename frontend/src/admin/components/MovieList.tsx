import React, { useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toolbar } from "primereact/toolbar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
import MovieForm from "./MovieForm";

interface Movie {
    id: number;
    title: string;
    genre: string;
    duration: number;
    releaseDate: string;
}

interface MovieListProps {
    movies: Movie[];
    onEdit: (movie: Movie) => void;
    onDelete: (id: number) => void;
    onAddMovie: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onEdit, onDelete, onAddMovie }) => {
    const [globalFilter, setGlobalFilter] = useState<string | null>(null);
    const [selectedMovies, setSelectedMovies] = useState<Movie[]>([]);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [addDialog, setAddDialog] = useState(false);
    const [editDialog, setEditDialog] = useState(false); // Nuevo estado para el modal de edición
    const [movieToDelete, setMovieToDelete] = useState<Movie | null>(null);
    const [movieToEdit, setMovieToEdit] = useState<Movie | null>(null); // Película seleccionada para editar
    const toast = useRef<Toast>(null);

    const confirmDelete = (movie: Movie) => {
        setMovieToDelete(movie);
        setDeleteDialog(true);
    };

    const handleDelete = () => {
        if (movieToDelete) {
            onDelete(movieToDelete.id);
            toast.current?.show({
                severity: "success",
                summary: "Éxito",
                detail: `Película "${movieToDelete.title}" eliminada`,
                life: 3000,
            });
        }
        setDeleteDialog(false);
    };

    const handleAddMovie = (movie: Omit<Movie, "id">) => {
        const newMovie = { ...movie, id: Date.now() };
        onAddMovie(newMovie);
        toast.current?.show({
            severity: "success",
            summary: "Éxito",
            detail: `Película "${movie.title}" añadida`,
            life: 3000,
        });
        setAddDialog(false);
    };

    const handleEditMovie = (movie: Movie) => {
        onEdit(movie);
        setEditDialog(false);
        toast.current?.show({
            severity: "success",
            summary: "Éxito",
            detail: `Película "${movie.title}" actualizada`,
            life: 3000,
        });
    };

    const openEditDialog = (movie: Movie) => {
        setMovieToEdit(movie); // Establece la película seleccionada
        setEditDialog(true); // Abre el modal de edición
    };

    const toolbarTemplate = () => (
        <React.Fragment>
            <Button
                label="Añadir Película"
                icon="pi pi-plus"
                style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "0.5rem",
                }}
                onClick={() => setAddDialog(true)}
            />

                        {/* Botón para eliminar las películas seleccionadas */}
                        <Button
                        label="Eliminar Seleccionadas"
                        icon="pi pi-trash"
                        style={{
                            backgroundColor: "#F44336",
                            color: "white",
                            border: "none",
                            marginLeft: "0.5rem",
                            borderRadius: "0.5rem",
                        }}
                        disabled={!selectedMovies.length} // Desactiva el botón si no hay películas seleccionadas
                        onClick={() => setDeleteDialog(true)} // Abre el modal de confirmación para las seleccionadas
                    />
        </React.Fragment>
    );

    const actionTemplate = (rowData: Movie) => (
        <React.Fragment>
            <Button
                icon="pi pi-pencil"
                style={{
                    backgroundColor: "#00BCD4",
                    color: "white",
                    border: "none",
                    marginRight: "0.5rem",
                    borderRadius: "0.5rem",
                }}
                onClick={() => openEditDialog(rowData)} // Abre el modal de edición
            />
            <Button
                icon="pi pi-trash"
                style={{
                    backgroundColor: "#F44336",
                    color: "white",
                    border: "none",
                    borderRadius: "0.5rem",
                }}
                onClick={() => confirmDelete(rowData)}
            />
        </React.Fragment>
    );

    const headerTemplate = (
        <div className="flex justify-content-between align-items-center">
            <h4 className="m-0">Listado de Películas</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                    type="search"
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)}
                    placeholder="Buscar..."
                />
            </span>
        </div>
    );

    const deleteDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={() => setDeleteDialog(false)} />
            <Button
                label="Sí"
                icon="pi pi-check"
                style={{ backgroundColor: "#F44336", color: "white", border: "none" }}
                onClick={handleDelete}
            />
        </React.Fragment>
    );

    return (
        <div>
            <Toast ref={toast} />
            <Toolbar className="mb-4" style={{ borderRadius: "0.5rem" }} left={toolbarTemplate}></Toolbar>
            <DataTable
                value={movies}
                selection={selectedMovies}
                onSelectionChange={(e) => setSelectedMovies(e.value)}
                dataKey="id"
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25]}
                globalFilter={globalFilter}
                header={headerTemplate}
                currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} películas"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                paginatorClassName="paginator-custom"
                responsiveLayout="scroll"
            >
                <Column selectionMode="multiple" headerStyle={{ width: "3rem" }}></Column>
                <Column field="title" header="Título" sortable></Column>
                <Column field="genre" header="Género" sortable></Column>
                <Column field="duration" header="Duración" body={(row) => `${row.duration} min`} sortable></Column>
                <Column field="releaseDate" header="Fecha de Estreno" sortable></Column>
                <Column body={actionTemplate} header="Acciones"></Column>
            </DataTable>

            {/* Modal para añadir película */}
            <Dialog visible={addDialog} style={{ width: "450px" }} onHide={() => setAddDialog(false)}>
                <MovieForm onSubmit={handleAddMovie} onClose={() => setAddDialog(false)} />
            </Dialog>

            {/* Modal para editar película */}
            <Dialog visible={editDialog} style={{ width: "450px" }} onHide={() => setEditDialog(false)}>
                <MovieForm movie={movieToEdit} onSubmit={handleEditMovie} onClose={() => setEditDialog(false)} />
            </Dialog>

            {/* Modal para confirmar eliminación */}
            <Dialog
                visible={deleteDialog}
                style={{ width: "450px" }}
                header="Confirmar"
                modal
                footer={deleteDialogFooter}
                onHide={() => setDeleteDialog(false)}
            >
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: "2rem" }} />
                    {movieToDelete && (
                        <span>
                            ¿Estás seguro de que quieres eliminar la película <b>{movieToDelete.title}</b>?
                        </span>
                    )}
                </div>
            </Dialog>
        </div>
    );
};

export default MovieList;
