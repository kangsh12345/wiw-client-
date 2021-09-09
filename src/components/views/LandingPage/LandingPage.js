import React from 'react';
import axios from 'axios';

import { useSelector } from "react-redux";

function LandingPage(props) {
    const user = useSelector(state => state.user);

    const checkHandler = (e) =>{
        e.preventDefault();
        console.log(user);
    }
    
    return (
        <div>
            LandingPage
            <button onClick={checkHandler}> check</button>
        </div>
    )
}

export default LandingPage
