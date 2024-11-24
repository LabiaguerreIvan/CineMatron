<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\MovieScreeningController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\ReservationController;


Route::apiResource('movies', MovieController::class);
Route::apiResource('rooms', RoomController::class);
Route::apiResource('screening', MovieScreeningController::class);
Route::apiResource('reservations', ReservationController::class);

Route::get('/', function () {
    return view('welcome');
});

