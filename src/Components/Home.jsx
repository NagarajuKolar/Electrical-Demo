import React from 'react'
import Navbar from './Navbar'
import '../CSS/Home.css'
import bannerimg from '../assets/banner2.png'
import aboutimg from '../assets/homeabout.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import tray1 from '../assets/cabletray1.jpg'
import tray2 from '../assets/cable-tray-accessories.jpg'
import tray3 from '../assets/CTsupport-.jpg'
import tray4 from '../assets/GI-Earthing-Strip-Plate.jpg'
import tray5 from '../assets/AL strips.jpg'
import tray6 from '../assets/gi-wire-485.jpg'
import tray7 from '../assets/chainlink.jpg'
import tray8 from '../assets/angle pole.jpg'
import tray9 from '../assets/solarpoles.jpg'
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.webp'
import service3 from '../assets/service3.webp'
import client1 from '../assets/apollosteel.png'
import client2 from '../assets/ushamartin.jpeg'
import client3 from '../assets/tata-steel.webp'
import client4 from '../assets/Sail.png'
import client5 from '../assets/adani.png'
import client6 from '../assets/mukund.png'
import client7 from '../assets/msp group.webp'
import client8 from '../assets/jindal.svg'

function Home() {
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const productData = [
        { category: "Cable trays", img: tray1, title: "Ladder Type Tray", link: "/cabletrays" },
        { category: "Cable trays", img: tray2, title: "Perforated Tray", link: "/cabletrays"  },
        { category: "Cable trays", img: tray3, title: "Wire Mesh Tray", link: "/cabletrays"  },
        { category: "Earth Material", img: tray4, title: "Earthing Rods" , link: "/earthmaterial" },
        { category: "Earth Material", img: tray5, title: "Chemical Earthing", link: "/earthmaterial"  },
        { category: "Gratings", img: tray6, title: "New Year Card" , link: "/gratings" },
        { category: "Gratings", img: tray7, title: "Festival Greeting", link: "/gratings"  },
        { category: "Light pole", img: tray8, title: "Street Light Pole" , link: "/lightpolings" },
    ];
    const uniqueCategorySet = new Set(productData.map(item => item.category));
    const uniqueCategories = [...uniqueCategorySet];

    return (
        <>
            <Navbar />

            <div style={{ paddingTop: "70px" }}>
                <div className="container-fluid banner " style={{ backgroundImage: `url(${bannerimg})` }}>
                    <div className="banner-content ">
                        <h1 className='ban-head'>Electrical Solutions & Supply to Residencials,
                            Commercial & Industries</h1>
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
                    <div className="col-md-6 col-sm-12 mt-5 abt-cont ps-md-5 ps-2">
                        <h2 className='text-muted'>welcome</h2>
                        <h1 > Shafeena< span className='text-warning'>  Electricals</span> </h1>
                        <p>Shafeena Electricals is your trusted partner for high-quality electrical solutions tailored to industrial, commercial, and residential needs.
                            Our dedication to excellence ensures innovative, safe, and efficient electrical systems that power your projects with confidence.
                            Discover the difference with Shafeena Electricals – where your satisfaction is our priority.</p>
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
                            <h5 className="service-title">Commercial Services</h5>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className="service-box">
                            <img src={service2} className="service-image" alt="Cable Tray Types" />
                            <h5 className="service-title">Residential Services</h5>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className="service-box">
                            <img src={service3} className="service-image" alt="Cable Tray Types" />
                            <h5 className="service-title">Industrial services</h5>
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