import React, { useState, useRef } from "react"
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Visit from '../Visit/Visit'

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
    <Visit/>
      <section className='Contact' id='contact'>
        
        <div className='container top'>
          <div className='heading '>
            <h1>Contact With Us</h1>
          </div>

            

            <div className='Contactform right box_shodow'>
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
                
                  <input className='btn_shadow'type="submit" value="SEND MESSAGE" />
                
              </form>
            </div>
          </div>
      </section>
    </>
  )
}

export default Contact