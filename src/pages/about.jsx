import './styles/about.css'
import { useState } from 'react';

function About(){
const [visibleEmail, setVisibleEmail] = useState(false);

function toggleEmail(){
    setVisibleEmail(true)
}

    return(
        <div className='about page'>
            <h3>About Us</h3>

            <div className=''>
                <h2>Clinton Hockenberry</h2>
                {visibleEmail ? <h5>thisIsMy@email.com</h5>: <label>Click the button to see my email</label>}
                <br />
                {!visibleEmail ? <button onClick={toggleEmail} className='btn btn-outline-primary'>Show Email</button>: null}
            </div>
        </div>
    );
}

export default About;