

export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseDate: string;
    genre: string;
    duration: number; // Duración en minutos
}

export interface MovieScreening {
    id: number;
    movieId: number;
    roomId: number;
    startTime: string;
    endTime: string;
}


export interface Reservation {
    id: number;
    userId: number;
    sessionId: number;
    seats: number[];
}
