import React from 'react'
import Tugasku from './Tugasku'
import Navbar from '@/components/navbar/page'
import Footer from '@/components/footer/page'

const Tugas = () => {
  return (
    <div>
        <Navbar/>
        <main>
      <Tugasku/>
        </main>
        <Footer/>
    </div>
  )
}

export default Tugas
