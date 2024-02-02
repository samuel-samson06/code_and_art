import React from 'react'
import canvasImg from "../../images/homepageImages/canvasImg.webp"
import merchImg from "../../images/homepageImages/merch1.webp"
import collectiblesImg from "../../images/homepageImages/collectiblesImg.png"
import exhibitImg from "../../images/homepageImages/exhibitImg.webp"
import { NavLink } from 'react-router-dom'



function ImageLinks() {
  return (
    <React.Fragment>
        <div className=' md:grid-cols-4 md:gap-12 md:mx-10 items-center grid grid-cols-2 place-items-center  py-10 text-white text-center sm:gap-8 gap-6'>
            <NavLink to={"/canvas"} className={` md:my-8 cursor-pointer relative flex flex-col items-center w-32 sm:w-36 md:w-40`}>
                <img src={canvasImg} alt="Canvas" loading='lazy' className=' -z-10'/>
                <p className=' flex flex-col justify-center w-full h-2/4 -z-10 bg-black bg-opacity-75   uppercase font-semibold bottom-0 absolute'>Canvas</p>
            </NavLink >
            <NavLink to={"/exhibit"} className={`md:my-8  cursor-pointer relative flex flex-col items-center w-32 sm:w-36 md:w-40`}>
                <img src={exhibitImg} alt="Exhibit" loading='lazy' className='-z-10'/>
                <p className=' flex flex-col justify-center w-full h-2/4 -z-10 bg-black bg-opacity-75   uppercase font-semibold bottom-0 absolute'>Exhibitions</p>
            </NavLink >
            <NavLink to={"/merch"} className={` md:my-8 cursor-pointer relative flex flex-col items-center w-32 sm:w-36 md:w-40`}>
                <img src={merchImg} alt="Merch" loading='lazy' className='-z-10'/>
                <p className=' flex flex-col justify-center w-full h-2/4 -z-10 bg-black bg-opacity-75   uppercase font-semibold bottom-0 absolute'>Merch</p>
            </NavLink >
            <NavLink to={"/collectibles"} className={` md:my-8 cursor-pointer relative flex flex-col items-center w-32 sm:w-36 md:w-40`}>
                <img src={collectiblesImg} alt="Collectibles" loading='lazy' className='-z-10' />
                <p className=' flex flex-col justify-center w-full h-2/4 bg-black -z-10 bg-opacity-75   uppercase font-semibold bottom-0 absolute'>Collectibles</p>
            </NavLink >
        </div>
    </React.Fragment>
  )
}

export default ImageLinks