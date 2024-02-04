import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { useNavigate } from 'react-router-dom';

function CartFooter() {
    const {cart}=useContext(Context)
    const navigate=useNavigate()

    console.log(cart);
    const sumTotal=cart.reduce(function(accumulator,eachItem){
        return eachItem.total+accumulator
    },0)
    
    function handleCheckout(){
        navigate('customerdetails')
    }


  return (
    <React.Fragment>
        <div className=' flex flex-col gap-4 text-lg font-semibold'>
            <div className=' gap-2 flex flex-col justify-between'>
                <p>Sum Total: {sumTotal.toLocaleString()} </p>
                <p>Number of Item(s): {cart.length}</p>
            </div>
            <button onClick={handleCheckout} className=' bg-black py-1 rounded text-white px-2'>Checkout</button>
        </div>
    </React.Fragment>
  )
}

export default CartFooter