import React from 'react'
import "./home.css"
import Navbar from './Navbar';
import topleft from '../assets/topleft.png'
import topright from '../assets/topright.png'

const Home = () => {
  return (
    <div className='home_container'>
        <Navbar />
        <div className="hero">
            <div className="heroinside">
                <div className="hero__text">
                    <img src={topleft} alt="" />
                    <h1>Welcome to The Elysian</h1>
                    <img src={topright} alt="" />
                </div>
                <div className='line'></div>
                <div className='motto'>
                    <h1>Exquisite <span>Flavors</span>, Impeccable <span>Service</span>.</h1>
                </div>
                <div className='line'></div>
            </div>
        </div>
        <div className="todayspecial">
            <div className="todayspecial__text">
                <h1>Today's Special</h1>
                <h2>Black Caviar</h2>
            </div>
            
        </div>
    </div>
  )
}

export default Home
