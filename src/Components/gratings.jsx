import '../CSS/Earthing.css'
import bannerimg from '../assets/grating.png'
import chain1 from '../assets/chain1.jpg'
import chain2 from '../assets/chain2.webp'
import ProductsType from './ProductsType'


function Lightpolings() {
    const GratingsData = [
        {
            id: 'ChainLinkWires',
            label: 'Chain Link Wires',
            content: [
                {
                    title: 'Chain Link Wires',
                    text: `Chain link wires are durable, galvanized steel wires used to construct chain link fences for security and boundary purposes. 
        The wires are woven into a mesh pattern, offering strength, flexibility, and visibility. Available in various gauges and mesh sizes, 
        they provide flexibility for different applications, from residential to industrial fencing. Galvanized coating ensures protection
         against corrosion, extending the wires lifespan.PVC - 
        coated chain link wires offer added protection and aesthetic appeal, making them suitable for a wide range of outdoor environments..`
                }
            ],
            images: [chain1]
        },
        {
            id: 'Posts (Angle and Pole)',
            label: 'Posts (Angle and Pole)',
            content: [
                {
                    title: 'Posts (Angle and Pole)',
                    text: `Posts(Angle and Pole) are structural components used for supporting various systems like fencing, lighting, and signage
        .Angle posts are made from steel with an angular shape, offering strength and stability for fencing and utility installations.
        Pole posts are typically round, often made from steel, concrete, or fiberglass, and are used for applications such as light poles or flagpoles.
        Both types are designed to withstand heavy loads and advers
        e weather conditions.Galvanized coatings provide additional protection against corrosion, enhancing the longevity of the posts.`
                },
            ],
            images: [chain2]
        },
    ];


    return (

        <>


      <ProductsType
        title="Gratings"
        Data={GratingsData}
        header={bannerimg}
        defaultType='ChainLinkWires'
      />


        </>
    )
}

export default Lightpolings