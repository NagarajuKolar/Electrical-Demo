import React from 'react'
import '../CSS/Contactus.css'
import contactimg from '../assets/contactus3.png'
import { Link } from 'react-router-dom'

function Contactus() {
    return (
        <>

            <div style={{ paddingTop: "70px" }}>
                <div className="container-fluid banner " style={{ backgroundImage: `url(${contactimg})` }}>
                    <div className="banner-content ">
                        <h1 className='about-head'>Contact</h1>
                        <p className='about-p'> <Link to="/" className='text-decoration-none'>Home </Link>
                            <span className='fw-bold text-white'>  |  </span>  <Link to='/' className='text-decoration-none'> Contact</Link></p>
                    </div>
                </div>
            </div>

            <h5 className='text-center  text-muted mt-4'>SHAFEENA  <span className='text-warning'> ELECTRICALS</span>  is the market leader in the Supplier of Electrical Materials.
                Our setup is situated in Hyderabad.</h5>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 fade-in-form">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control inputs-field" placeholder="FULL NAME" />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email" className="form-control inputs-field" placeholder="EMAIL ADDRESS" />

                                </div>

                                <div className="col-md-6 mt-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="number" maxLength='10' className="form-control inputs-field" placeholder="PHONE NUMBER" />
                                </div>

                                <div className="col-md-6 mt-3">
                                    <label className="form-label">Subject</label>
                                    <input type="text" className="form-control inputs-field" placeholder="SUBJECT" />
                                </div>

                                <div className="col-12 mt-3">
                                    <label className="form-label">Message</label>
                                    <textarea rows="4" className="form-control inputs-field" placeholder="MESSAGE"></textarea>
                                </div>

                                <div className="col-12 text-center mt-4">
                                    <button className="btn btn-primary sub-btn px-5">Submit</button>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="col-md-6 col-sm-12 mt-2 fade-content">
                        <h3 className='mb-4'>
                            <span className='text-primary'>SHAFEENA </span> <span className='text-warning'> ELECTRICALS</span>
                        </h3>
                        <div className=' adress d-flex '>
                            <div>
                                <h5> Postal Address</h5>
                                <h6>
                                    B8/714, Lig Venture-2, 4th Phase,<br />
                                    KPHB Colony, Kukatpally,<br />
                                    Hyderabad, Telangana-500085
                                </h6>
                            </div>
                            <div className='phone'>
                                <h5>General Enduires</h5>
                                <h6>shafeenaelectricals@gmail.com</h6>
                            </div>
                        </div>

                        <div className='phone mt-5'>
                            <h5>Phone</h5>
                            <h6>+91 9515113440<br />
                                +91 9032408058</h6>

                        </div>




                    </div>
                </div>
            </div>

            <div className='mt-4'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2875749038!2d78.39170874169413!3d17.471251903585372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913cfd05700f%3A0x4a628d564e87d774!2s630%20LIG%20Flats%20Venture%202!5e0!3m2!1sen!2sin!4v1750847688810!5m2!1sen!2sin"
                    style={{ width: '100%', height: '550px' }}
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>


        </>
    )
}

export default Contactus