import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import { Container, Typography } from '@mui/material';
import Footer from '../../components/Footer';
import ScreeningForm from '../components/ScreeningForm';

const ManageScreenings: React.FC = () => {
    return (
        // Estilos principales de estructura
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            {/* Componete de la barra de navegación */}
            <AdminNavbar />

            {/* Contenedor principal */}
            <Container sx={{ flexGrow: 1, py: 4 }}>

                <Typography variant="h3" gutterBottom>
                    Gestión de Proyecciones
                </Typography>

                {/* Componente del formulario de proyecciones */}
                <ScreeningForm onSubmit={function (_screening: any): void {
                    throw new Error('Function not implemented.');
                } } />

            </Container>

            {/* Componente del Footer */}
            <Footer />
        </div>
    );
};

export default ManageScreenings;
