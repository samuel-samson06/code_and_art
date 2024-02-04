import React, { useState } from "react"
import {Context} from "./context/Context"
import CodeArt from "./CodeArt"

function App() {

  const [navBarTrigger, setNavBarTrigger] = useState(false)
  const [cart,setCart]=useState([])
  const value={navBarTrigger,setNavBarTrigger,cart,setCart}


  return (
    <React.Fragment>
      <Context.Provider value={value}>
        <CodeArt/>
      </Context.Provider>
    </React.Fragment>
  )
}

export default App