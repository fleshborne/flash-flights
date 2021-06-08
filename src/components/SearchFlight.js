
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import  { FaFighterJet }  from 'react-icons/fa';
import { useState } from 'react';

export default function SearchFlight() {
    const handleInputChange = (event) => {
      const {name, value} = event.target;  
    }
    
    const [flight, setFlight] = useState({
        currentFlight: '',
    }, [])

    return (
    <Form.Group>
        <Row>
        <Col xs={12} s={10} m={8} l={6} md={{span: 6, offset:3}}>        
        <Form.Control className="flashFlightForm" size="lg" type="text"  placeholder="Flight Number" onChange={handleInputChange}/>
        </Col>
        </Row>
        <Row>
        <Col xs={12} s={10} m={8} l={6} md={{span: 6, offset: 5}}>
        <Button size="lg" variant="dark" type="submit" className="flightSubmit">
        The Fullest Send <FaFighterJet />
        </Button>
        </Col>  
        </Row>
     
  
    </Form.Group>
     )
}