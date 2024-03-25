import React from 'react';
import './Visit.css';
const Visit = () => {
    return (
        <div className='Visit-location' id='Visit'>
            <div className='container f_flex top'>
                <div className='right'>
                    <h1>Visit us</h1>
                    <div className='details'>
                        <p><strong>Address:</strong>  16, sai plaza complex
                            nashik road, nashik 422101 India</p>
                        <p><strong>Phone:</strong> <a href="tel:+918222009898">(+91) 8222009898</a> </p>
                        <p><strong>email:</strong><a href="mailto:vcpexportenterprisesllp@gmail.com"> vcpexportenterprisesllp@gmail.com</a></p>
                        <p><strong>Hours: </strong>Monday—Saturday

                            (9am — 8pm)</p>
                    </div>
                </div>
                <div className='left'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.1996482321374!2d73.82918537485813!3d19.958104381436712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd950007cd1f67%3A0x32b1b4db3177b6a0!2sVCP%20EXPORT%20ENTERPRISES%20LLP!5e0!3m2!1sen!2sin!4v1709193753437!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>

        </div>
    );
};

export default Visit;
