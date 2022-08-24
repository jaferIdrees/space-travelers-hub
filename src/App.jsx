import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Missions from './components/Missions';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Missions />} />
      {/* <Route path="/categories" element={<Categories />} /> */}
    </Routes>
  );
}

export default App;
