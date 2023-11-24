"use client"
import React, {useState} from 'react'
import {BiSolidLeftArrow, BiSolidRightArrow} from 'react-icons/bi'
import {RxDotFilled} from 'react-icons/rx'

const SlideShow = () => {
const slides = [
    {
        url: 'https://rukminim1.flixcart.com/fk-p-flap/1800/270/image/ffeb169a27907387.jpg?q=20'
    },
    {
        url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Grocery/ARTs/Jupiter/Phase3/GW/PC_Hero_P3B_unrec_3000x1200._CB573772477_.jpg'
    },
    {
        url: 'https://e0.pxfuel.com/wallpapers/966/421/desktop-wallpaper-civic-type-r-honda-civic-type-r.jpg'
    },
    {
        url: 'https://e0.pxfuel.com/wallpapers/2/655/desktop-wallpaper-honda-civic-type-r-honda-civic-black.jpg'
    },
    {
        url: 'https://e0.pxfuel.com/wallpapers/367/10/desktop-wallpaper-jaguar-f-type-coupe-jaguar-f-type-coupe.jpg'
    },
    {
        url: 'https://e1.pxfuel.com/desktop-wallpaper/1003/373/desktop-wallpaper-file-jaguar-e-type-jaguar-e-type.jpg'
    },
    {
        url: 'https://e0.pxfuel.com/wallpapers/357/361/desktop-wallpaper-bugatti-type-57-01-14-car-bugatti-2014.jpg'
    },
    {
        url: 'https://e0.pxfuel.com/wallpapers/887/646/desktop-wallpaper-honda-civic-type-r-lights-tunnel-resolution-honda-civic-type-r.jpg'
    },
];

const [currentIndex, setCurrentIndex] = useState(0)

const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
}

const nextSlide = () => {
    const isFirstSlide = currentIndex === slides.length - 1;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
}

const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
}

  return (
    <div className='h-[250px] w-full sm:h-[300px] md:h-[500px] m-auto mt-6 p-2 relative group'>
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full bg-center duration-500'></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BiSolidLeftArrow onClick={prevSlide}/>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BiSolidRightArrow onClick={nextSlide}/>
      </div>
      <div className="flex justify-center top-4 py-2">
        {slides.map((slide, slideIndex) => (
            <div 
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            >
                <RxDotFilled className='text-1xl sm:text-2xl md:text-3xl cursor-pointer'/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default SlideShow
