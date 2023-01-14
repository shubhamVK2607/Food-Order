import React from 'react'
import "../styles/Contact.css"
import ContactImage from "../assets/fooda.jpeg"

function Contact() {
  return (
    <div className="contact">
        <div className="leftSide" style={{backgroundImage:`url(${ContactImage})`}}></div>
        <div className="rightSide">
            <h1>Contact Us</h1>
            <form id="contact-form" method="post">
                <label htmlFor="name">Full Name</label>
                <input type="text" name='name' placeholder='Enter your Name' />
                <label htmlFor="name">Email</label>
                <input type="email" name="name" placeholder='Enter your email add..' />
                <label htmlFor="meassage">Message</label>
                <textarea name="message" rows={7} placeholder='Enter your message...'/>
                <button type='Submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact