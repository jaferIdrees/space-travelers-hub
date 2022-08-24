import GetMissions from '../../API/missionsService';

// Actions
const RETRIEVE_MISSIONS = 'RETRIEVE_MISSION';
const ERROR = 'ERROR';

const initialState = [];

// Reducer
export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_MISSIONS:
    {
      return payload;
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
