import React from 'react'
import { Link } from 'react-router-dom'
import headerpic from  '../assets/navlog.jpg'
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
function Footer() {
  return (
    <>
      <div className="container-fluid footer mt-2">
        <div className="row footer-content">

          <div className="col-md-3 col-sm-6 mb-2">
            <img src={headerpic} alt="" className='img-fluid head-img ps-md-3' /><br />
            <p className='fs-5 footlinks ps-md-3'>
              Subscribe to our mailing list to <br />
              receive <br />
              new updates and special offers:
            </p>
          </div>

          <div className="col-md-3 col-sm-6 mb-2">
            <h3 className='text-warning mb-2  Links-head fw-bold ps-md-3'>QUICK LINKS</h3>
            <div className='quicklinks fs-5'>
              <li><Link to="/" >Home</Link> </li>
              <li><Link to="/about" >About Us</Link> </li>
              <li><Link to="/products" >Products</Link> </li>
              <li><Link to="/Gallery" >Gallery</Link> </li>
              <li><Link to="/contact" >Contact</Link> </li>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-2">
            <h2 className='text-warning mb-2 Links-head fw-bold ps-md-3'>CONTACT</h2>
            <div className='contact-item mt-2 footlinks fs-5 ps-md-3'>
              <CiLocationOn className='icon' />
              <a
                href="https://www.google.com/maps?q=B8/714, Lig Venture-2, 4th Phase, KPHB Colony, Kukatpally, Hyderabad, Telangana-500085"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                B8/714, Lig Venture-2, 4th Phase,<br />
                KPHB Colony, Kukatpally,<br />
                Hyderabad, Telangana-500085
              </a>
            </div>

            <div className='contact-item fs-5 ps-md-3'>
              <FiPhone className='icon' />
              <div >
                <p><a className="text-decoration-none text-white" href="tel:+918074936711">+91 8074936711</a></p>
                <p><a href="tel:+919391200341" className="text-decoration-none text-white">+91 9391200341</a></p>
              </div>
            </div>

            <div className='contact-item fs-5 ps-md-3'>
              <MdEmail className='icon' />
              <a href="mailto:kolarnaga00@gmail.com" className="text-decoration-none text-white">
                kolarnaga00@gmail.com
              </a>
            </div>

          </div>

          <div className="col-md-3 col-sm-6 mb-2">
            <h3 className='text-warning mb-2 Links-head fw-bold ps-md-3'>ROUTE MAP</h3>
            <div className='ps-md-3'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2875749038!2d78.39170874169413!3d17.471251903585372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913cfd05700f%3A0x4a628d564e87d774!2s630%20LIG%20Flats%20Venture%202!5e0!3m2!1sen!2sin!4v1750847688810!5m2!1sen!2sin"
                style={{ width: '100%', height: '110px' }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <h3 className='text-warning mb-2 Links-head  mt-3 fw-bold ps-md-3'>SOCIAL MEDIA</h3>
            <div className="d-flex media ps-md-3">
              <Link to="https://facebook.com" className="text-white media-icons ">
                <FaFacebookF />
              </Link>
              <Link to="https://instagram.com" className="text-white media-icons ">
                <FaInstagram />
              </Link>
              <Link to="https://linkedin.com" className="text-white media-icons">
                <FaLinkedinIn />
              </Link>
              <Link to="https://twitter.com" className="text-white media-icons">
                <FaXTwitter />
              </Link>
            </div>

          </div>

        </div>


        <div className="container footer-bottom ">
          <div className='footer-links d-flex justify-content-between'>
            <Link to='/privacy' className='text-decoration-none '>Privacy Policy</Link>
            <Link to='/terms' className=' text-decoration-none'>Terms & Conditions</Link>
          </div>

          <hr className='text-light' />
          <div className='foot-links d-flex justify-content-between'>
            <p className="mb-0 text-center text-muted-white">
              © 2024 <span className="ms-1">FitHub Pro Gear. All rights reserved.</span>
            </p>
            <p className="mb-0 text-center">
              <span className='text-muted-white'>Designed & Developed By</span> <Link to="https://www.linkedin.com/in/nagaraju-kolar-aab683234/" className='text-decoration-underline text-light fw-medium'>Nagaraju Kolar</Link>
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer