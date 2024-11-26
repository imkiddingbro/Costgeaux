import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; // Ensure the path to Home.jsx is correct

function App() {
  return (
    <Router>
      <Routes>
        {/* Route to render the Home component when at the root URL */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
