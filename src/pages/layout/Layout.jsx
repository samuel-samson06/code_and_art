import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { useContext } from "react"
import { Context } from "../../context/Context"

function Layout() {

  const{setNavBarTrigger}=useContext(Context)

  function handleNavOutletTrigger(){
    setNavBarTrigger(false)
  }
  return (
    <div className=" flex flex-col min-h-screen">
        <header>
            <Header/>
        </header>
        <aside>
          <Navbar/>
        </aside>
        <main onClick={handleNavOutletTrigger} className=" flex-grow">
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default Layout