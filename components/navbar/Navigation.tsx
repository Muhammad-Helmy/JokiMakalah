"use client"
import { useState } from "react";
import Image from "next/image";

const Navigation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black">
      {/* Navbar untuk Desktop */}
      <div className="md:flex bg-white dark:bg-black items-center justify-between p-4 md:w-full top-0 sticky z-50 hidden">
        {/* Image di awal (start) */}
        <div className="w-12 h-12 md:w-20 md:h-12 lg:w-32 lg:h-16 md:flex ">
          <a href="/">
          <Image
            src="/JokiMakalah.png"
            alt="My image"
            layout=""
            width={120}
            height={120}
            className="block dark:hidden"
          />
          <Image
            src="/JokiMakalahWhite.png"
            alt="My image"
            layout=""
            width={120}
            height={120}
            className="hidden dark:block"
          />
          </a>
        </div>

        {/* Navigasi di akhir (end) */}
        <ul className="flex gap-14 md:gap-10 lg:gap-14 ">
          <li>
            <a className="hover:text-gray-500 font-bold" href="/">
              HOME
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-bold" href="/content/makalah">
              MAKALAH
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-bold" href="/content/tugas">
              TUGAS
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-bold" href="/content/copywriting">
              COPYWRITING
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-bold mr-16" href="/content/order">
              ORDER NOW
            </a>
          </li>
        </ul>
      </div>

      {/* Tombol dan Sidebar untuk Mobile */}
      <div className="md:hidden flex justify-between p-4 items-center">
        {/* Logo */}
        <div className="w-20 h-12">
          <Image
            src="/JokiMakalah.png"
            alt="My image"
            layout=""
            width={80}
            height={48}
            className="block dark:hidden"
          />
          <Image
            src="/JokiMakalahWhite.png"
            alt="My image"
            layout=""
            width={80}
            height={48}
            className="hidden dark:block"
          />
        </div>

        {/* Tombol untuk toggle sidebar */}
        <button onClick={toggleSidebar} className="text-black dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Overlay untuk menutup sidebar jika di-click di luar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar di sebelah kanan */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md z-40 transform dark:bg-black ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-900">
          {/* Logo di Sidebar */}
          <div className="w-20 h-12">
          <Image
            src="/JokiMakalah.png"
            alt="My image"
            layout=""
            width={80}
            height={48}
            className="block dark:hidden"
          />
          <Image
            src="/JokiMakalahWhite.png"
            alt="My image"
            layout=""
            width={80}
            height={48}
            className="hidden dark:block"
          />
        </div>

          {/* Tombol Close Sidebar */}
          <button onClick={toggleSidebar} className="hover:bg-gray-300 hover:rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigasi di Sidebar */}
        <ul className="flex flex-col p-4 gap-4">
          <li>
            <a className="hover:text-gray-500 font-bold" href="/">
              HOME
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-bold" href="/content/makalah">
              MAKALAH
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-bold" href="/content/tugas">
              TUGAS
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-bold" href="/content/copywriting">
              COPYWRITING
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-bold" href="/content/order">
              ORDER NOW
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
