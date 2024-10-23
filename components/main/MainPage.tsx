import React from 'react'
import Image from 'next/image'

const MainPage = () => {
  return (
    <div className=" text-center mt-10 px-5 lg:px-60">
      <div>
        <h1 className="font-bold text-xl dark:text-white md:text-3xl lg:text-4xl">JOKI MAKALAH, TUGAS & COPYWRITING</h1>
        <p className="mt-4 hidden md:text-sm dark:text-white lg:text-base">
          Dengan <b>JokiMakalah</b>, Anda bisa menyerahkan tugas dan makalah Anda kepada kami, 
          sehingga Anda bisa fokus sepenuhnya pada hal-hal penting lainnya tanpa perlu khawatir!
        </p>
        <p className="mt-2 dark:text-white md:text-sm lg:text-base">
          Dengan <b>JokiMakalah</b>, Anda bisa menyerahkan tugas dan makalah Anda kepada kami.
        </p>
       
      </div>

      <div className="mt-5 md:grid md:grid-cols-3 gap-10">
        <div className="bg-gray-200 dark:bg-gray-800 md:my-10 rounded-xl py-10 px-10  items-center">
          <div className="flex justify-center items-center">
          <Image className="object-contain" src="/makalah.png" alt="Logo" width={100} height={100} />
          </div>
          <h1 className="font-bold text-xl dark:text-white mt-3">MAKALAH</h1>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 my-10 rounded-xl py-10 px-10  items-center">
          <div className="flex justify-center items-center">
          <Image className="object-contain" src="/tugas.png" alt="Logo" width={100} height={100} />
          </div>
          <h1 className="font-bold text-xl dark:text-white  mt-3">TUGAS</h1>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 my-10 rounded-xl py-10 px-10  items-center">
          <div className="flex justify-center items-center">
          <Image className="object-contain" src="/copywriting.png" alt="Logo" width={100} height={100} />
          </div>
          <h1 className="font-bold text-xl dark:text-white  mt-3">COPYWRITING</h1>
        </div>
        
      </div>
    </div>
  )
}

export default MainPage
