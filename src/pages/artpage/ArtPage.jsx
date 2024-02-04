import React, {  useContext, useEffect, useState } from 'react'
import {canvasArray} from "../../staticdataFolder/Canvas"
import {  useNavigate, useParams } from 'react-router-dom'
import { Context } from '../../context/Context'
import {v4} from "uuid"

//   available 
function ArtPage() {
    const {id}=useParams()
    const navigate=useNavigate()
    const {setCart}=useContext(Context)
    const [size, setSize] = useState("20 x 20")
    const [art,setArt]=useState([])
    const [artPrice,setArtPrice]=useState(0)
    
    const [quantity,setQuantity]=useState('1')
    const [buttonColor,setButtonColor]=useState({small:false,medium:false,large:false})

    useEffect(function(){
        const filter=canvasArray.filter((eachOne)=>{
            return (eachOne.id==id)
        })
        setArt(filter)
        setArtPrice(filter[0].price)
    },[id])

    function handleReturn(){
        navigate(-1)
    }

    // Main BUTTON FUNCTIONS
//FUNCTIONS FOR  CONTROLLING BUTTON COLOR FOR GOOD USER XPERIENCE
    function smallSizeButton(){
        setButtonColor({small:true,medium:false,large:false})
        setSize('20 x 20')
        setArtPrice(35000)
    } 
    function mediumSizeButton(){
        setButtonColor({small:false,medium:true,large:false})
        setSize("30 x 30")
        setArtPrice(60000)
    }
    function largeSizeButton(){
        setButtonColor({small:false,medium:false,large:true})
        setSize("50 x 50")
        setArtPrice(120000)
    }
//BUTTON FUNCTION WHEN ART PIECE HAS BEEN ADDED TO CART 
    function addToCart(){
        const {id,img,name}=art[0]
        const artToCartInfo={id,img,name,price:artPrice,size,quantity,uniqueId:v4(),total:Number(quantity)*artPrice}
        // console.log(artToCartInfo);
        setCart(function(cart){
            return [...cart,artToCartInfo]
        })
        // console.log(cart);
        alert("Item Added to Cart")
    }
    
  return (
    <React.Fragment>
        <p onClick={handleReturn} className=' bg-gray-200 cursor-default text-xl font-semibold px-2 lg:pt-10 lg:pb-0 py-3 md:text-3xl'>←</p>
        <div>
            {art?.map((canvas)=>{
                return(
                    // CONTAINER FOR WHEN THE COMPONENT RENDERS THE ART PIECE USER SELECTS
                    <div key={canvas.id} className=' md:py-10  md:flex md:justify-center md:items-center md:gap-9 bg-gray-200 px-5'>
                        <img src={canvas.img} className=' md:w-1/2' alt={`${canvas.name}`} />
                        <div className=' px-1 py-3 flex flex-col gap-1'>
                            {/* ART PIECE DETAILS FROM DB SELECTED BY THE USER */}
                            <p className={` text-[14px] font-semibold md:text-lg `}>Type: {canvas.type}</p>
                            <p className={`${canvas.available?'bg-green-700':'red-600'} w-fit text-white font-semibold px-1 py-0.5`}>{canvas.available?'In Stock':'Out of Stock'}</p>
                            <p className=' md:text-2xl font-bold lg:text-3xl text-lg'>Piece: {canvas.name}</p>
                            <div className='lg:flex-col flex lg:gap-0  md:gap-10  justify-between'>
                                <p className=' font-semibold text-lg text-red-700 lg:text-3xl md:text-xl '>₦{artPrice.toLocaleString()}</p>
                            </div>
                            <p className=' font-semibold pb-3 pt-1'>Size: {size}</p>
                            <div className=' py-3 flex gap-5'>
                                <button onClick={smallSizeButton} className={` ${buttonColor.small&&"  transition-all bg-red-500  text-white"} border-2 border-black py-0.5 px-1 font-semibold`}>Small</button>
                                <button onClick={mediumSizeButton} className={` ${buttonColor.medium&&"  transition-all bg-red-500  text-white"} border-2 border-black py-0.5 px-1 font-semibold`}>Medium</button>
                                <button onClick={largeSizeButton} className={` ${buttonColor.large&&"  transition-all bg-red-500  text-white"} border-2 border-black py-0.5 px-1 font-semibold`}>Large</button>
                            </div>
                            <label htmlFor="" className=' uppercase gap-2 font-semibold py-2 pb-3 flex items-center'>
                                <p>Quantity:</p>
                                <select name="" onChange={(e)=>{ e.preventDefault(); setQuantity(e.target.value)}} value={quantity} className=" font-semibold outline-none  w-20 rounded px-0.5 py-0.5">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </label>
                            <div>
                                <button onClick={addToCart} className='lg:transition-all lg:hover:bg-red-500 lg:hover:text-white md:py-2 md:px-2 border-[1px]  border-black px-3   font-semibold py-1  rounded'>Add to cart</button>
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