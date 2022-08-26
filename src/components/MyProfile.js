import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const myRockets = rockets.filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.missions);
  const myMissions = missions.filter((item) => item.joined === true);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossOrigin="anonymous"
      />
      <Row>
        <Card style={{ width: '18rem' }} className="ms-5">
          <Card.Title>My Missions</Card.Title>
          <ListGroup variant="flush">
            {myMissions.map((mission) => (
              <ListGroup.Item key={mission.mission_id}>
                {mission.mission_name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
        <Card style={{ width: '18rem' }} className="ms-auto me-5">
          <Card.Title>My Rockets</Card.Title>
          <ListGroup variant="flush">
            {myRockets.map((rocket) => (
              <ListGroup.Item key={rocket.id}>
                {rocket.rocket_name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </Row>
    </>
  );
};

export default MyProfile;
