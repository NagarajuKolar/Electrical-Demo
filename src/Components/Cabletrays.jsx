import React from 'react'
import '../CSS/Cabletrays.css'

import bannerimg from '../assets/cabletypes.png'

import type1 from '../assets/types1.jpg'
import type2 from '../assets/types2.jpg'
import type3 from '../assets/type3.webp'
import access1 from '../assets/access1.webp'
import access2 from '../assets/access2.webp'
import access3 from '../assets/access3.png'
import access4 from '../assets/access4.jpeg'
import supp1 from '../assets/supp1.jpg'
import supp2 from '../assets/supp2.jpg'
import ProductsType from './ProductsType'

const CableTraysData = [
    {
        id: 'Cabletypes',
        label: 'Cable Tray Types',
        content: [
            {
                title: 'Perforated Cable Tray',
                text: `We bring forth an impeccable array of Perforated Cable Tray for our clients. Offered trays are widely used for installation of 
        regular cables as well as controlled cables in various industries and sectors. Our range is widely acclaimed for its ability to 
        accommodate a large number of branch lines giving a high load bearing capacity. 
        Furthermore, we also offer these cable trays in various customized specifications as per the requirement of our clients.`
            },
            {
                title: 'ladder Cable Tray',
                text: `Backed by an innovative setup, we bring forth a wide collection of Ladder Cable Tray to our valued clients. Our offered range
        of tray is widely acknowledged for its corrosion resistance that helps in efficient transmits of the product. These trays are designed
        and developed by making use of qualitative raw material that are sourced from the most renowned vendors of the industry.
        Customers can avail these in various sizes and grades as per their detailed specifications.`
            },
                        {
                title: 'Angular Cable Tray',
                text: `We bring forth an impeccable array of Perforated Cable Tray for our clients. Offered trays are widely used for installation of 
                regular cables as well as controlled cables in various industries and sectors. Our range is widely acclaimed for its ability to 
                accommodate a large number of branch lines giving a high load bearing capacity. 
                Furthermore, we also offer these cable trays in various customized specifications as per the requirement of our clients.`
            }
            
        ],
        images: [type1, type2,type3]
    },
    {
        id: 'cableaccesories',
        label: 'Cable Tray Accessories',
        content: [
            {
                title: 'Perforated Tray Accessories',
                text: `Perforated tray accessories are made from galvanized steel, stainless steel, aluminum, and mild steel for durability and corrosion resistance. 
                Common accessories include bends, tees, reducers, couplers, clamps, and covers for secure cable management. Hot-dip galvanized and powder-coated finishes enhance protection against environmental factors. Stainless steel accessories are ideal for harsh and corrosive environments. 
                These accessories ensure proper cable routing, support, and safety in electrical installations.`
            },
            {
                title: 'Ladder Tray Accessories',
                text: `Ladder tray accessories are made from galvanized steel, stainless steel, aluminum, and mild steel for durability and corrosion resistance. Common accessories
        include bends, tees, crosses, reducers, couplers, and clamps for secure cable routing.
        Hot-dip galvanized and powder-coated finishes enhance protection in harsh environments.
        Aluminum accessories are lightweight and ideal for indoor applications. These components ensure
        strong support and easy installation in industrial and commercial projects.`
            },
                        {
                title: 'Angular Ladder Type Accessories',
                text: `Angular ladder tray accessories are made from galvanized steel, stainless steel, and aluminum for strength and durability. 
                They include bends, tees, crosses, reducers, and couplers for flexible cable routing. Galvanized steel accessories provide corrosion resistance, while stainless steel ensures longevity in harsh environments. Aluminum accessories are lightweight and ideal for indoor use. These components support secure and organized cable installations in industrial and commercial settings.`
            },
                                    {
                title: 'Race Way / Cable Duct & Accessories',
                text: `Raceways and cable ducts are typically made from PVC, steel, aluminum, or fiberglass materials, designed to house and protect 
                electrical cables. PVC raceways are lightweight, corrosion-resistant, and ideal for indoor use. Steel raceways offer high durability and strength, suitable for industrial applications. Aluminum is often used for outdoor installations due to its rust-resistant properties. Fiberglass ducts provide additional fire resistance and are used in environments requiring high heat tolerance.
                 Accessories like covers, connectors, and fittings are available to ensure secure cable management and easy installation.`
            },
            
            
        ],
        images: [access1, access2,access3,access4]
    },
    {
        id: 'cablesupports',
        label: 'Cable Tray Supports',
        content: [
            {
                title: 'Cable Tray Supporting System - Wall Mounted Type',
                text: `The Wall-Mounted Cable Tray Supporting System is designed to securely support cable trays along walls in various settings. It is
                 typically made from galvanized steel or stainless steel for corrosion resistance. The system includes brackets, hangers, and supports that allow easy installation and maintenance. These supports are engineered for heavy-duty performance, ensuring safety and durability. Ideal for industrial and 
                commercial installations, this system maximizes space while maintaining organized cable management.`
            },
                        {
                title: 'Cable Tray Supporting System - Ceiling Mounted Type',
                text: `The ceiling-mounted cable tray supporting system is designed to suspend trays from the ceiling, offering efficient 
                space utilization in industrial and commercial settings. It typically uses steel supports such as angle brackets or
                 U-shaped channels to secure the tray. The system is installed with hanger rods or steel wires for flexibility and strength.
                  It ensures a stable structure to manage heavy cables while maintaining a neat and organized appearance. Corrosion-resistant coatings
                   like galvanization or powder coating enhance the systems durability.`
            },

        ],
        images: [supp1, supp2]
    }
];


function Cabletrays() {

    return (
        <>
            <ProductsType
                title="Cable Trays "
                Data={CableTraysData}
                header={bannerimg}
                defaultType='Cabletypes'
            />
        </>
    )
}

export default Cabletrays