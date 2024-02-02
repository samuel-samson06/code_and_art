import React from 'react'
import {canvasArray} from "../../staticdataFolder/Canvas"
import {  useNavigate, useParams } from 'react-router-dom'

//   available 


function ArtPage() {
    const {id}=useParams()
    const navigate=useNavigate()

    const filter=canvasArray.filter((eachOne)=>{
        return (eachOne.id==id)
    })

    function handleReturn(){
        navigate(-1)
    }
    function handleBuy(){
        navigate(`/customerdetails`)
    }
  return (
    <React.Fragment>
        <p onClick={handleReturn} className=' bg-gray-200 cursor-default text-xl font-semibold px-2 lg:pt-10 lg:pb-0 py-3 md:text-3xl'>←</p>
        <div>
            {filter?.map((canvas)=>{
                return(
                    <div key={canvas.id} className=' md:py-10  md:flex md:justify-center md:items-center md:gap-9 bg-gray-200 px-5'>
                        <img src={canvas.img} className=' md:w-1/2' alt={`${canvas.name}`} />
                        <div className=' px-1 py-3 flex flex-col gap-1'>
                            {/* <p >Details</p> */}
                            <p className={` text-[14px] font-semibold md:text-lg `}>Type: {canvas.type}</p>
                            <p className={`${canvas.available?'bg-green-700':'red-600'} w-fit text-white font-semibold px-1 py-0.5`}>{canvas.available?'In Stock':'Out of Stock'}</p>
                            <p className=' md:text-2xl font-bold lg:text-3xl text-lg'>Piece: {canvas.name}</p>
                            <div className='lg:flex-col flex lg:gap-0  md:gap-10  justify-between'>
                                <p className=' font-semibold text-lg text-red-700 lg:text-3xl md:text-xl '>₦{canvas.price.toLocaleString()}</p>
                                <p className=' font-semibold md:text-lg lg:text-xl '>{canvas.pieces} available</p>
                            </div>
                            <div className=' flex gap-5 '>
                                <button onClick={handleBuy} className=' lg:transition-all lg:hover:bg-red-500  px-3 md:py-2 md:px-2 bg-black text-white  font-semibold py-1 mx-1 rounded'>Buy Now</button>
                                <button className='lg:transition-all lg:hover:bg-red-500 lg:hover:text-white md:py-2 md:px-2 border-[1px]  border-black px-3   font-semibold py-1 mx-1 rounded'>Add to cart</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </React.Fragment>
  )
}

export default ArtPage