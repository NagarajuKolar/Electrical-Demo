import React from 'react'
import { IoMdClose } from "react-icons/io";

function EnquiryForm({ show, setshow }) {
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
                        <div className="enq-form d-flex flex-column">
                            <label htmlFor=""> Full Name</label>
                            <input type="text" placeholder=' Your Full Name' />
                            <label htmlFor=""> EMail</label>
                            <input type="email" placeholder='Enter Email' />
                            <label htmlFor=""> Mobile Number</label>
                            <input type="text" placeholder=' Your Full Name' />
                            <label htmlFor=""> Subject</label>
                            <input type="text" placeholder='Subject' />
                            <label htmlFor=""> Message</label>
                            <textarea type="text" placeholder='Message' rows={4} />
                        </div>
                        <div className="buttons enq-btns d-flex ">
                            <button className="btn bt-send">Send Message</button>
                            <button className="btn bt-close" onClick={() => setshow(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default EnquiryForm