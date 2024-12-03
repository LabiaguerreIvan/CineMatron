import React from 'react';
import { Container, Typography } from '@mui/material';
import AdminNavbar from '../components/AdminNavbar'; // Asegúrate de que la ruta sea correcta
import Footer from '../../components/Footer'; // Asegúrate de que la ruta sea correcta

const AdminDashboard: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#e3f2fd' }}>
            {/* Navbar */}
            <AdminNavbar />

            {/* Contenido principal */}
            <Container sx={{ flexGrow: 1, py: 4 }}>
                <Typography variant="h3" gutterBottom>
                    Panel de Administrador
                </Typography>
                <Typography variant="body1">
                    Bienvenido al panel. Desde aquí puedes gestionar el sistema.
                </Typography>
            </Container>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AdminDashboard;
