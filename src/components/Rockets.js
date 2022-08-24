import React from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { v4 as uuidv4 } from 'uuid';

function Rockets() {
  const rockets = useSelector((store) => store.rocketsReducer);
  return (
    <>
      {rockets.map((rocket) => (
        <ListGroup key={uuidv4()} horizontal="lg" className="my-2">
          <ListGroup.Item><img src={rocket.flickr_images[0]} alt="rocket" width="200" /></ListGroup.Item>
          <ListGroup.Item>
            <Card style={{ width: '80rem' }}>
              <Card.Body>
                <Card.Title>{ rocket.rocket_name }</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Reserved?</Card.Subtitle>
                <Card.Text>
                  { rocket.description }
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
}

export default Rockets;
