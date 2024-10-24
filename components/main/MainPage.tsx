import React from 'react'
import Image from 'next/image'
import { FaWhatsapp } from "react-icons/fa";

const MainPage = () => {
  return (
    <div className=" text-center">
      <div className="mt-10 px-5 lg:px-60">
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

      <div className="bg-skydark xl:h-[38rem] mt-10 px-5 lg:px-44">
        <p> &nbsp;</p>
        <p className="mt-16 font-bold text-lg text-white md:text-3xl lg:text-3xl xl:text-4xl ">KENAPA HARUS JOKIMAKALAH ? </p>
        <p className="mt-2 text-white md:text-sm lg:text-base xl:flex hidden">
          <b>JOKIMAKALAH</b> adalah tempat joki tugas murah yang dapat Anda akses dengan cepat. Kami menawarkan layanan terbaik dengan fast response, memudahkan kebutuhan Anda tepat waktu dan sesuai harapan.
        </p>
        <p className="mt-2 text-white md:text-sm lg:text-base block xl:hidden">
          <b>JOKIMAKALAH</b> adalah tempat joki tugas murah yang dapat Anda akses dengan cepat.
        </p>

        {/* section */}
        <div className="mt-5 md:grid md:grid-cols-3 gap-10 text-white">
          <div className=" md:my-10 rounded-xl py-10 px-10  items-center">
            <div className="flex justify-center items-center">
              <Image className="object-contain" src="/response.png" alt="Logo" width={100} height={100} />
            </div>
            <h2 className=" text-xl mt-7 font-semibold">FAST RESPONSE</h2>
            <h2 className="xl:text-sm text-xs mt-3 ">Respon cepat, langsung tanggap</h2>
          </div>
          <div className=" my-10 rounded-xl py-10 px-10  items-center">
            <div className="flex justify-center items-center">
              <Image className="object-contain" src="/taskdone.png" alt="Logo" width={100} height={100} />
            </div>
            <h2 className=" text-xl mt-7 font-semibold">TEPAT WAKTU</h2>
            <h2 className="xl:text-sm text-xs mt-3 md:mt-10 lg:mt-3">Selesai sesuai deadline Anda</h2>
          </div>
          <div className=" my-10 rounded-xl py-10 px-10  items-center">
            <div className="flex justify-center items-center">
              <Image className="object-contain" src="/rate.png" alt="Logo" width={100} height={100} />
            </div>
            <h2 className=" text-xl mt-7 font-semibold">HARGA BERSAHABAT</h2>
            <h2 className="xl:text-sm text-xs mt-3">Kualitas top dengan harga hemat</h2>
          </div>
        </div>
      </div>

      <div className="mt-10 px-5 lg:px-60">
        <div className="bg-skymain h-28 md:h-32 rounded-xl text-white md:grid md:grid-cols-2">
          <div className="hidden md:block">
            <p> &nbsp;</p>
            <p className="flex justify-start ml-10 text-xl font-medium">Contact</p>
            <p className="mt-2 text-white md:text-sm lg:text-base xl:flex hidden">
              Butuh bantuan tugas, makalah, atau copywriting? Jokimakalah siap membantu! Layanan terpercaya dan cepat, hasil berkualitas dan tepat waktu. Hemat waktu, biar kami yang kerjakan!
            </p>
            <p className="mt-2 ml-10 text-start text-white text-xs xl:text-base block xl:hidden">
              Jokimakalah siap membantu! Layanan terpercaya dan cepat, hasil berkualitas dan tepat waktu.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <a href="https://wa.me/+6285648652583" className="flex justify-center items-center text-center mt-8 md:mt-0">
              <div className="h-12 w-60 bg-white rounded-md justify-center items-center flex">
                <p className="text-xs"> &nbsp;</p>
                <div className="text-center items-center flex justify-center">
                  <p className="text-green-500 text-lg"><FaWhatsapp /></p>
                  <p className="text-black font-semibold ml-2">Kontak Kami</p>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MainPage
