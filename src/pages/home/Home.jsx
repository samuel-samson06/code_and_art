import React from "react"
import ImageLinks from "./ImageLinks"
import CanvasSection from "./CanvasSection"
import Sliders from "./Sliders"


function Home() {
  return (
    <React.Fragment>
      <div>
        <Sliders/>
      </div>
      <div>
        <ImageLinks/>
      </div>
      <section>
        <CanvasSection/>
      </section>
    </React.Fragment>
  )
}

export default Home