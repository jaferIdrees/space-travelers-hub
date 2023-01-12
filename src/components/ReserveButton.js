/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { reserveRocket } from '../redux/rockets/rockets';// '../redux/Rockets/RocketsReducer';

function ReserveButton(props) {
  const { rocket, variant } = props;
  const dispatch = useDispatch();
  return (
    <Button variant={variant} className={rocket.reserved ? 'activeButton' : 'notActiveButton'} type="button" onClick={() => dispatch(reserveRocket({ rocket }))}>
      {rocket.reserved ? 'Cancel Reservation' : `Reserve ${rocket.rocket_name}`}
    </Button>
  );
}

export default ReserveButton;
