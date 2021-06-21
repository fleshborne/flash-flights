import axios from 'axios';
require('dotenv').config();


export const flightTracker = {
    async getFlashFlight(flightNumber) {
        let flashFlight;
        await axios({
            method: 'GET',
            url: `https://aerodatabox.p.rapidapi.com/flights/number/WN${flightNumber}`,
            headers: {
                 "x-rapidapi-key": "74b3760cb2msh8f443e6234efc8ep1c1ef6jsn4ecfc3d16958",
                 "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
                 useQueryString: true,
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