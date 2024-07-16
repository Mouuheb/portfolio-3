import { useState } from 'react'
// import './App.css'
import Navcmp from './pages/nav/Nav'
import Home from './pages/home/Home'
import Project from './pages/project/Project'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

function App() {

  return (
    <>
    <Navcmp/>
    <Home/>
    <Project/>
    <About/>
    <Contact/>
    </>
  )
}

export default App
