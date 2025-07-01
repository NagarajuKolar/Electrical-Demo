import React from 'react'
import Navbar from './Navbar'
import '../CSS/Aboutus.css'
import bannerimg from '../assets/about1.png'
import { Link } from 'react-router-dom'

function Aboutus() {
  const contentData = [
    {
      title: "Vision",
      description: `Our company strives to improve the productivity of our customers by constantly improving the quality and on-time delivery by pushing ourselves against odds every time to meet our vision.`,
      className: "box2",
    },
    {
      title: "Mission",
      description: `To meet or exceed our customers’ needs in a timely manner by providing quality products and continuously improving our internal operations and the service we provide. Our focus is to be the leader in the development, manufacture and supply of our products.`,
      className: "box3",
    },
    {
      title: "Commitment",
      description: `We have built a company culture based on an unconditional commitment to excellence. We utilize the most consistent and accurate materials in the industry.`,
      className: "box4",
    }
  ];


  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "70px" }}>
        <div className="container-fluid banner " style={{ backgroundImage: `url(${bannerimg})` }}>
          <div className="banner-content ">
            <h1 className=' about-head'>About</h1>
            <p className='about-p'> <Link to="/" className='text-decoration-none'>Home </Link>
              <span className='fw-bold text-white'>  |  </span>  <Link to='/' className='text-decoration-none'> About</Link></p>
          </div>

        </div>
      </div>

      <div className="container mt-5">
        <div className=" mt-4 abt-page-cont">
          <h2>Welcome to SHAFEENA<span className='text-warning'> ELECTRICALS</span> </h2>
          <h4 className='text-muted'>Your Trusted Partner in Electrical Solutions</h4>
          <br />
          <h5>At <span className='text-012996'>SHAFEENA</span> <span className='text-warning fs-4'> ELECTRICALS</span>, we specialize in providing high-quality electrical products and solutions for industrial,
            commercial, and residential projects. With a commitment to excellence and customer satisfaction, we are your reliable source for:</h5>
          <h6>
            <li><span className='fw-bold'>Cable Trays:</span>
              <span className="text-muted">Durable, efficient, and customizable solutions for cable management.</span></li>
            <li><span className='fw-bold'>Earth Materials:</span>
              <span className="text-muted">Top-quality grounding products to ensure safety and compliance.</span></li>
            <li><span className='fw-bold'>Light Poles:</span>
              <span className="text-muted">Sturdy and aesthetically designed poles for all lighting needs.</span></li>
          </h6>
        </div>
      </div>

      <div className="container-fluid w-full mt-5">
        <div className="row">
          <div className="col-md-3 w-80 col-sm-6">
            <div className="box text-start">
              <h2 className='box1' >
                Vision<br />Mission<br />Commitment
              </h2>
            </div>
          </div>
          {contentData.map((item, index) => (
            <>
              <div key={index} className="col-md-3 w-80 col-sm-6">
                <div className={item.className}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>







    </>
  )
}

export default Aboutus