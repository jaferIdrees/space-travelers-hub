import GetMissions from '../../API/missionsService';

// Actions
const RETRIEVE_MISSIONS = 'RETRIEVE_MISSION';
/* const ADD = 'ADD';
const REMOVE = 'REMOVE'; */
const ERROR = 'ERROR';

const initialState = [];

// Reducer
export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    /* case ADD:
          return [...state];
     */
    case RETRIEVE_MISSIONS:
    {
      return payload;
    }
    /* case REMOVE: return [
          ...state.filter((book) => (book.id !== action.bookID)),
        ]; */
    default: return state;
  }
}

/* export const addBook = (book) => async (dispatch) => {
  try {
    const res = await BookService.create({
      ...book,
      category: 'No Category',
    });
    dispatch({
      type: ADD,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeBook = (id) => async (dispatch) => {
  try {
    await BookService.remove(id);
    dispatch({
      type: REMOVE,
      payload: { id },
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { err },
    });
  }
}; */
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
