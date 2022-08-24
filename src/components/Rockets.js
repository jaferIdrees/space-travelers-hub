import React from 'react';
import { useSelector } from 'react-redux';
// import Table from 'react-bootstrap/Table';
import { v4 as uuidv4 } from 'uuid';

function Rockets() {
  const rockets = useSelector((store) => store.rocketsReducer);
  return (
    rockets.map((rocket) => <p key={uuidv4()}>{rocket.rocket_name}</p>)
  );
}

export default Rockets;
