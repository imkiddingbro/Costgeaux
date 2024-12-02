import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; // Assuming you have some CSS in Home.css

function Home() {
    return (
        <div className="home">
            <div className="left-column">
                <div className="button-container">
                     {/* Use Link to navigate to the meat page */}
                     <Link to="/meat.jsx" className="small-button">Meat</Link>
                </div>
            </div>
            <div className="middle-column">
                <h1>Welcome to Costgeaux</h1>
                <p>_____________________________________________________________</p>
                <h2>Take Advantage Of:</h2>
                <p>Fresh products at cheaper prices</p>

            </div>
        </div>
    );
}

export default Home;