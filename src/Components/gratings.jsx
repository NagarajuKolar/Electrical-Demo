import '../CSS/Earthing.css'
import bannerimg from '../assets/type44.jpg'
import pullup1 from '../assets/pull1.jpeg'
import pullup2 from '../assets/pull2.jpeg'
import rope1 from '../assets/rope1.jpg'
import rope2 from '../assets/rope2.webp'
import ProductsType from './ProductsType'

function Lightpolings() {
const outdoorFitnessData = [
  {
    id: 'pullup',
    label: 'Pull-Up Equipment',
    content: [
      {
        title: 'Wall-Mounted Pull-Up Bar',
        text: `This heavy-duty bar is fixed to a wall for upper body training. It supports multiple grip positions and high load capacity. Ideal for back, shoulder, and arm strength development.`
      },
      {
        title: 'Outdoor Pull-Up Station',
        text: `Built with weather-resistant steel, these freestanding stations are suitable for parks or home yards. Often combined with dip bars or monkey bars for a full calisthenics setup.`
      }
    ],
    images: [pullup1, pullup2] // Replace with actual image imports
  },
  {
    id: 'battlerope',
    label: 'Battle Ropes',
    content: [
      {
        title: 'Poly Dacron Battle Rope',
        text: `Known for its durability and resistance to fraying, Poly Dacron ropes are ideal for high-intensity outdoor workouts. Common sizes are 1.5 to 2 inches thick and 30-50 feet long. Great for cardio and strength conditioning.`
      },
      {
        title: 'Battle Rope with Protective Sleeve',
        text: `These ropes come with nylon sleeves that prevent wear and tear from rough surfaces. They're ideal for outdoor use, offering longer lifespan and consistent performance across slams, waves, and pulls.`
      }
    ],
    images: [rope1, rope2] // Replace with actual image imports
  }
];


    return (

        <>


      <ProductsType
        title="Outdoor Fitness"
        Data={outdoorFitnessData }
        header={bannerimg}
        defaultType='pullup'
      />


        </>
    )
}

export default Lightpolings