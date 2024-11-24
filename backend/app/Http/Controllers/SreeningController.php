<?php

namespace App\Http\Controllers;

use App\Models\MovieScreening;
use Illuminate\Http\Request;

class MovieScreeningController extends Controller
{
    public function index() {
        return MovieScreening::with(['movie', 'room'])->get(); // Devuelve todas las proyecciones con información de película y sala
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'movie_id' => 'required|exists:movies,id',
            'room_id' => 'required|exists:rooms,id',
            'start_time' => 'required|date',
        ]);
        return MovieScreening::create($validated);
    }

    public function show(MovieScreening $MovieScreening) {
        return $MovieScreening->load(['movie', 'room']);
    }

    public function update(Request $request, MovieScreening $MovieScreening) {
        $MovieScreening->update($request->all());
        return $MovieScreening;
    }

    public function destroy(MovieScreening $MovieScreening) {
        $MovieScreening->delete();
        return response()->noContent();
    }
}
