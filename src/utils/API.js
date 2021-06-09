import axios from 'axios';
require('dotenv').config();

export const flightTracker = {
    async getFlashFlight(flightNumber) {
        let flashFlight;
        await axios({
            method: 'GET',
            url: 'https://aerodatabox.p.rapidapi.com/flights/number/',
            headers: {
                "headers": {
                    "x-rapidapi-key": process.env.apiKey,
                    "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
                    useQueryString: true,

                }
            },
            params: {
                input: `${flightNumber}`,
            },
        })
        .then((response) => {
            flashFlight = response;
            console.log(flashFlight);
        })
        .catch((error) => {
            console.log(error);
        });
        return flashFlight;

    }

}