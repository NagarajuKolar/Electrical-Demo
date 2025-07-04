import React from 'react'
import bannerimg from '../assets/prodban.avif'
import aboutimg from '../assets/about2image.jpg'
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

function Products() {
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

      <div style={{ paddingTop: "70px" }}>
        <div className="container-fluid banner " style={{ backgroundImage: `url(${bannerimg})` }}>
          <div className="banner-content ">
            <h1 className='about-head'>PRODUCTS</h1>
            <p className='about-p'> <Link to="/" className='text-decoration-none'>Home </Link>
              <span className='fw-bold text-white'>  |  </span>  <Link to='/' className='text-decoration-none'> Products</Link></p>
          </div>

        </div>
      </div>



      <div className="container mt-5 products-section">
        <h1 className='text-center fw-bold mb-3'>Our Products</h1>
        <div className="buttons  mt-4 text-center">
          <div className={`btn btn-lg prod-but ${selectedCategory === "ALL" ? "active-btn" : ""}`} onClick={() => setSelectedCategory("ALL")}>ALL</div>
          {uniqueCategories.map((category,index) => (
          <div key={index}
           className={`btn btn-lg prod-but ${selectedCategory === category ? "active-btn" : ""}`} 
           onClick={() => setSelectedCategory(category)}>{category}
            </div>
          ))}
          {/* <div className={`btn btn-lg prod-but ${selectedCategory === "Cable trays" ? "active-btn" : ""}`} onClick={() => setSelectedCategory("Cable trays")}>Cable trays</div>
          <div className={`btn btn-lg prod-but ${selectedCategory === "Earth Material" ? "active-btn" : ""}`} onClick={() => setSelectedCategory("Earth Material")}>Earth Material</div>
          <div className={`btn btn-lg prod-but ${selectedCategory === "Greetings" ? "active-btn" : ""}`} onClick={() => setSelectedCategory("Greetings")}>Greetings</div>
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
                  <Link to="/products" className="text-decoration-none text-dark">
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


    </>
  )
}

export default Products