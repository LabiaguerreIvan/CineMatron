<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\ReservationSeat;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function index() {
        return Reservation::with(['user', 'session'])->get(); // Devuelve todas las reservas
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'session_id' => 'required|exists:sessions,id',
            'seat_ids' => 'required|array',
            'seat_ids.*' => 'exists:seats,id',
        ]);

        // Crear la reserva principal
        $reservation = Reservation::create([
            'user_id' => $validated['user_id'],
            'session_id' => $validated['session_id'],
        ]);

        // Asignar asientos a la reserva
        foreach ($validated['seat_ids'] as $seatId) {
            ReservationSeat::create([
                'reservation_id' => $reservation->id,
                'seat_id' => $seatId,
            ]);
        }

        return $reservation->load('seats');
    }

    public function show(Reservation $reservation) {
        return $reservation->load(['user', 'session', 'seats']);
    }

    public function destroy(Reservation $reservation) {
        $reservation->delete();
        return response()->noContent();
    }
}
