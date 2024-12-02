import React from 'react';
import './meat.css';
import { Link } from 'react-router-dom';

function meat() {
    return (
        <div className="home">
            <div className="left-column">
                <div className="button-container">
                     {/* Use Link to navigate to the meat page */}
                     <Link to="/meat.js" className="small-button">Meat</Link>
                </div>
            </div>
            <div className="middle-column">
                <h1>Meat Catalogue</h1>
                <p>_____________________________________________________________</p>
            </div>
        </div>
    );
}

export default meat;