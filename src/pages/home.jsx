import './styles/home.css';
import { Link } from 'react-router-dom';
import Catalog from './catalog';
// import { useState, useEffect } from 'react';

function Home(){ 

    return(
        <div className='home page'>
            <div className='centerpiece'>
                <h1 className='centerWords'>Creative Name Store!</h1>
                <p className='centerWords'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis aut ipsum odio perspiciatis veniam, vel quo commodi qui voluptatum aperiam tempore officia, ducimus fugit incidunt laborum unde cumque necessitatibus optio.</p>
                <Link to={'/catalog'} className='btn btn-dark catLink' > View products now!</Link>
            </div>
        </div>
    );
}

export default Home;