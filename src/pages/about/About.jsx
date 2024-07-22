import React from 'react'
import './about.css'
import data from '../../data/data'


const About = () => {
  return (
    <div className='about-cmp'>
        <h1 className='title' >{data.about.title}</h1>
        <div className='about' >
        
                
                <div className='content-containner'>
                    <h2>{data.about.title}</h2>
                    <p>
                      {data.about.txt}

                    </p>
                    
                    <a className='btn-pr' >
                        {data.about.btn}
                    </a>
                </div>

                <div className='img-containner' >
                    <img src={data.img2}/>
                </div>
                
        
            
        </div>
    </div>
  )
}

export default About