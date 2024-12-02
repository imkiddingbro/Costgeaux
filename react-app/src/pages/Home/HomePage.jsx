import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div className="homePage">
            <div className="left-column">
                <div className="medium-button">
                    <Link to='/meat'>Meat Page</Link>
                </div>
            </div> 
            <div className="middle-column">
                <h1>Welcome to Costgeaux</h1>
                <p>_____________________________________________________________</p>
                <h2>Take Advantage Of:</h2>
                <p>Fresh products at cheaper prices</p>

            </div>
            <div className='right-column'>
            <div className="medium-button">
                    <Link to='/employee'>Employee Page</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;