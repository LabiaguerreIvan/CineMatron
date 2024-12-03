// Archivo principal donde se definen las rutas de la aplicación.
// Utiliza React Router para navegar entre las distintas páginas de usuarios y administradores.

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';  // Tema de PrimeReact
import 'primereact/resources/primereact.min.css';          // Estilos básicos de PrimeReact
import 'primeicons/primeicons.css';                        // Iconos de PrimeReact
import 'primeflex/primeflex.css';                          // Utilidades CSS

// Páginas y componentes para usuarios
// import Home from './pages/Home';
// import MovieList from './user/pages/MovieList';
// import MovieDetail from './user/pages/MovieDetail';

// Páginas y componentes para administradores
import AdminDashboard from './admin/pages/Dashboard';
import ManageMovies from './admin/pages/ManageMovies';
import ManageScreenings from './admin/pages/ManageScreenings';
import ManageReservations from './admin/pages/ManageReservations';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Rutas para usuarios */}
                {/* <Route path="/" element={<Home />} />
                <Route path="/movies" element={<MovieList />} />
                <Route path="/movies/:id" element={<MovieDetail />} /> */}

                {/* Rutas para administradores */}
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/movies" element={<ManageMovies />} />
                <Route path="/admin/screenings" element={<ManageScreenings />} />
                <Route path="/admin/reservations" element={<ManageReservations />} />
            </Routes>
        </Router>
    );
};

export default App;
