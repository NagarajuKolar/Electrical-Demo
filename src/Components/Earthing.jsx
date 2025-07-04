import React from 'react'
import '../CSS/Earthing.css'
import bannerimg from '../assets/type22.jpg'
import aboutimg from '../assets/about2image.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import dumbbell1 from '../assets/dumb1.webp'
import dumbbell2 from '../assets/dumb2.jpeg'
import rack1 from '../assets/power1.webp'
import rack2 from '../assets/power2.jpeg'
import ProductsType from './ProductsType'

function Earthing() {
const strengthEquipmentData = [
  {
    id: 'adjustabledumbbells',
    label: 'Adjustable Dumbbells',
    content: [
      {
        title: 'Selectorized Dumbbells',
        text: `Selectorized dumbbells allow you to quickly adjust weights using a dial or pin system. They are space-saving and ideal for home gyms. With a single pair, you can switch between multiple weight levels, making them perfect for full-body strength workouts and progressive overload training.`
      },
      {
        title: 'Steel Handle Adjustable Dumbbells',
        text: `These dumbbells use a traditional spin-lock or plate-load mechanism. They offer great durability and a secure grip due to their knurled steel handles. Ideal for strength training enthusiasts who prefer a classic feel and customizable weight combinations.`
      }
    ],
    images: [dumbbell1, dumbbell2] 
  },
  {
    id: 'powerrack',
    label: 'Power Rack',
    content: [
      {
        title: 'Full Power Rack',
        text: `Full power racks offer a complete and safe setup for heavy lifting. They include safety bars, adjustable J-hooks, and multiple attachments for squats, bench presses, and pull-ups. Sturdy steel frames ensure stability and user safety during high-load workouts.`
      },
      {
        title: 'Half Rack with Plate Storage',
        text: `Half racks are compact yet powerful setups, perfect for home gyms. They provide vertical bar storage, adjustable height levels, and side pegs for storing weight plates. Ideal for performing compound lifts while saving space without sacrificing stability.`
      }
    ],
    images: [rack1, rack2] 
  }
];


    return (
        <>

      <ProductsType
        title="Strength Equipment"
        Data={strengthEquipmentData}
        header={bannerimg}
        defaultType='adjustabledumbbells'
      />



        </>
    )
}

export default Earthing