import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import { retrieveRockets } from './redux/rockets/rockets';
import { retrieveMissions } from './redux/missions/missions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveMissions());
    dispatch(retrieveRockets());
  });
  // const rockets = useSelector((state) => state.rocketsReducer);
  return (
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      {/* <Route path="/categories" element={<Categories />} /> */}
    </Routes>
  );
}

export default App;
