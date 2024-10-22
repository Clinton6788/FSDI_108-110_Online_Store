import './styles/home.css';
import Specials from '../components/home_components/specials';
import EmployeeOTM from '../components/home_components/employee_otm';
import { Link } from 'react-router-dom';
import Catalog from './catalog';
// import { useState, useEffect } from 'react';

function Home(){ 

    return(
        <div className='home page'>
            <div className='homeFlex page'>
                <div>
                    <Specials />
                </div>
                <div className='centerpiece'>
                    <h1 className='centerWords'>Creative Name Store!</h1>
                    <p className='centerWords'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis aut ipsum odio perspiciatis veniam, vel quo commodi qui voluptatum aperiam tempore officia, ducimus fugit incidunt laborum unde cumque necessitatibus optio.</p>
                    <Link to={'/catalog'} className='btn btn-dark catLink' > View products now!</Link>
                </div>
                <div>
                    <EmployeeOTM />
                </div>
            </div>
        </div>
    );
}

export default Home;