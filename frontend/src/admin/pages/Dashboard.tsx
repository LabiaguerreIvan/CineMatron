import React from 'react';
import AdminNavbar from '../components/AdminNavbar';

const Dashboard: React.FC = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold">Panel de Administrador</h1>
                <p>Bienvenido al panel. Desde aquí puedes gestionar el sistema.</p>
            </div>
        </div>
    );
};

export default Dashboard;
