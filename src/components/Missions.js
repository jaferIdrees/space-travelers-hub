import React from 'react';
import Table from 'react-bootstrap/Table';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

function Missions() {
  const state = useSelector((state) => state.missionsReducer);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {state.map((mission) => (
          <tr key={uuidv4()}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>{mission.mission_name}</td>
          </tr>
        ))}
        {' '}
      </tbody>
    </Table>
  );
}

export default Missions;
