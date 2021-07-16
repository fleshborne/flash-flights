import moment from 'moment';
import Body from './Body';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import  { FaFighterJet }  from 'react-icons/fa';
import { useState } from 'react';
import { flightTracker } from '../utils/API';


export default function SearchFlight(Body) {
    const [flightScheduledArrival, setFlightScheduledArrival] = useState('');
    const [flightActualArrival, setFlightActualArrival] = useState('');
    const [flightScheduledDeparture, setFlightScheduledDeparture] = useState('');
    const [flightNumber, setFlightNumber] = useState('');
    const [flightNumberId, setFlightNumberId] = useState('');
        
    const emptyFlight = {
        flightNumber : '',
        flightScheduledDeparture : '',
        flightScheduledArrival : '',
    }
    const [userFlight, setUserFlight]= useState(emptyFlight);


    // const handleInputChange = (event) => {
    //   event.preventDefault();
    //   setFlightNumberId({
    //       ...flightNumberId,
    //       [event.target.name]: event.target.value,
    //   }); 
    // };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(flightNumberId);
        const inputFlightNumber = {
            flashFlightNumber: flightNumberId.flightNumber 
        }
        setFlightNumberId(inputFlightNumber);
        afterSubmit(flightNumberId);
    }

    const afterSubmit = () => {
        // const flightNumber = {
        //     findFlight: flightNumberId
        // }
        // const timeSetup = moment().format('LLLL');

         flightTracker.getFlashFlight(flightNumberId).then((response) => {
            console.log(response);
            let flightNumb = response.data[0].number;
            console.log(flightNumb);
            setFlightNumber(flightNumb);
            let scheduledArrival =  response.data[0].arrival.scheduledTimeLocal;
            scheduledArrival = moment(`${scheduledArrival}`).format('LLLL');
            let scheduledDeparture = response.data[0].departure.scheduledTimeLocal;
            scheduledDeparture = moment(`${scheduledDeparture}`).format('LLLL') 
            console.log(flightNumb, scheduledDeparture, scheduledArrival);
            setFlightNumber(flightNumb);
            setFlightScheduledDeparture(scheduledDeparture);
            setFlightScheduledArrival(scheduledArrival);
            // console.log(flightNumber,flightScheduledDeparture,flightScheduledArrival);
            setUserFlight(...flightNumber, flightScheduledDeparture, flightScheduledArrival);
            console.log(userFlight);
            return (   `
                <table class="responsive-table" id='scheduledTimes'>
                    <${Body}>
                    <tr>
                    <td>
                      ${flightNumber.flightNumb}${flightScheduledDeparture.scheduledDeparture}${flightScheduledArrival.scheduledArrival}  
                    </td>
                    </tr>
                    </${Body}>

                </table>`
                
            
        )
    });
};
   

    return (
    <Form.Group>
        <Row>
        <Col xs={12} s={10} m={8} l={6} md={{span: 6, offset:3}}>        
        <Form.Control 
        className="flashFlightForm" 
        size="lg" type="text"  
        placeholder="Flight Number"
        onChange={(e) => setFlightNumberId(e.target.value)}
        value={flightNumberId}
        />
        </Col>
        </Row>
        <Row>
        <Col xs={12} s={10} m={8} l={6} md={{span: 6, offset: 5}}>
        <Button size="lg" variant="dark" onClick={handleSubmit} type="submit" className="flightSubmit" on>
        The Fullest Send <FaFighterJet />
        </Button>
        </Col>  
        </Row>
    </Form.Group>


    );
}