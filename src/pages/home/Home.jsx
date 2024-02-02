import React from "react"
import ImageLinks from "./ImageLinks"
import CanvasSection from "./CanvasSection"


function Home() {
  return (
    <React.Fragment>
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