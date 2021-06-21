
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import  { FaFighterJet }  from 'react-icons/fa';
import { useState } from 'react';
import { flightTracker } from '../utils/API';

export default function SearchFlight() {
    const [flightScheduledArrival, setFlightScheduledArrival] = useState('');
    const [flightActualArrival, setFlightActualArrival] = useState('');
    const [flightScheduledDeparture, setFlightScheduledDeparture] = useState('');
    const [flightNumberId, setFlightNumberId] = useState('');

    // const handleInputChange = (event) => {
    //   event.preventDefault();
    //   setFlightNumberId({
    //       ...flightNumberId,
    //       [event.target.name]: event.target.value,
    //   }); 
    // };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(flightNumberId);
        const inputFlightNumber = {
            flashFlightNumber: flightNumberId.flightNumber 
        }
        setFlightNumberId(inputFlightNumber);
        afterSubmit(flightNumberId);
    }

    const afterSubmit = async () => {
        // const flightNumber = {
        //     findFlight: flightNumberId
        // }
        
        await flightTracker.getFlashFlight(flightNumberId).then((response) => {
            setFlightNumberId()
            console.log(response);
        });
    }
   

    return (
    <Form.Group>
        <Row>
        <Col xs={12} s={10} m={8} l={6} md={{span: 6, offset:3}}>        
        <Form.Control 
        className="flashFlightForm" 
        size="lg" type="text"  
        placeholder="Flight Number"
        name='flightNumberId'
        value={flightNumberId}
        onChange={(e) => setFlightNumberId(e.target.value)}/>
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
     )
}