import { canvasArray } from "../../staticdataFolder/Canvas"
import { NavLink } from "react-router-dom"

function Canvas() {
  return (
    <div>
      <p className=" text-center md:py-12 sm:py-8 py-4 font-semibold text-2xl">Canvas</p>
      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-5 px-2">
        {canvasArray.map((eachCanvas)=>{
          return(
              <NavLink to={`/${eachCanvas.id}`} key={eachCanvas.id}>
                <div  className=' items-center p-2 border-2 border-black flex flex-col gap-1'>
                  <img src={eachCanvas.img} alt="" className=' w-60'/>
                  <p className=' text-center text-xs font-semibold uppercase'>{eachCanvas.name}</p>
                  <p className=' font-medium text-sm text-slate-700'>{eachCanvas.type}</p>
                  <p className=' border-t-[1px] border-black font-bold '>₦{eachCanvas.price.toLocaleString()}</p>
                </div>
              </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default Canvas