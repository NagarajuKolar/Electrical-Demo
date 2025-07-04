import { useEffect, useState } from 'react';
import '../CSS/Navbar.css'
import { Link,NavLink } from 'react-router-dom'
import headerpic from '../assets/navlog.jpg'
import { FaChevronDown } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
    const [Open, setOpen] = useState(false);
    const [whatsappOpen, setWhatsappOpen] = useState(false);
    const [gotopvisible, setgotopvisible] = useState(false)

    const openclosewhatsapp = () => {
        setWhatsappOpen(!whatsappOpen);
    }

    const OpencloseMenu = () => {
        setOpen(!Open);
    };

    useEffect(() => {
        const toggletop = () => {
            if (window.scrollY > 300) {
                setgotopvisible(true);
            }
            else {
                setgotopvisible(false);
            }
        };
        window.addEventListener('scroll', toggletop)

        return () => {
            window.removeEventListener('scroll', toggletop)
        }
    }, [])

    const gototop = () => {
        window.scrollTo({
            top: 0,
        })

    }

    return (
        <>
            <div className=" navbar-container container-fluid ">

                <header>
                    <Link
                        to="/" className="d-flex align-items-center   text-decoration-none">
                        <img className="headerpic" src={headerpic} alt="" />
                    </Link>

                    <button className="navbar-toggler d-lg-none" onClick={OpencloseMenu}>
                        {Open ? <FaTimes size={22} color="white" /> : <FaBars size={22} color="white" />}
                    </button>

                    <ul className={`nav nav-pills ${Open ? 'open' : ''}`}>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link "onClick={() => setOpen(false)}>Home</NavLink >
                        </li>

                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link"onClick={() => setOpen(false)}>About Us</NavLink >
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/products" className="nav-link " role="button">
                                Products <FaChevronDown className="down-icon mb-1" />
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/cardiomachines"onClick={() => setOpen(false)}>Cardio Machines</Link></li>
                                <li><Link className="dropdown-item" to="/strengthequipment"onClick={() => setOpen(false)}>Strength EquipMent</Link></li>
                                <li><Link className="dropdown-item" to="/yoga"onClick={() => setOpen(false)}>Yoga Accessories</Link></li>
                                <li><Link className="dropdown-item" to="/outdoor" onClick={() => setOpen(false)}>outdoor Fitness</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink >
                        </li>
                    </ul>
                </header>
            </div>

            <div className='downloadicon '>
                <GoDownload className=' d-icon' />
                <span className="download-text">Download Brochure</span>
            </div>

            <div className='whatsappicon' onClick={openclosewhatsapp}>
                <FaWhatsapp  className="w-icon img-fluid" alt="icon"/>
                {whatsappOpen && (
                    <div className="whatsapp-container">
                        <div className="w-box">
                            <div className="w-heading">
                                <p>FitHub Pro Gear</p>
                                <IoMdClose className="w-close" onClick={() => setWhatsappOpen(false)} />
                            </div>
                            <div className="w-body">
                                <p className='text-muted'>WELCOME TO FitHub Pro Gear<br />HOPE YOU'RE DOING WELL...</p>
                            </div>
                            <div className="w-input">
                                <input type="text" placeholder="Type your message..." />
                                <Link to="https://web.whatsapp.com/"><IoIosSend className='send-icon' /></Link>
                            </div>
                        </div>

                    </div>
                )}
            </div>

            {gotopvisible && (
                <div className="go-to-top" onClick={gototop}>
                    <FaArrowUp className=' gotop-icon' />

                </div>
            )}
        </>
    )
}

export default Navbar