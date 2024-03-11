// Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer >
            <div className="container copright">
                <div className="footer-content">
                    <div className="footer">
                        <p>COPYRIGHT &copy; {new Date().getFullYear()} VCP EXPORT ENTERPRISES LLP. All rights reserved.</p>
                    </div>
                 
                </div>
            </div>
        </footer>
    );
};

export default Footer;
