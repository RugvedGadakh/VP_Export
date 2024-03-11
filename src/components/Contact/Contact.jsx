import React, { useState, useRef } from "react"
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./Contact.css"

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    })

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_knpq6q2', 'template_lw7aaej', form.current, 'v1G0YIwacO42Cp5et')
            .then((result) => {
                console.log(result.text);
                console.log("Message sent suceesfully!")
                alert("Message Sent Sucessfully!!")
            }, (error) => {
                console.log(error.text);
            });
    };

    const InputEvent = (event) => {
        const { name, value } = event.target

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (event) => {
        event.preventDefault()
        alert(
            `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
        )
    }
    return (
        <>
            <section className='Contact' id='contact'>
                <div className='containers contact-details'>
                    <div className='Visit-location' id='Visit'>

                        <div className='left'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.1996482321374!2d73.82918537485813!3d19.958104381436712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd950007cd1f67%3A0x32b1b4db3177b6a0!2sVCP%20EXPORT%20ENTERPRISES%20LLP!5e0!3m2!1sen!2sin!4v1709193753437!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>

                        {/* </div> */}

                        <div className='right box_shodow'>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='f_flex'>
                                    <div className='input row'>
                                        <span>YOUR NAME</span>
                                        <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                                    </div>
                                    <div className='input row'>
                                        <span>PHONE NUMBER </span>
                                        <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                                    </div>
                                </div>
                                <div className='input'>
                                    <span>EMAIL </span>
                                    <input type='email' name='email' value={data.email} onChange={InputEvent} />
                                </div>
                                <div className='input'>
                                    <span>SUBJECT </span>
                                    <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                                </div>
                                <div className='input'>
                                    <span>YOUR MESSAGE </span>
                                    <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                                </div>

                                <input className='btn_shadow' type="submit" value="SEND MESSAGE" />

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact