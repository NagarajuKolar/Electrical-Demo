import React from 'react'
import '../CSS/Contactus.css'
import contactimg from '../assets/contactus3.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Contactus() {
    const [form, setform] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [errors, seterrors] = useState({});
    const [isFormvalid, setisFormvalid] = useState(false);
    const [submitdata, setsubmitdata] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    const ValidateForm = (fname, fvalue) => {
        let temperrors = { ...errors };
        if (fname === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (fvalue.trim() === '') {
                temperrors.email = 'This field is required';
            } else if (!emailPattern.test(fvalue)) {
                temperrors.email = 'Invalid Email';
            } else {
                temperrors.email = '';
            }
        }
        if (fname === 'phone') {
            if (fvalue.trim() === '') {
                temperrors.phone = 'This field is required';
            }
            else if (!/^\d{10}$/.test(fvalue)) {
                temperrors.phone = 'Invalid Number';
            } else {
                temperrors.phone = '';
            }
        }

        if (fname === 'fullName') {
            if (fvalue.trim() === '') {
                temperrors.fullName = 'This field is required';
            } else {
                temperrors.fullName = '';
            }
        }
        if (fname === 'subject') {
            if (fvalue.trim() === '') {
                temperrors.subject = 'This field is required';
            } else {
                temperrors.subject = '';
            }
        }
        if (fname === 'message') {
            if (fvalue.trim() === '') {
                temperrors.message = 'This field is required';
            } else {
                temperrors.message = '';
            }
        }

        seterrors(temperrors);

        const updatedForm = { //only to check if all fields are filled
            ...form,
            [fname]: fvalue
        };
        let allFilled = true;
        for (let key in updatedForm) {
            if (updatedForm[key].trim() === '') {
                allFilled = false;
                break;
            }
        }
        // let hasErrors = temperrors.email || temperrors.phone || temperrors.fullName || temperrors.subject || temperrors.message;
        let hasErrors = false;
        for (let key in temperrors) {
            if (temperrors[key]) {
                hasErrors = true;
                break;
            }
        }

        //         const allFilled = Object.values(updatedForm).every(val => val.trim() !== '');
        // const hasErrors = Object.values(temperrors).some(errorMsg => errorMsg); 

        if (allFilled && !hasErrors) {
            setisFormvalid(true);
        } else {
            setisFormvalid(false);
        }
    }

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        const updatedForm = {
            ...form,
            [inputName]: inputValue
        };

        setform(updatedForm); // actually updating the state
        ValidateForm(inputName, inputValue);
    };

    // const handleSubmit = () => {
    //     if (isFormvalid) {
    //         console.log("Form submitted!");
    //         console.log(form);
    //         const updateddisplayData = [...submitdata, form];             
    //         setsubmitdata(updateddisplayData);                             
    //         localStorage.setItem('submittedformData', JSON.stringify(updateddisplayData));
    //         setform({
    //             fullName: '',
    //             email: '',
    //             phone: '',
    //             subject: '',
    //             message: ''
    //         });
    //         setisFormvalid(false);
    //         seterrors({});
    //     }
    // };

    const handleSubmit = () => {
        if (isFormvalid) {
            let updatedData;

            if (editIndex !== null) {
                updatedData = [...submitdata];
                updatedData[editIndex] = form;
                setEditIndex(null);
            } else {
                updatedData = [...submitdata, form];
            }

            setsubmitdata(updatedData);
            localStorage.setItem('submittedformData', JSON.stringify(updatedData));

            setform({
                fullName: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
            setisFormvalid(false);
            seterrors({});
        }
    };

    const handleDelete = (index) => {
        const newData = [...submitdata];
        newData.splice(index, 1);
        setsubmitdata(newData);
        localStorage.setItem('submittedformData', JSON.stringify(newData));
    };

    const handleEdit = (index) => {
        setisFormvalid(true);
        const selectedData = submitdata[index];
        setform(selectedData);
        setEditIndex(index);
    };

    useEffect(() => {
        const storedformdata = localStorage.getItem('submittedformData');
        if (storedformdata) {
            setsubmitdata(JSON.parse(storedformdata));
        }
    }, []);


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

            <h5 className='text-center  text-muted mt-4'>AmpTek <span className='text-warning'>Industries</span>  is the market leader in the Supplier of Electrical Materials.
                Our setup is situated in Hyderabad.</h5>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 fade-in-form">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" name="fullName" className="form-control inputs-field" placeholder="FULL NAME"
                                        value={form.fullName}
                                        onChange={handleChange} />
                                    {errors.fullName && <div style={{ color: 'red' }}>{errors.fullName}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email" name='email' className="form-control inputs-field" placeholder="EMAIL ADDRESS"
                                        value={form.email}
                                        onChange={handleChange} />
                                    {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                                </div>

                                <div className="col-md-6 mt-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" name='phone' maxLength='10' className="form-control inputs-field" placeholder="PHONE NUMBER"
                                        value={form.phone}
                                        onChange={handleChange}
                                    />
                                    {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
                                </div>

                                <div className="col-md-6 mt-3">
                                    <label className="form-label">Subject</label>
                                    <input type="text" name='subject' className="form-control inputs-field" placeholder="SUBJECT"
                                        value={form.subject}
                                        onChange={handleChange} />
                                    {errors.subject && <div style={{ color: 'red' }}>{errors.subject}</div>}
                                </div>

                                <div className="col-12 mt-3">
                                    <label className="form-label">Message</label>
                                    <textarea rows="4" name='message' className="form-control inputs-field" placeholder="MESSAGE"
                                        value={form.message}
                                        onChange={handleChange}></textarea>
                                    {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
                                </div>

                                <div className="col-12 text-center mt-4">
                                    <button className="btn btn-primary sub-btn px-5" disabled={!isFormvalid} onClick={handleSubmit} >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12 mt-2 fade-content">
                        <h3 className='mb-4'>
                            <span className='text-primary'>AmpTek</span> <span className='text-warning'>Industries</span>
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
                                <h6><a href="mailto:kolarnaga00@gmail.com" className="text-decoration-none text-muted">
                                    kolarnaga00@gmail.com
                                </a></h6>
                            </div>
                        </div>

                        <div className='phone mt-5'>
                            <h5>Phone</h5>
                            <h6>+91 8074936711<br />
                                +91 9391200341</h6>

                        </div>




                    </div>

                </div>
            </div>
            {submitdata.length > 0 &&
                <div className="col-md-10 mx-md-auto mt-5 col-sm-12">
                    <h5 className="text-center mt-2">Data You Submitted</h5>
                    <table className='table-bordered table  mt-4 table-striped table-responsive'>
                        <thead className='table-dark text-center'>
                            <tr>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Subject</th>
                                <th>Message</th>
                                <th>operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submitdata.map((item, index) => (
                                <>

                                    <tr key={index} className={editIndex === index ? 'table-warning' : ''}>
                                        <td>{item.fullName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.subject}</td>
                                        <td>{item.message}</td>

                                        <td className='d-flex justify-content-center align-items-center'>
                                            <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(index)} > Edit </button>
                                            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}> Delete </button>
                                        </td>
                                    </tr>
                                </>
                            )
                            )}
                        </tbody>

                    </table>

                </div>
            }
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