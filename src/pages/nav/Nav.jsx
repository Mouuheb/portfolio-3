import React from 'react'
import './nav-cmp.css'
import data from '../../data/data'

const Navcmp = () => {
  return (
    <div className='navcmp'>
        <div className='p1'>
            <h1>{data.name}</h1>
            <div className='p2'>
                <a>About</a>
                <a>Skill</a>
                <a>Portfolio</a>
                <a>testimonial</a>
            </div>
            

        </div>

    </div>
  )
}

export default Navcmp