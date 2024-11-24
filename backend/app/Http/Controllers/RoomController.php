<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function index() {
        return Room::all(); // Devuelve todas las salas
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string',
            'seat_capacity' => 'required|integer',
        ]);
        return Room::create($validated);
    }

    public function show(Room $room) {
        return $room;
    }

    public function update(Request $request, Room $room) {
        $room->update($request->all());
        return $room;
    }

    public function destroy(Room $room) {
        $room->delete();
        return response()->noContent();
    }
}
