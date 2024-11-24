<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('movie_screenings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('movie_id')->constrained()->onDelete('cascade'); // FK a movie
            $table->foreignId('room_id')->constrained()->onDelete('cascade'); // FK a room
            $table->dateTime('start_time'); // Hora de inicio de la sesión
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('movie_screenings');
    }
};
