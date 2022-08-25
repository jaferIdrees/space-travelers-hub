/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { reserveRocket } from '../redux/rockets/rockets';// '../redux/Rockets/RocketsReducer';

function ReserveButton(props) {
  // const buttonRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const { rocket } = props;
  const dispatch = useDispatch();
  /* const reserveRocket = () => {
    console.log(buttonRef.current.id);
    // dispatch(reserveRocket(buttonRef.current.id));
    // console.log(e.currentTarget);
  }; */
  return (
    <Button className={rocket.reserved ? 'activeButton' : 'notActiveButton'} type="button" onClick={() => dispatch(reserveRocket({ rocket }))}>
      {rocket.reserved ? 'Cancel Reservation' : `reserve ${rocket.rocket_name}`}
    </Button>
  );
}

export default ReserveButton;
