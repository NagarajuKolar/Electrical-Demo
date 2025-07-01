import '../CSS/Earthing.css'
import bannerimg from '../assets/Lightpole.png'
import pole1 from '../assets/pole1.webp'
import pole2 from '../assets/pole2.jpg'

import EnquiryForm from './EnquiryForm'
import ProductsType from './ProductsType'

function Lightpolings() {
  const polingData = [
    {
      id: 'customisedPoles',
      label: 'Customised Poles',
      content: [
        {
          title: 'Customised Poles',
          text: `Customized poles for standard light poles are tailored to meet specific height, design, and load-bearing requirements for 
        various applications. These poles can be made from steel, aluminum, or reinforced concrete, depending on the environmental conditions 
        and aesthetic preferences. They offer flexibility in terms of finish options, such as galvanized or powder-coated surfaces, to enhance
        durability and appearance. Customized poles ensure proper support for street lighting, security lights, or decorative outdoor 
        lighting. These poles can be engineered for ease of installation and maintenance, ensuring long-term performance.`
        }
      ],
      images: [pole1]
    },
    {
      id: 'Solarmodule',
      label: 'Solar Module Mounting Systems',
      content: [
        {
          title: 'AluminumStrips Cable Tray',
          text: `Solar module mounting systems for standard light poles are designed to support solar panels for street and area lighting.These systems
           typically include brackets and mounting arms made from durable, corrosion- resistant materials like galvanized steel or aluminum.The mounting structure ensures proper panel orientation to maximize solar energy absorption.Adjustable mounts allow flexibility in panel positioning, optimizing performance throughout the year.These systems integrate 
          seamlessly with existing light poles, providing an eco - friendly, off - grid power solution for outdoor lighting.`
        },
      ],
      images: [pole2]
    }

  ];



  return (

    <>

      <ProductsType
        title="Standard Light poles"
        Data={polingData}
        header={bannerimg}
        defaultType='customisedPoles'
      />


    </>
  )
}

export default Lightpolings