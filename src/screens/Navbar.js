import React from 'react';
import './stylesofscreens/Navbar.css'
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';

export default function Navbar(){
    const [hidemenu,setHidement] = useState(true);
    const clickham = ()=>{
        setHidement(!hidemenu);
    }
    return(
        <div>
            <div className='navbar'>
            <a href="/home"><img src="alpaviraamBlack.png" className='logo'></img></a>
                {/* <p className='logoname'> AlpaViraam </p> */}
                <ul className='elements'>
                    <li className='element'> <a className="navele" href="/home"> Services </a></li>
                    <li className='element'> <a className="navele" href="/ourteam"> Our Team </a> </li>
                    <li className='element'> <a className="navele" href="/aboutus"> About US </a> </li>
                    <li className='element'> <a className="navele" href="/contactus"> Contact US </a> </li>
                </ul>
            </div>
            
            <div className='monavbar'>
                <img src="alpaviraamBlack.png" className='logo' />
                <button className='hammenu' onClick={()=>(clickham())}></button>
            </div>
            <div className='monavbar2'>
                <ul className={hidemenu?'hiddensidemenu':'sidemenu'}>
                    <li className='element'>
                        Home
                    </li>
                    <li className='element'>
                        Services
                    </li>
                    <li className='element'>
                        About US
                    </li>
                    <li className='element'>
                        Contact US
                    </li>
                </ul>
            </div>
            
        </div>
    )
};