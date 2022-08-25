import GetRockets from '../../API/rocketsService';

// Actions
const RETRIEVE_ROCKETS = 'RETRIEVE_ROCKETS';
const RESERVE_ROCKETS = 'RESERVE_ROCKETS';
const ERROR = 'ERROR';

const initialState = [];

// Reducer
export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_ROCKETS:
    {
      const newState = [];
      payload.forEach((rocket) => {
        const {
          // eslint-disable-next-line camelcase
          id, rocket_name, description, flickr_images,
        } = rocket;
        newState.push({
          // eslint-disable-next-line camelcase
          id, rocket_name, description, flickr_images,
        });
      });
      return newState;
    }
    case RESERVE_ROCKETS:
    {
      const { id } = payload;
      const newState = state.map((rocket) => {
        if (rocket.id !== id) { return rocket; }
        return { ...rocket, reserved: true };
      });
      return newState;
    }
    default: return state;
  }
}

export const retrieveRockets = () => async (dispatch) => {
  try {
    const response = await GetRockets();
    dispatch({
      type: RETRIEVE_ROCKETS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { err },
    });
  }
};

export const reserveRocket = (rocket) => (dispatch) => {
  dispatch({
    type: RESERVE_ROCKETS,
    payload: {
      id: { ...rocket }.rocket.id,
    },
  });
};
