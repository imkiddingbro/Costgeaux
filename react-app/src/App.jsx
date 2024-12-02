import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage'; // Ensure the path to HomePage.jsx is correct
import Meat from './pages/Food/meat';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route to render the Home component when at the root URL */}
        <Route path='/' element={<Home />} />
        <Route path='/meat' element={<Meat />} />
        
      </Routes>
    </Router>
  );
}

export default App;
