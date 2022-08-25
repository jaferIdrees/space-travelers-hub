import GetMissions from '../../API/missionsService';

// Actions
const RETRIEVE_MISSIONS = 'RETRIEVE_MISSION';
const JOIN_MISSION = 'JOIN_MISSION';
const ERROR = 'ERROR';

const initialState = [];

// Reducer
export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_MISSIONS:
    {
      const newState = [];
      payload.forEach((mission) => {
        const {
          // eslint-disable-next-line camelcase
          mission_id, mission_name, description,
        } = mission;
        newState.push({
          // eslint-disable-next-line camelcase
          mission_id, mission_name, description,
        });
      });
      return newState;
    }

    case JOIN_MISSION:
    {
      const newState = state.map((mission) => {
        if (mission.mission_id !== payload) { return mission; }
        return { ...mission, joined: true };
      });
      return newState;
    }
    default: return state;
  }
}

export const retrieveMissions = () => async (dispatch) => {
  try {
    const response = await GetMissions();
    dispatch({
      type: RETRIEVE_MISSIONS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { err },
    });
  }
};

export const joinMission = (mission) => async (dispatch) => {
  dispatch({
    type: JOIN_MISSION,
    payload: mission.mission.mission_id,
  });
};
