// Archivo principal donde se definen las rutas de la aplicación.
// Utiliza React Router para navegar entre las distintas páginas.
// Acá se configuran las rutas para que el usuario pueda moverse entre las páginas sin recargar la aplicación.

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<MovieList />} />
                <Route path="/movies/:id" element={<MovieDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
