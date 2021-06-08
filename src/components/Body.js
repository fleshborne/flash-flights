// import react from 'react';
import Table from 'react-bootstrap/Table';


export default function Body() {
    return (
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th className='tableHeadText'>#</th>
      <th className='tableHeadText'>Scheduled Departure</th>
      <th className='tableHeadText'>Actual Departure</th>
      <th className='tableHeadText'>Scheduled Arrival</th>
      <th className='tableHeadText'>Actual Arrival</th>
    </tr>
  </thead>

</Table>
    )
}
