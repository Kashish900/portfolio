import React from 'react';
import './contact.css'

function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className="leftcontact">
        <img src="./photos/contact.png" alt="" />
      </div>
      <div className="rightcontact">
        <h2>Contact Here </h2>
        <div className="form">
          <form action="">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id='name' placeholder='Enter your name' />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id='email' placeholder='Enter your email' />
            </div>

            <div>
              <label htmlFor="about">About</label>
              <textarea type="text" name="about" id='about' rows={4} placeholder='Write here...'></textarea>
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>

          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact