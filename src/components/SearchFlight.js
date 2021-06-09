
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
    const [flightNumber, setFlightNumber] = useState('');

    const handleInputChange = (event) => {
      event.preventDefault();
      setFlightNumber({
          ...flightNumber,
          [event.target.name]: event.target.value,
      }); 
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const inputFlightNumber = {
            flashFlightNumber: flightNumber.flightNumber 
        }
        setFlightNumber(inputFlightNumber);
        afterSubmit();
    }

    const afterSubmit = async () => {
        const flightNumber = {
            findFlight: flightNumber.inputFlightNumber
        }
        await flightTracker.getFlashFlight(flightNumber);
    }
   

    return (
    <Form.Group>
        <Row>
        <Col xs={12} s={10} m={8} l={6} md={{span: 6, offset:3}}>        
        <Form.Control 
        className="flashFlightForm" 
        size="lg" type="text"  
        placeholder="Flight Number"
        name='flightNumber' 
        handleInputChange={handleInputChange}/>
        </Col>
        </Row>
        <Row>
        <Col xs={12} s={10} m={8} l={6} md={{span: 6, offset: 5}}>
        <Button size="lg" variant="dark" handleSubmit={handleSubmit} type="submit" className="flightSubmit" on>
        The Fullest Send <FaFighterJet />
        </Button>
        </Col>  
        </Row>
     
  
    </Form.Group>
     )
}