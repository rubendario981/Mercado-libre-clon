import { Carousel } from 'flowbite-react'
import sld1 from '../assets/slider1.webp'
import sld2 from '../assets/slider2.webp'
import sld3 from '../assets/slider3.webp'
import sld4 from '../assets/slider4.webp'
import sld5 from '../assets/slider5.webp'

const CarouselPromo = () => {
  return (
    <div className="h-96">
      <Carousel slideInterval={5000}>
        <img src={sld1} className="w-full h-96" alt="slider promo 1" />
        <img src={sld2} className="w-full h-96" alt="slider promo 2" />
        <img src={sld3} className="w-full h-96" alt="slider promo 3" />
        <img src={sld4} className="w-full h-96" alt="slider promo 4" />
        <img src={sld5} className="w-full h-96" alt="slider promo 5" />
      </Carousel>
    </div>
  )
}

export default CarouselPromo