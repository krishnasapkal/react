import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="secondary ui pointing menu">
            <Link to="/" className="iteam">
                Steamer
            </Link>
            <div className="right menu">
            <Link to="/" className="iteam">
                All Streams
            </Link>
            <GoogleAuth />
            </div>
        </div>
    )
}

export default Header;