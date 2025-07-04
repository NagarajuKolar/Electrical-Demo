import React from 'react'
import Navbar from './Navbar'
import '../CSS/Aboutus.css'
import bannerimg from '../assets/about1.avif'
import { Link } from 'react-router-dom'

function Aboutus() {
  const contentData = [
    {
      title: "Vision",
      description: `To inspire healthier lives by making premium fitness equipment accessible and reliable for everyone — from home enthusiasts to commercial gym owners.`,
      className: "box2",
    },
    {
      title: "Mission",
      description: `Our mission is to provide world-class gym and workout solutions that elevate training experiences. We focus on innovation, durability, and user-centric designs to support every fitness journey.`,
      className: "box3",
    },
    {
      title: "Commitment",
      description: `We are committed to excellence — in quality, service, and customer satisfaction. Every product we deliver is crafted for performance, safety, and lasting impact.`,
      className: "box4",
    }
  ];

  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "70px" }}>
        <div className="container-fluid banner" style={{ backgroundImage: `url(${bannerimg})` }}>
          <div className="banner-content">
            <h1 className='about-head'>About</h1>
            <p className='about-p'>
              <Link to="/" className='text-decoration-none'>Home </Link>
              <span className='fw-bold text-white'>  |  </span>  
              <Link to='/about' className='text-decoration-none'> About</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="mt-4 abt-page-cont">
          <div className="text-center">
          <h2>Welcome to FitHub Pro <span className='text-warning'> Gear</span></h2>
          <h4 className='text-dark'>Your Trusted Partner in Fitness Innovation</h4>
          </div>
          <br />
          <h5>
            At <span className='text-012996'>FitCore</span> <span className='text-warning fs-4'>Equipment</span>, we specialize in delivering top-tier gym and workout solutions for homes, studios, and commercial centers. Our products combine functionality, style, and durability to help you achieve your fitness goals with confidence.
          </h5>
          <h6>
            <li><span className='fw-bold'>Cardio Machines:</span> 
              <span className="text-muted">High-performance treadmills, bikes, and ellipticals for endurance and fat-burn training.</span>
            </li>
            <li><span className='fw-bold'>Strength Equipment:</span> 
              <span className="text-muted">Dumbbells, benches, racks, and cable systems for resistance training.</span>
            </li>
            <li><span className='fw-bold'>Yoga Accessories:</span> 
              <span className="text-muted">Eco-friendly mats, straps, and blocks for flexibility and mindfulness.</span>
            </li>
            <li><span className='fw-bold'>Outdoor Fitness:</span> 
              <span className="text-muted">Heavy-duty gear like pull-up stations and battle ropes for outdoor workouts.</span>
            </li>
            <li><span className='fw-bold'>Custom Gym Setup:</span> 
              <span className="text-muted">Tailored fitness environments for personal trainers, clubs, and corporate gyms.</span>
            </li>
          </h6>
        </div>
      </div>

      <div className="container-fluid w-full mt-5">
        <div className="row">
          <div className="col-md-3 w-80 col-sm-6">
            <div className="box text-start">
              <h2 className='box1'>
                Vision<br />Mission<br />Commitment
              </h2>
            </div>
          </div>
          {contentData.map((item, index) => (
            <div key={index} className="col-md-3 w-80 col-sm-6">
              <div className={item.className}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Aboutus
