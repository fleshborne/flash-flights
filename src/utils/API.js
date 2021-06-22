import axios from 'axios';
require('dotenv').config();


export const flightTracker = {
    async getFlashFlight(flightNumber) {
        let flashFlight;
        await axios({
            method: 'GET',
            url: `https://aerodatabox.p.rapidapi.com/flights/number/WN${flightNumber}`,
            headers: {
                'x-rapidapi-host': 'aerodatabox.p.rapidapi.com', 
                'x-rapidapi-key': process.env.REACT_APP_API_KEY,
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