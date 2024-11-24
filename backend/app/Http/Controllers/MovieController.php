<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;

// class MovieController extends Controller
// {
//     public function index() {
//         return Movie::all(); // Devuelve todas las películas
//     }

//     public function store(Request $request) {
//         $validated = $request->validate([
//             'title' => 'required|string',
//             'synopsis' => 'nullable|string',
//             'duration' => 'required|integer',
//             'rating' => 'required|string',
//             'poster_url' => 'nullable|string',
//             'trailer_url' => 'nullable|string',
//         ]);
//         return Movie::create($validated);
//     }

//     public function show(Movie $movie) {
//         return $movie;
//     }

//     public function update(Request $request, Movie $movie) {
//         $movie->update($request->all());
//         return $movie;
//     }

//     public function destroy(Movie $movie) {
//         $movie->delete();
//         return response()->noContent();
//     }
// }

class MovieController extends Controller
{
    public function index()
    {
        // Obtén todas las películas desde la base de datos
        $movies = Movie::all();

        // Retorna las películas en formato JSON
        return response()->json($movies);
    }

    public function show($id)
    {
        // Encuentra una película específica por ID
        $movie = Movie::find($id);

        // Si no se encuentra la película, retorna un error 404
        if (!$movie) {
            return response()->json(['message' => 'Movie not found'], 404);
        }

        // Retorna la película en formato JSON
        return response()->json($movie);
    }
}
