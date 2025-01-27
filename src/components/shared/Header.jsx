import React from 'react'
import { RiSearchLine } from "react-icons/ri";

const Header = () => {
  return (
     <header>
                {/* Title and search */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                  <div>
                    <h1 className=" text-gray-200 text-xl font-extrabold">
                      Jeager Resto
                    </h1>
                    <p className="text-gray-500">24/01/2025</p>
                  </div>
                  <form>
                    <div className="w-full relative">
                      <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                      <input
                        type="text"
                        className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none "
                        placeholder="Search"
                      />
                    </div>
                  </form>
                </div>
                {/* Tabs */}
                <nav className="text-gray-300 flex  items-center justify-between md:justify-start md:gap-8 border-b mb-6">
                  <a
                    href="#"
                    className="relative py-2 pr-4 before:w-1/2 before:h-[3px] before:absolute before:bg-[#ec7c6a] before:left-0
               before:rounded-full before:-bottom-[2px] text-[#ec7c6a]"
                  >
                    Hot dishes
                  </a>
                  <a href="#" className="py-2 pr-4">
                    Cold dishes
                  </a>
                  <a href="#" className="py-2 pr-4">
                    Soup
                  </a>
                  <a href="#" className="py-2">
                    Gril
                  </a>
                </nav>
     </header>
  )
}

export default Header