import React, { useState } from 'react';

interface Props {
    onSubmit: (screening: any) => void; // Cambiar "any" por el tipo correspondiente
    initialData?: any;
}

const ScreeningForm: React.FC<Props> = ({ onSubmit, initialData }) => {
    const [roomId, setRoomId] = useState(initialData?.roomId || '');
    const [startTime, setStartTime] = useState(initialData?.startTime || '');
    const [endTime, setEndTime] = useState(initialData?.endTime || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ roomId, startTime, endTime });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md">
            <div className="mb-4">
                <label className="block">Sala</label>
                <input
                    type="text"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="border p-2 w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block">Hora de inicio</label>
                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="border p-2 w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block">Hora de fin</label>
                <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="border p-2 w-full"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Guardar
            </button>
        </form>
    );
};

export default ScreeningForm;
