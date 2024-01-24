import React, { useState } from "react"
import {Context} from "./context/Context"
import CodeArt from "./CodeArt"

function App() {

  const [navBarTrigger, setNavBarTrigger] = useState(false)
  const value={navBarTrigger,setNavBarTrigger}


  return (
    <React.Fragment>
      <Context.Provider value={value}>
        <CodeArt/>
      </Context.Provider>
    </React.Fragment>
  )
}

export default App