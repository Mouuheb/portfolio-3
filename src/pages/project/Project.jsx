import React from 'react'
import './project.css'

const Project = () => {
  return (
    <div>
        <h1 className='title' >Project</h1>
        <div className='project-containner' >
            <div className='card' >
                <div className='img-containner' >
                    <img src='imgs/p1.png'/>
                </div>
                <div className='content-containner'>
                    <h2>title</h2>
                    <p>wwsdvsdbsdfbdsfdsgf ndsgf nsgndgfn fg sgf dgbsgnsgf gf sb</p>
                    <a className='btn' >
                        view Project
                    </a>
                </div>
                
            </div>

            

            <div className='card' >
                
                <div className='content-containner'>
                    <h2>title</h2>
                    <p>wwsdvsdbsdfbdsfdsgf ndsgf nsgndgfn fg sgf dgbsgnsgf gf sb</p>
                    <a className='btn' >
                        view Project
                    </a>
                </div>

                <div className='img-containner' >
                    <img src='imgs/p3.png'/>
                </div>

                
                
            </div>
            <div className='card' >
                <div className='img-containner' >
                    <img src='imgs/p2.png'/>
                </div>
                <div className='content-containner'>
                    <h2>title</h2>
                    <p>wwsdvsdbsdfbdsfdsgf ndsgf nsgndgfn fg sgf dgbsgnsgf gf sb</p>
                    <a className='btn' >
                        view Project
                    </a>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Project