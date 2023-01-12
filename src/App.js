import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Missions from './pages/Missions';
import Rockets from './pages/Rockets';
import MyProfile from './pages/MyProfile';

function App() {
  // const rockets = useSelector((state) => state.rocketsReducer);
  return (
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/my_profile" element={<MyProfile />} />
    </Routes>
  );
}

export default App;
