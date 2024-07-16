import React from 'react'
import './contact.css'

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
            <a></a>
        </div>

    </div>
  )
}

export default Contact