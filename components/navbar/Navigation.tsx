import Image from 'next/image';

const Navigation = () => {
  return (
    <div className="bg-white text-black flex items-center container justify-between p-4 md:lg:w-full lg:max-w-full top-0 sticky z-50">
      {/* Image di awal (start) */}
      <Image className="ml-16" src="/JokiMalakalah.png" alt="Logo" width={120} height={120} />
      
      {/* Navigasi di akhir (end) */}
      <ul className="flex gap-14">
        <li><a className="hover:text-gray-500 font-bold" href="/">HOME</a></li>
        <li><a className="hover:text-gray-500 font-bold" href="/makalah">MAKALAH</a></li>
        <li><a className="hover:text-gray-500 font-bold" href="/tugas">TUGAS</a></li>
        <li><a className="hover:text-gray-500 font-bold mr-16" href="/contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navigation;
