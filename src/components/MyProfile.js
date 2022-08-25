import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const myRockets = rockets.filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.missions);
  const myMissions = missions.filter((item) => item.joined === true);
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Title>My Missions</Card.Title>
        <ListGroup variant="flush">
          {myMissions.map((mission) => (
            <ListGroup.Item key={mission.mission_id}>
              {mission.mission_name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Title>My Rockets</Card.Title>
        <ListGroup variant="flush">
          {myRockets.map((rocket) => (
            <ListGroup.Item key={rocket.id}>
              {rocket.rocket_name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </>
  );
};

export default MyProfile;
