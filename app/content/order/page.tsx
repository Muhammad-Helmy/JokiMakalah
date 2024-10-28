import React from 'react'
import OrderSini from './OrderSini'
import Footer from '@/components/footer/page'
import Navbar from '@/components/navbar/page'

const Order = () => {
  return (
    <div>
        <Navbar/>
        <main>
      <OrderSini/>
      </main>
      <Footer/>
    </div>
  )
}

export default Order
