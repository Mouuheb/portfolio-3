import React from 'react'
import './home.css'
import { FaInstagram,FaXTwitter,FaLinkedinIn } from "react-icons/fa6";


const Home = () => {
  return (
    <div className='home' >
        <div className='p1' >
            <div className='text-cnt'>
                <h3>life coach</h3>
                <h1>Hello,  my name is xxxxxx xxxxx</h1>
                <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                <div className='btn-cnt' >
                    <a className='btn-pr' >Projects</a>
                    <a className='btn' >LinkedIn</a>
                </div>
            </div>
            
        </div>
        <div className='p2' >
            <div className='img-containner' >
                <img src='imgs/pp.png' />
            </div>
        </div>
        
    </div>
  )
}

export default Home