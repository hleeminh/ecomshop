import React from 'react'
import Navbar from '../components/Navbar'
import Notify from '../components/Notify'
import Slider from '../components/Slider'
import '../css/Home.css'

const Home = () => {
  return (
    <div>
        <Notify/>
        <Navbar/>
        <Slider/>
    </div>
  )
}

export default Home