import { useState } from "react";
import React from 'react'
import { IoMdClose } from "react-icons/io";

function EnquiryForm({ show, setshow }) {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
    });
    const [errors, seterrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const Validate = () => {
        const newerrors = {};
        let isValid = true;
        if (!formData.fullname.trim()) {
            newerrors.fullname = "Name is Required"
            isValid = false;
        }

        if (!formData.email.trim()) {
            newerrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newerrors.email = "Invalid email format";
            isValid = false;
        }

        if (!formData.mobile.trim()) {
            newerrors.mobile = "Mobile number is required";
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            newerrors.mobile = "Mobile number must be 10 digits";
            isValid = false;
        }

        if (!formData.subject.trim()) {
            newerrors.subject = "Subject is required";
            isValid = false;
        }

        if (!formData.message.trim()) {
            newerrors.message = "Message is required";
            isValid = false;
        }
        seterrors(newerrors)
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = Validate();
        if (isValid) {
            alert("Form submitted successfully!");
            setFormData({
                fullname: '',
                email: '',
                mobile: '',
                subject: '',
                message: ''
            });

            seterrors({});
            setshow(false);
        }
    };
const isFormIncomplete = Object.values(formData).some(val => !val.trim());
    if (show === false) {
        return null
    } else {
        return (
            <>
                <div className="enq-container">
                    <div className="enq-box">
                        <div className="enq-heading py-3">
                            <h2 className='text-center'>Enquiry Form</h2>
                            <IoMdClose size={25} className='text-center enq-icon' onClick={() => setshow(false)} />
                        </div>
                        <form onSubmit={handleSubmit} className="enq-form d-flex flex-column">
                            <label htmlFor=""> Full Name</label>
                            <input type="text" name="fullname" maxLength={30} placeholder=' Your Full Name'
                                value={formData.fullname}
                                onChange={handleChange} />
                            {errors.fullname && <small className="text-danger">{errors.fullname}</small>}
                            <label htmlFor=""> EMail</label>
                            <input type="email" name="email" placeholder='Enter Email'
                                value={formData.email}
                                onChange={handleChange} />
                            {errors.email && <small className="text-danger">{errors.email}</small>}
                            <label htmlFor=""> Mobile Number</label>
                            <input type="text" name="mobile" maxLength={10} placeholder=' Mobile Number'
                                value={formData.mobile}
                                onChange={handleChange} />
                            {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
                            <label htmlFor=""> Subject</label>
                            <input type="text" name="subject" placeholder='Subject'
                                value={formData.subject}
                                onChange={handleChange} />
                            {errors.subject && <small className="text-danger">{errors.subject}</small>}
                            <label htmlFor=""> Message</label>
                            <textarea type="text" name="message" placeholder='Message' rows={4}
                                value={formData.message}
                                onChange={handleChange} />
                            {errors.message && <small className="text-danger">{errors.message}</small>}

                            <div className="buttons enq-btns d-flex ">
                                <button className="btn bt-send" disabled={isFormIncomplete}>Send Message</button>
                                <button className="btn bt-close" onClick={() => setshow(false)}>Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default EnquiryForm