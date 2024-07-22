import React from 'react'
import './home.css'
import data from '../../data/data';
import { FaInstagram,FaXTwitter,FaLinkedinIn } from "react-icons/fa6";


const Home = () => {
  return (
    <div className='home' >
        <div className='p1' >
            <div className='text-cnt'>
                <h3>{data.prof}</h3>
                <h1>{data.wellcome}{data.name}</h1>
                <p>{data.bio}</p>
                <div className='btn-cnt' >
                    <a className='btn-pr' >{data.headerPrimeryBtn.txt}</a>
                    <a className='btn' >{data.headerBtn.txt}</a>
                </div>
            </div>
            
        </div>
        <div className='p2' >
            <div className='img-containner' >
                <img src={data.img1} />
            </div>
        </div>
        
    </div>
  )
}

export default Home