import React, { useContext } from 'react'
import CartHeader from './CartHeader'
import { Context } from '../../context/Context'
import {BsCartX} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import CartFooter from './CartFooter'

function Cart() {
    const {cart,setCart}=useContext(Context)
    const navigate=useNavigate()

    function removeItemFromCart(itemUUID){
        const filteredItems=cart.filter(function(eachItem){
            return eachItem.uniqueId!==itemUUID
        })
        setCart(filteredItems)
    }

    function handleBack(){
        navigate(-1)
    }

    return (
    <React.Fragment>
        <p onClick={handleBack} className=' md:pt-10 lg:pt-12 sm:pt-3 md: text-2xl px-2 py-1'>←</p>
        <div className=' flex flex-col px-5 gap-2 '>
            <header>
                {cart.length!==0 && <CartHeader/>}
            </header>
            <main className=' flex flex-col gap-3'>
                {
                cart.length===0?
                <div className=' py-5 justify-center sm:text-xl md:text-2xl lg:text-3xl gap-3 text-lg font-semibold flex items-center'>
                    <p>Your Cart Is Currently Empty</p>
                    <BsCartX className=' text-2xl'/>
                </div>
                :cart.map(function(eachCartItem){
                        return(
                            <div className=' grid grid-cols-2 sm:flex  items-center  gap-4 border-b-[1px] border-black py-2 ' key={eachCartItem.uniqueId}>
                               <aside className=' sm:flex-1'>
                                <img src={eachCartItem.img} alt={eachCartItem.name} className=' w-32 sm:w-36 md:w-44 border-black border-[2px] px-2 py-2' />
                               </aside>
                               <div className=' sm:flex-1  flex  flex-col '>
                                <p className=' sm:text-base md:text-lg lg:text-xl text-sm flex-grow font-bold'>{eachCartItem.name}</p>
                                <p className=' sm:text-sm md:text-base lg:text-lg text-xs font-bold'>Price: ₦{eachCartItem.price.toLocaleString()}</p>
                                <p className=' sm:text-sm md:text-base lg:text-lg text-xs font-semibold'>Size: {eachCartItem.size}</p>
                                <p className=' sm:text-sm md:text-base lg:text-lg font-semibold text-sm'>Qty: {eachCartItem.quantity}</p>
                                <p className=' sm:text-sm md:text-base lg:text-lg text-sm font-semibold'>Total: ₦{(Number(eachCartItem.quantity)*eachCartItem.price).toLocaleString() }</p>
                               </div>
                               <button onClick={function(){
                                return removeItemFromCart(eachCartItem.uniqueId)
                               }} className='  sm:flex-1 grid col-span-2  py-1 rounded-md  bg-black text-white'>Remove</button>
                            </div>
                        )
                    })
                }
            </main>
            <div>
             {cart.length!==0 && <CartFooter/>}
            </div>
        </div>
    </React.Fragment>
  )
}

export default Cart