import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveMissions, joinMission } from '../redux/missions/missions';

function Missions() {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  if (missions.length === 0) {
    dispatch(retrieveMissions());
  }
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
        {missions.map((mission) => (
          <tr key={uuidv4()}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>
              {mission.joined && (<Badge bg="primary">Active Member</Badge>)}
              {!mission.joined && (<Badge bg="secondary">Not a Member</Badge>)}
            </td>
            <td>
              <Button className={mission.joined ? 'activeButton' : 'notActiveButton'} type="button" onClick={() => dispatch(joinMission({ mission }))}>
                {mission.joined ? 'Leave Mission' : 'Join Mission'}
              </Button>

            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Missions;
