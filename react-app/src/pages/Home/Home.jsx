import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; // Assuming you have some CSS in Home.css

function Home() {
    return (
        <div className="home">
            <div className="left-column">
                <div className="button-container">
                    {/* <button className="small-button" onClick={() => {Market.jsx>}}>Market</button> */}

                     {/* Use Link to navigate to the Market page */}
                     <Link to="/market" className="small-button">Market</Link>
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