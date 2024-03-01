import React from "react"
// import paystack from "../../images/footer_images/paystack.svg"
import mastercard from "../../images/footer_images/mastercard.svg"
import visa from "../../images/footer_images/visa.svg"
import verve from "../../images/footer_images/verve.svg"
import {FiInstagram} from "react-icons/fi"
import {FaTwitter,FaFacebookF} from 'react-icons/fa6'
import footerLogo from "../../images/footer_images/footer_logo.svg"


const year=new Date()


function Footer() {
  return (
    <React.Fragment>
      <footer className=" bg-gray-50 py-5">  
        <div className=" border-[1px] rounded-md py-2 flex flex-col gap-3 mx-4 border-gray-300">
          <footer>
            <h1 className=" text-center">Secured by <b>Flutter</b></h1>
          </footer>
          <section className=" grid grid-cols-3 justify-items-center items-center">
            {/* <img src={paystack} alt="paysatck" className=" w-12" /> */}
            <img src={mastercard} alt="mastercard" className=" w-12" />
            <img src={visa} alt="visa" className=" w-12" />
            <img src={verve} alt="verve" className=" w-12" />
          </section>
        </div>
        <nav className=" flex items-center justify-between px-3 pt-10 pb-2">
          <ul className=" flex gap-2">
            <li className=" bg-black text-white p-2 rounded-full"><FaFacebookF/></li>
            <li className=" bg-black text-white p-2 rounded-full"><FaTwitter/></li>
            <li className=" bg-black text-white p-2 rounded-full"><FiInstagram/></li>
          </ul>
          <div className=" flex items-center">
            <img src={footerLogo} alt="Footer Logo" className=" w-10 rounded-full"/>
            <p className=" text-[12px] font-architect">&copy; Copyright <span className=" font-semibold">{year.getFullYear()}</span></p>
          </div>
        </nav>
      </footer>
    </React.Fragment>
  )
}

export default Footer