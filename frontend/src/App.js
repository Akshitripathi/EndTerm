import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Enrollment from './components/Enrollment.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Enrollment />} />
        
      </Routes>
    </Router>
  );
}

export default App;
