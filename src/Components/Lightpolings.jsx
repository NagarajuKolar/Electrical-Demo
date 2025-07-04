import '../CSS/Earthing.css'
import bannerimg from '../assets/type33.jpg'
import yogamat1 from '../assets/mat11.jpeg'
import yogamat2 from '../assets/mat22.jpeg'
import band1 from '../assets/band1.jpg'
import band2 from '../assets/band2.jpeg'
import EnquiryForm from './EnquiryForm'
import ProductsType from './ProductsType'

function Lightpolings() {

  const yogaEquipmentData = [
  {
    id: 'yogamats',
    label: 'Yoga Mats',
    content: [
      {
        title: 'Eco-Friendly TPE Yoga Mat',
        text: `These mats are made from Thermoplastic Elastomer (TPE), offering a non-slip surface and excellent cushioning. They are lightweight, biodegradable, and ideal for eco-conscious users. Perfect for daily yoga, stretching, and floor exercises.`
      },
      {
        title: 'Extra Thick Foam Yoga Mat',
        text: `Thicker mats offer additional joint protection and comfort, especially for beginners or those with sensitive knees. These mats are made from high-density NBR or foam and provide excellent grip and support during poses.`
      }
    ],
    images: [yogamat1, yogamat2] // Replace with actual image imports
  },
  {
    id: 'resistancebands',
    label: 'Resistance Bands',
    content: [
      {
        title: 'Loop Resistance Bands',
        text: `Loop bands are great for lower body workouts, glute activation, and physiotherapy. Available in different resistance levels, they are compact and portable — perfect for warmups, home workouts, and rehab exercises.`
      },
      {
        title: 'Tube Resistance Bands with Handles',
        text: `These bands come with grip handles, door anchors, and adjustable resistance options. They simulate free-weight workouts and can be used for chest presses, curls, rows, and shoulder work. Ideal for full-body toning and strength training.`
      }
    ],
    images: [band1, band2] // Replace with actual image imports
  }
];



  return (

    <>

      <ProductsType
        title="Yoga Accessories"
        Data={yogaEquipmentData}
        header={bannerimg}
        defaultType='yogamats'
      />


    </>
  )
}

export default Lightpolings