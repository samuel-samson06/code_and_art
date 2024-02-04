import React from 'react'
import { canvasArray } from '../../staticdataFolder/Canvas'
import { NavLink } from 'react-router-dom'

function CanvasSection() {
  return (
    <React.Fragment>
        <div className=' py-5 bg-gray-200'>
            <p className=' pb-5 font-semibold text-xl text-center'>LATEST CANVAS</p>
            <section className=' grid grid-cols-2 md:grid-cols-4 md:gap-5 sm:px-3 items-center gap-5'>
                {
                    canvasArray.slice(4,8).map((eachCanvas)=>{
                        return (
                            <NavLink to={`/${eachCanvas.id}`} key={eachCanvas.id}>
                                <div key={eachCanvas.id} className=' items-center p-2 border-2 border-black flex flex-col gap-1'>
                                    <img src={eachCanvas.img} alt="" className=' w-60'/>
                                    <p className=' font-semibold uppercase'>{eachCanvas.name}</p>
                                    <p className=' font-medium text-sm text-slate-700'>{eachCanvas.type}</p>
                                    <p className=' border-t-[1px] border-black font-bold '>₦{eachCanvas.price.toLocaleString()}</p>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </section>
        </div>

    </React.Fragment>
  )
}

export default CanvasSection