import GetRockets from '../../API/rocketsService';

// Actions
const RETRIEVE_ROCKETS = 'RETRIEVE_ROCKETS';
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
          id, rocket_name, rocket_type, flickr_images,
        } = rocket;
        newState.push({
          // eslint-disable-next-line camelcase
          id, rocket_name, rocket_type, flickr_images,
        });
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
