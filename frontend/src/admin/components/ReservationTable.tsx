import React from 'react';

interface Reservation {
    id: number;
    userId: number;
    movie: string;
    room: number;
    time: string;
}

interface Props {
    reservations: Reservation[];
}

const ReservationTable: React.FC<Props> = ({ reservations }) => {
    return (
        <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">Usuario</th>
                    <th className="border px-4 py-2">Película</th>
                    <th className="border px-4 py-2">Sala</th>
                    <th className="border px-4 py-2">Horario</th>
                </tr>
            </thead>
            <tbody>
                {reservations.map((reservation) => (
                    <tr key={reservation.id}>
                        <td className="border px-4 py-2">{reservation.id}</td>
                        <td className="border px-4 py-2">{reservation.userId}</td>
                        <td className="border px-4 py-2">{reservation.movie}</td>
                        <td className="border px-4 py-2">{reservation.room}</td>
                        <td className="border px-4 py-2">{reservation.time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ReservationTable;
