import React from 'react'
import '../CSS/Earthing.css'
import bannerimg from '../assets/Earth.png'
import aboutimg from '../assets/about2image.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import strip1 from '../assets/strip1.jpg'
import strip2 from '../assets/strip2.webp'
import strip3 from '../assets/strip3.jpeg'
import ProductsType from './ProductsType'

function Earthing() {
const earthingData = [
  {
    id: 'GIstrips',
    label: 'G.I. Strips & Plates',
    content: [
      {
        title: 'G.I. Strips & Plates',
        text: `G.I. (Galvanized Iron) strips and plates are widely used for electrical grounding systems due to their durability and resistance to corrosion. These strips and plates are made by coating iron with a layer of zinc,
        providing enhanced protection against environmental factors. They are commonly used in earthing applications for buildings, 
        electrical installations, and substations. The flexibility of G.I. strips allows for easy installation, 
        while the strength of G.I. plates ensures long-lasting performance. G.I. materials are highly cost-effective and require minimal maintenance.`
      }
    ],
    images: [strip1]
  },
  {
    id: 'ALwires',
    label: 'Aluminum Strips',
    content: [
      {
        title: 'Aluminum Strips',
        text: `Aluminum strips are versatile, lightweight, and corrosion-resistant materials used in various applications. They are commonly used in 
        the electrical industry for grounding and bonding purposes due to their excellent conductivity. The strips are available in various thicknesses and widths to suit different needs. 
        Anodized aluminum strips offer enhanced durability and resistance to environmental factors. These strips are also used in
        construction, automotive, and manufacturing industries for their strength and flexibility.`
      },
    ],
    images: [strip2]
  },
  {
    id: 'GIwire',
    label: 'GI Wire',
    content: [
      {
        title: 'GI Wire',
        text: `Galvanized Iron (GI) wire is a durable, corrosion-resistant wire coated with a layer of zinc to protect against rust. 
        It is commonly used in fencing, electrical wiring, and construction applications. The galvanization process enhances the wires 
        lifespan, especially in harsh outdoor environments.GI wire is available in various gauges, offering flexibility for 
        different uses.It is a cost- effective material known for its strength, flexibility, and resistance to environmental damage.`
      }
    ],
    images: [strip3]
  }
];


    return (
        <>

      <ProductsType
        title="Earthing Materials"
        Data={earthingData}
        header={bannerimg}
        defaultType='GIstrips'
      />



        </>
    )
}

export default Earthing