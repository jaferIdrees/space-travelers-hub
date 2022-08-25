import React, { useEffect }/* , { useEffect } */ from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import ReserveButton from './ReserveButton';
import { retrieveRockets } from '../redux/rockets/rockets';

function Rockets() {
  const rockets = useSelector((store) => store.rocketsSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(retrieveRockets());
    }
  });
  return (
    <>
      {rockets.map((rocket) => (
        <ListGroup key={uuidv4()} horizontal="lg" className="my-2">
          <ListGroup.Item><img src={rocket.flickr_images[0]} alt="rocket" width="200" /></ListGroup.Item>
          <ListGroup.Item>
            <Card style={{ width: '80rem' }}>
              <Card.Body>
                <Card.Title>{ rocket.rocket_name }</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{rocket.reserved ? 'reserved' : 'not'}</Card.Subtitle>
                <Card.Text>
                  { rocket.description }
                </Card.Text>
                <ReserveButton rocket={rocket} />
              </Card.Body>
            </Card>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
}

export default Rockets;
