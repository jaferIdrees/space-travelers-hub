import React, { useEffect }/* , { useEffect } */ from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ReserveButton from './ReserveButton';
import { retrieveRockets } from '../redux/rockets/rockets';

function Rockets() {
  const rockets = useSelector((store) => store.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(retrieveRockets());
    }
  }, []);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossOrigin="anonymous"
      />
      {rockets.map((rocket) => (
        <ListGroup key={rocket.id} horizontal="lg" className="my-2">
          <ListGroup.Item><img src={rocket.flickr_images[0]} alt="rocket" width="200" /></ListGroup.Item>
          <ListGroup.Item>
            <Card style={{ width: '80rem' }}>
              <Card.Body>
                <Card.Title>{ rocket.rocket_name }</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" />
                <Card.Text>
                  {rocket.reserved && (
                  <>
                    <Badge bg="primary" text="dark" className="bg-primary">Reserved</Badge>
                    {' '}
                  </>
                  ) }
                  {' '}
                  { rocket.description }
                </Card.Text>
                <ReserveButton rocket={rocket} variant={(!rocket.reserved ? 'primary' : 'outline-secondary')} />
              </Card.Body>
            </Card>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
}

export default Rockets;
