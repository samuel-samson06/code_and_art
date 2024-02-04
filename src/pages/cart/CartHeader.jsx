import React from 'react'

function CartHeader() {
  return (
    <React.Fragment>
        <header className=' grid grid-cols-2 sm:grid-cols-3 gap-6 font-semibold text-lg  py-1 sm:py-8 md:py-10 '>
            <p>Art Piece</p>
            <p>Details</p>
        </header>
    </React.Fragment>
  )
}

export default CartHeader