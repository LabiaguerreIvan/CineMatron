<?php

use App\Http\Controllers\MovieController;
use App\Http\Controllers\MovieScreeningController; 
use App\Http\Controllers\ReservationController;   
use Illuminate\Support\Facades\Route;

// -----------------------------
// RUTAS PARA PELÍCULAS
// -----------------------------

// Ruta para obtener todas las películas
Route::get('/movies', [MovieController::class, 'index']);

// Ruta para obtener una película específica por ID
Route::get('/movies/{id}', [MovieController::class, 'show']);


// -----------------------------
// RUTAS PARA PROYECCIONES (MovieScreenings)
// -----------------------------

// Ruta para obtener todas las proyecciones
Route::get('/movie-screenings', [MovieScreeningController::class, 'index']);

// Ruta para obtener una proyección específica por ID
Route::get('/movie-screenings/{id}', [MovieScreeningController::class, 'show']);

// Ruta para crear una nueva proyección
Route::post('/movie-screenings', [MovieScreeningController::class, 'store']);

// Ruta para eliminar una proyección específica
Route::delete('/movie-screenings/{id}', [MovieScreeningController::class, 'destroy']);


// -----------------------------
// RUTAS PARA RESERVAS
// -----------------------------

// Ruta para obtener todas las reservas
Route::get('/reservations', [ReservationController::class, 'index']);

// Ruta para obtener una reserva específica por ID
Route::get('/reservations/{id}', [ReservationController::class, 'show']);

// Ruta para crear una nueva reserva
Route::post('/reservations', [ReservationController::class, 'store']);

// Ruta para eliminar una reserva específica
Route::delete('/reservations/{id}', [ReservationController::class, 'destroy']);
