<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('reservation_seats', function (Blueprint $table) {
            $table->id();
            $table->foreignId('reservation_id')->constrained()->onDelete('cascade'); // FK a reservation
            $table->foreignId('seat_id')->constrained()->onDelete('cascade'); // FK a seat
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reservation_seats');
    }
};
