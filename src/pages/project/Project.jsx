import React from 'react'
import './project.css'
import data from '../../data/data'

const Project = () => {
    return (
        <div className='project-main'>
            <h1 className='title' >Project</h1>
            <div className='project-containner' >
                {data.proj.projects.map((item, index) => {

                    return (
                        <div key={index}>
                            {index % 2 == 0 ?
                                <div className='card' key={index} >
                                    <div className='img-containner' >
                                        <img src={item.img} />
                                    </div>
                                    <div className='content-containner'>
                                        <h2>{item.title}</h2>
                                        <p>{item.txt}</p>
                                        <a className='btn' >
                                            {item.btn}
                                        </a>
                                    </div>

                                </div> :

                                <div className='card' >

                                    <div className='content-containner'>
                                        <h2>{item.title}</h2>
                                        <p>{item.txt}</p>
                                        <a className='btn' >
                                            {item.btn}
                                        </a>
                                    </div>

                                    <div className='img-containner' >
                                        <img src={item.img} />
                                    </div>



                                </div>
                            }
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Project