import React from 'react';
import logo from '../../Resources/Images/qr_boss.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Header.css'

const Header = () => {
    return (
        <div className="header_level_1_div">
            <div className="header_level_1_logo">
                <LazyLoadImage
                    src={logo}
                />
                <span>
                    QR Gen
                </span>
            </div>
        </div>
    );
};

export default Header;