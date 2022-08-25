import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Missions from './components/Missions';
import Rockets from './components/Rockets';

function App() {
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
