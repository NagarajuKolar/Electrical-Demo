import React from 'react'
import Navbar from './Navbar'
import '../CSS/Home.css'
import bannerimg from '../assets/banner1.png'
import aboutimg from '../assets/aboutban33.png'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import tray1 from '../assets/treadMill.webp'
import tray2 from '../assets/excerise.webp'
import tray3 from '../assets/dumbells.webp'
import tray4 from '../assets/powerack.webp'
import tray5 from '../assets/yogamat.webp'
import tray6 from '../assets/bands.jpg'
import tray7 from '../assets/pullup.png'
import tray8 from '../assets/battlerope.webp'
import service1 from '../assets/service1.jpeg'
import service2 from '../assets/service22.webp'
import service3 from '../assets/service3.jpeg'
import client1 from '../assets/dec.webp'
import client9 from '../assets/Cult.svg'
import client3 from '../assets/MB.png'
import client4 from '../assets/nike.png'
import client5 from '../assets/adidas.png'
import client6 from '../assets/gold.svg'
import client7 from '../assets/reebok.jpeg'
import client8 from '../assets/yogo.png'
import client2 from '../assets/fitness.png'


function Home() {
    const [selectedCategory, setSelectedCategory] = useState('ALL');
const productData = [
  { category: "Cardio Machines", img: tray1, title: "Treadmill", link: "/cardiomachines" },
  { category: "Cardio Machines", img: tray2, title: "Exercise Bike", link: "/cardiomachines" },
  { category: "Strength Equipment", img: tray3, title: "Adjustable Dumbbells", link: "/strengthequipment" },
  { category: "Strength Equipment", img: tray4, title: "Power Rack", link: "/strengthequipment" },
  { category: "Yoga Accessories", img: tray5, title: "Yoga Mat", link: "/yoga" },
  { category: "Yoga Accessories", img: tray6, title: "Resistance Bands", link: "/yoga" },
  { category: "Outdoor Fitness", img: tray7, title: "Pull-Up Station", link: "/outdoor" },
  { category: "Outdoor Fitness", img: tray8, title: "Battle Rope", link: "/outdoor" },
];
    const uniqueCategorySet = new Set(productData.map(item => item.category));
    const uniqueCategories = [...uniqueCategorySet];

    return (
        <>
            <Navbar />

            <div style={{ paddingTop: "70px" }}>
                <div className="container-fluid banner " style={{ backgroundImage: `url(${bannerimg})` }}>
                    <div className="banner-content ">
                        <h1 className='ban-head'>Fitness Gear Engineered for Performance – Built for Every Body..</h1>
                        <a href="/about" className="btn mt-4 read-more">
                            Read More
                        </a>
                    </div>

                </div>
            </div>

            <div className="container mt-5 about-section">
                <div className="row ">
                    <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <img src={aboutimg} alt="" className="img-fluid about-img" />
                    </div>
                    <div className="col-md-6 col-sm-12 mt-1 abt-cont ps-md-5 ps-2">
                        <h2 className='text-muted'>welcome</h2>
                        <h1 >  FitHub Pro < span className='text-warning'> Gear</span> </h1>
                        <p><strong> FitHub Pro Equipment</strong>  is your trusted partner in delivering cutting-edge gym and fitness equipment for homes, studios, 
                        and commercial centers. Our mission is to empower every fitness journey with tools that combine performance, comfort, and reliability. 
                           <br></br>From strength training to yoga essentials, we provide quality gear built to push your limits and help you reach your goals. With FitCore, fitness isn’t just a routine — it’s a lifestyle</p>
                    </div>
                </div>
            </div>

            <div className="container mt-5 products-section">
                <h1 className='text-center'>Our Products</h1>
                <div className="buttons  mt-4 text-center">
                    <div className={`btn btn-lg prod-but ${selectedCategory === "ALL" ? "active-btn" : ""}`} onClick={() => setSelectedCategory("ALL")}>ALL</div>
                    {uniqueCategories.map((category, index) => (
                        <div key={index}
                            className={`btn btn-lg prod-but ${selectedCategory === category ? "active-btn" : ""}`}
                            onClick={() => setSelectedCategory(category)}>{category}
                        </div>
                    ))}
                    {/* <div className={`btn btn-lg prod-but ${selectedCategory === "ALL" ? "active-btn" : ""}`} onClick={() => setSelectedCategory("ALL")}>ALL</div>
                    <div className={`btn btn-lg prod-but ${selectedCategory === "Cable trays" ? "active-btn" : ""}`} onClick={() => setSelectedCategory("Cable trays")}>Cable trays</div>
                    <div className={`btn btn-lg prod-but ${selectedCategory === "Earth Material" ? "active-btn" : ""}`} onClick={() => setSelectedCategory("Earth Material")}>Earth Material</div>
                    <div className={`btn btn-lg prod-but ${selectedCategory === "Gratings" ? "active-btn" : ""}`} onClick={() => setSelectedCategory("Gratings")}>Gratings</div>
                    <div className={`btn btn-lg prod-but ${selectedCategory === "Light pole" ? "active-btn" : ""}`} onClick={() => setSelectedCategory("Light pole")}>Light pole</div> */}
                </div>
            </div>

                  <div className="container">
                    <div className="row mt-4">
                      {productData.map((item, index) => {
                        if (selectedCategory === 'ALL' || item.category === selectedCategory) {
                          return (
                          <div className="col-md-4 col-sm-6 mb-4" key={index}>
                            <div className="product-box">
                              <Link to={item.link} className="text-decoration-none text-dark">
                                <img src={item.img} className="product-image" alt={item.title} />
                                <h5 className="product-title">{item.title}</h5>
                              </Link>
                            </div>
                          </div>
                          );
                        }
                      }
                      )}
            
                    </div>
                  </div>
            
            
            {/* <div className="container-fluid">
                <div className="row mt-4">

                    {(selectedCategory === "ALL" || selectedCategory === "Cable trays") && (
                        <>
                            <div className="col-md-4 col-sm-6 mb-4">

                                <div className="product-box">
                                    <Link to="/" className="text-decoration-none text-dark">
                                        <img src={tray1} className="product-image" alt="Cable Tray Types" />
                                        <h5 className="product-title">Cable Tray Types</h5>
                                    </Link>

                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-4">
                                <div className="product-box">
                                    <Link to="/" className="text-decoration-none text-dark">
                                        <img src={tray2} className="product-image" alt="Cable Tray Types" />
                                        <h5 className="product-title">Cable Tray Types</h5>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-4">
                                <div className="product-box">
                                    <Link to="/" className="text-decoration-none text-dark">
                                        <img src={tray3} className="product-image" alt="Cable Tray Types" />
                                        <h5 className="product-title">Cable Tray Types</h5>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}

                    {(selectedCategory === "ALL" || selectedCategory === "Earth Material") && (
                        <>
                            <div className="col-md-4 col-sm-6 mb-4">
                                <div className="product-box">
                                    <Link to="/" className="text-decoration-none text-dark">
                                        <img src={tray4} className="product-image" alt="Cable Tray Types" />
                                        <h5 className="product-title">Cable Tray Types</h5>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-4">
                                <div className="product-box">
                                    <Link to="/" className="text-decoration-none text-dark">
                                        <img src={tray5} className="product-image" alt="Cable Tray Types" />
                                        <h5 className="product-title">Cable Tray Types</h5>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}

                    {(selectedCategory === "ALL" || selectedCategory === "Gratings") && (
                        <>
                            <div className="col-md-4 col-sm-6 mb-4">
                                <div className="product-box">
                                    <Link to="/" className="text-decoration-none text-dark">
                                        <img src={tray6} className="product-image" alt="Cable Tray Types" />
                                        <h5 className="product-title">Cable Tray Types</h5>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-4">
                                <div className="product-box">
                                    <Link to="/" className="text-decoration-none text-dark">
                                        <img src={tray7} className="product-image" alt="Cable Tray Types" />
                                        <h5 className="product-title">Cable Tray Types</h5>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}


                    {(selectedCategory === "ALL" || selectedCategory === "Light pole") && (
                        <div className="col-md-4 col-sm-6 mb-4">
                            <div className="product-box">
                                <Link to="/" className="text-decoration-none text-dark">
                                    <img src={tray8} className="product-image" alt="Cable Tray Types" />
                                    <h5 className="product-title">Cable Tray Types</h5>
                                </Link>
                            </div>
                        </div>
                    )}

                </div>
            </div> */}


            <div className="container mt-5 services-section">
                <h1 className='text-center'>Our Services</h1>
                <div className="row mt-4">
                    <div className="col-md-4  col-sm-6 mb-4">
                        <div className="service-box">
                            <img src={service1} className="service-image" alt="Cable Tray Types" />
                            <h5 className="service-title">Home Gym Setup</h5>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className="service-box">
                            <img src={service2} className="service-image" alt="Cable Tray Types" />
                            <h5 className="service-title">Commercial Gym Planning</h5>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className="service-box">
                            <img src={service3} className="service-image" alt="Cable Tray Types" />
                            <h5 className="service-title">Gym Flooring & Installation</h5>
                        </div>
                    </div>

                </div>

            </div>


            <div className="container-fluid client-section mt-5 pb-3 w-100">
                <h2 className='text-center mt-3 mb-5'>OUR CLIENTS</h2>
                <div className="client-slider">
                    <div className='client-images  mb-5'>
                        {[client1, client2, client3, client4, client5, client6, client7, client8].map((img, index) => (
                            <img key={index} src={img} alt="" className="img-fluid" />
                        ))}
                        {[client1, client2, client3, client4, client5, client6, client7, client8].map((img, index) => (
                            <img key={`dup-${index}`} src={img} alt="" className="img-fluid" />
                        ))}
                    </div>
                </div>
            </div>










        </>
    )
}

export default Home