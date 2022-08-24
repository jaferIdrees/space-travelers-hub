import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Missions from './components/Missions';
import { retrieveMissions } from './redux/missions/missions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveMissions());
  });
  return (
    <Routes>
      <Route path="/" element={<Missions />} />
      {/* <Route path="/categories" element={<Categories />} /> */}
    </Routes>
  );
}

export default App;
