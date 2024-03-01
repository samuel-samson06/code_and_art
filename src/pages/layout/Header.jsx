import React, { useContext } from "react"
import logo from "../../images/logo/logo.svg"
import { motion } from "framer-motion"
import { Context } from "../../context/Context"
import { NavLink } from "react-router-dom"
import {PiShoppingCartSimpleFill} from "react-icons/pi"

function Header() {

    const {cart,navBarTrigger,setNavBarTrigger}=useContext(Context)
    function handleNavTrigger(){
        setNavBarTrigger(!navBarTrigger)
    }
  return (
    <React.Fragment>
        <header className=" z-10 fixed  w-full  px-4 flex justify-between items-center bg-black">
            <section>
                <NavLink to={"/"}>
                    <img src={logo} alt="Logo" className="  w-20 sm:w-24 md:w-28" />
                </NavLink>
            </section>
            <div className=" flex flex-row-reverse gap-5 items-center">
                <section onClick={handleNavTrigger} className=" flex flex-col gap-1.5">
                    <motion.div variants={{
                        initial:{
                            rotate:0
                        },
                        animation:{
                            rotate:50,
                            y:4
                        },
                        exit:{
                            rotate:0
                        }
                    }} initial="initial" animate={navBarTrigger?"animation":"exit"}
                    className=" rounded-xl bg-white w-7 h-0.5 text-transparent">.</motion.div>
                    <motion.div
                    variants={{
                        initial:{
                            rotate:0
                        },
                        animation:{
                            rotate:-50,
                            y:-3
                        },
                        exit:{
                            rotate:0
                        }
                    }} initial="initial" animate={navBarTrigger?"animation":'exit'}
                    className=" rounded-xl bg-white w-7 h-0.5 text-transparent">.</motion.div>
                    <motion.div
                    variants={{
                        initial:{
                            opacity:1
                        },
                        animation:{
                            opacity:0
                        },
                        exit:{
                            opacity:1
                        }
                    }} initial="initial" animate={navBarTrigger?"animation":"exit"}
                    className=" rounded-xl bg-white w-7 h-0.5 text-transparent">.</motion.div>
                </section>
                <p className=" sm:text-2xl md:text-3xl text-xl text-white"><NavLink to={"cart"} className={" flex items-center gap-1"}><PiShoppingCartSimpleFill/><span className=" text-[12px] sm:text-sm md:text-base">{cart.length}</span></NavLink></p>
            </div>
        </header>
        <br /><br /><br />
    </React.Fragment>
  )
}

export default Header