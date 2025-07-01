import React from 'react'
import { useState } from 'react'
import '../CSS/ProductsType.css'
import { Link } from 'react-router-dom'
import EnquiryForm from './EnquiryForm'
function ProductsType({title,header,Data,defaultType}) {
      const [showform, setshowform] = useState(false)
      const opencloseform = () => {
        setshowform(!showform)
      }
    
      const [selectedtype, Setselectedtype] = useState(defaultType)
    //   let selectedData = null;
    
    //   for (let i = 0; i < Data.length; i++) {
    //     if (Data[i].id === selectedtype) {
    //       selectedData = Data[i];
    //       break;
    //     }
    //   }

     const selectedData = Data.find((item) => item.id === selectedtype);
  return (
    <>

    

            <div style={{ paddingTop: "70px" }}>
                <div className="container-fluid banner " style={{ backgroundImage: `url(${header})` }}>
                    <div className="banner-content ">
                        <h1 className='about-head'>{title}</h1>
                        <p className='about-p'> <Link to="/" className='text-decoration-none'>Home </Link>
                            <span className='fw-bold text-white'>  |  </span>  <Link to='/' className='text-decoration-none'> {title}</Link></p>
                    </div>
                </div>
            </div>

            <div className="container  my-5" >
                <div className="row cab-row flex-column flex-md-row">
                    <div className="col-md-3 col-sm-12  mt-4 ">
                        <div className="cable-buttons  m-4">
                            {Data.map((item, index) => (
                                <button key={index}
                                    className={`btn btn-lg text-center ${selectedtype === item.id ? "active-btn" : ""}`} onClick={() => Setselectedtype(item.id)}> {item.label} </button>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-9 cable-block align-items-start my-4">
                        {selectedData && selectedData.content.map((item, index) =>
                        (
                            <div className="row cable-block" key={index}>
                                <div className="col-md-7 col-sm-12 cable-text">
                                    <h5>{item.title}</h5>
                                    <p>{item.text}</p>
                                </div>

                                {selectedData.images[index] &&
                                    (
                                        <div className="col-md-4 col-sm-12  ms-md-4 cable-image">
                                            <img alt="" src={selectedData.images[index]} className="img-fluid" />
                                            <button className="btn enq-btn mt-2" onClick={opencloseform}>Enquiry Now</button>
                                        </div>
                                    )
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
             <EnquiryForm show={showform} setshow={setshowform}/>

    </>
  )
}

export default ProductsType