import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { BrowserRoute, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import meat from './pages/Food';
import produce from './pages/produce';

function Home(){
    return (
        <div className="Home">
            <div className="left-column">
                <div className="button-container">

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





{/*function Home() {
    return (
        <div className="home">
            <div className="left-column">
                <div className="button-container">
                     
                     <BrowserRouter>
                        <Routes>
                            <Route path="/meat" element={<meatPage />} />
                        </Routes>
                     </BrowserRouter>
                     <Link to="/meat" className="small-button">Meat</Link>
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
*/}
export default Home;