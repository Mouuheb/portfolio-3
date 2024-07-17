import React from 'react'
import './contact.css'
import { GrInstagram, GrLinkedin, GrMail } from "react-icons/gr";

const Contact = () => {
  return (
    <div className='contact' >
        <h1 >Contact</h1>
        <h3>name</h3>
        <input/>

        <h3>email</h3>
        <input/>

        <h3>message</h3>
        
        <textarea/>
        {/* <input className='text-area'/> */}
        <br/>

        <a className='btn-pr'>send</a>
        <div className='social-icon' >
            <a><GrInstagram className='icon'/></a>
            <a><GrLinkedin className='icon' /></a>
            <a><GrMail className='icon' /></a>

        </div>

    </div>
  )
}

export default Contact