const URL = 'http://localhost:3001/reservas';

export const getReservas = async() => {
    try {
        const res = await fetch(URL);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching reservas:', error);
        return [];
    }
}

export const saveReserva = async(reserva) => {
    console.log(reserva)
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reserva)
        };

        const res = await fetch(URL, requestOptions);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error saving reserva:', error);
        return null;
    }
}

export default { getReservas, saveReserva };
