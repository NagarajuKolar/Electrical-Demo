import React from 'react'
import '../CSS/Cabletrays.css'

import bannerimg from '../assets/type11.webp'
import type1 from '../assets/tread1.avif'
import type2 from '../assets/mill2.avif'
import type3 from '../assets/mill3.jpg'
import access1 from '../assets/bike1.jpg'
import access2 from '../assets/bike3.webp'
import access3 from '../assets/bike2.jpeg'

import ProductsType from './ProductsType'

const CardioMachinesData = [
  {
    id: 'treadmill',
    label: 'Treadmill',
    content: [
      {
        title: 'Motorized Treadmill',
        text: `Motorized treadmills are powered by an electric motor and offer features like automatic speed adjustments, incline control, and pre-programmed workouts. Ideal for weight loss and endurance training with reduced joint impact.`
      },
      {
        title: 'Manual Treadmill',
        text: `Manual treadmills operate without electricity and rely on user motion, making them ideal for HIIT workouts. They're affordable, lightweight, and promote natural running form with high muscle engagement.`
      },
      {
        title: 'Foldable Treadmill',
        text: `Foldable treadmills are space-saving solutions for home gyms. Despite their compact design, they offer robust motor power, digital features, and incline options — perfect for efficient cardio in small spaces.`
      }
    ],
    images: [type1, type2, type3] 
  },
  {
    id: 'exercisebike',
    label: 'Exercise Bike',
    content: [
      {
        title: 'Upright Exercise Bike',
        text: `These bikes mimic traditional cycling, targeting both lower and upper body muscles. Ideal for intense cardio, upright bikes come with digital displays, adjustable seating, and multiple resistance levels.`
      },
      {
        title: 'Recumbent Exercise Bike',
        text: `Recumbent bikes feature a reclined design that supports the back and reduces joint strain. They are perfect for long sessions, rehab, seniors, or users needing low-impact workouts with maximum comfort.`
      },
      {
        title: 'Spin Bike (Indoor Cycle)',
        text: `Spin bikes are built for high-intensity interval training (HIIT) and simulate road biking. With heavy flywheels, fixed gears, and precise resistance controls, they’re preferred in studios and serious training environments.`
      }
    ],
    images: [access1, access2, access3] 
  }
];


function Cabletrays() {

    return (
        <>
            <ProductsType
                title="Cardio Machines"
                Data={CardioMachinesData}
                header={bannerimg}
                defaultType='treadmill'
                loc='/cardiomachines'
            />
        </>
    )
}

export default Cabletrays