import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Context } from "../../context/Context"

function Navbar() {

  const {navBarTrigger,setNavBarTrigger}=useContext(Context)
  function handleNavTrigger(){
    setNavBarTrigger(!navBarTrigger)
}

  return (
    <React.Fragment>
      <AnimatePresence>

      <motion.div 
      variants={{
        initial:{
          x:-1000,
        },
        animate:{
          x:0,
          transition:{
            type:'tween'
          }
        },
        exit:{
          x:-1000,
          transition:{
            duration:0.5
          }
        }
        // animate={navBarTrigger?"animate":'exit'}
        }} initial="initial" animate={navBarTrigger?"animate":'exit'} className=" z-10 top-1 fixed md:w-1/4  lg:w-1/4  w-3/4"    >
          
          <ul className=" flex flex-col bg-black text-white    md:gap-6 lg:gap-7 font-semibold text-base md:text-[17px] lg:text-lg md:px-8   h-screen px-3 pt-9 gap-4">
            <motion.li onClick={handleNavTrigger} variants={{
              initial:{
                x:-25,
                opacity:0
              },
              animate:{
                x:0,
                opacity:1,
                transition:{
                  duration:0.8
                }
              },
              exit:{}
            }} initial="initial" animate={navBarTrigger?"animate":'exit'}><NavLink to="/">Home</NavLink></motion.li>
            <motion.li onClick={handleNavTrigger} variants={{
              initial:{
                x:-25,
                opacity:0
              },
              animate:{
                x:0,
                opacity:1,
                transition:{
                  duration:0.8,
                  delay:0.1
                }
              },
              exit:{

              }
            }} initial="initial" animate={navBarTrigger?"animate":'exit'}><NavLink to="/about">About</NavLink></motion.li>
            <motion.li onClick={handleNavTrigger} variants={{
              initial:{
                x:-25,
                opacity:0
              },
              animate:{
                x:0,
                opacity:1,
                transition:{
                  duration:0.8,
                  delay:0.2
                }
              },
              exit:{

              }
            }} initial="initial" animate={navBarTrigger?"animate":'exit'}><NavLink to="/canvas">Canvas</NavLink></motion.li>
            <motion.li onClick={handleNavTrigger} variants={{
              initial:{
                x:-25,
                opacity:0
              },
              animate:{
                x:0,
                opacity:1,
                transition:{
                  duration:0.8,
                  delay:0.3
                }
              },
              exit:{

              }
            }} initial="initial" animate={navBarTrigger?"animate":'exit'}><NavLink to="/exhibit">Exhibitions</NavLink></motion.li>
            <motion.li onClick={handleNavTrigger} variants={{
              initial:{
                x:-25,
                opacity:0
              },
              animate:{
                x:0,
                opacity:1,
                transition:{
                  duration:0.8,
                  delay:0.35
                }
              },
              exit:{

              }
            }} initial="initial" animate={navBarTrigger?"animate":'exit'}><NavLink to="/merch">Merch</NavLink></motion.li>
            <motion.li onClick={handleNavTrigger} variants={{
              initial:{
                x:-25,
                opacity:0
              },
              animate:{
                x:0,
                opacity:1,
                transition:{
                  duration:0.8,
                  delay:0.37
                }
              },
              exit:{

              }
            }} initial="initial" animate={navBarTrigger?"animate":'exit'}><NavLink to="/collectibles">Collectibles</NavLink></motion.li>
            <motion.li onClick={handleNavTrigger} variants={{
              initial:{
                x:-25,
                opacity:0
              },
              animate:{
                x:0,
                opacity:1,
                transition:{
                  duration:0.8,
                  delay:0.4
                }
              },
              exit:{

              }
            }} initial="initial" animate={navBarTrigger?"animate":'exit'}><NavLink to="/contact">Contact</NavLink></motion.li>
          </ul>
      </motion.div>
      </AnimatePresence>
    </React.Fragment>
  )
}

export default Navbar