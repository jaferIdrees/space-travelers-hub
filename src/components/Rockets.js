import React from 'react';
import { useSelector/* , useDispatch */ } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import ReserveButton from './ReserveButton';

function Rockets() {
  // const [disabled, setDisabled] = useState(false);
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
