<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MovieScreening extends Model
{
    use HasFactory;

    protected $table = 'movie_screenings'; // Actualiza el nombre de la tabla

    protected $fillable = [
        'movie_id',
        'room_id',
        'start_time',
    ];

    // Relaciones (si tienes alguna)
    public function movie()
    {
        return $this->belongsTo(Movie::class);
    }

    public function room()
    {
        return $this->belongsTo(Room::class);
    }

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }
}
