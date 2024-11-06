import {
  FaBell,
  FaChevronDown,
  FaSearch,
  FaShoppingCart
} from "react-icons/fa";
import { GiFoodChain } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex items-center justify-center w-full h-16 gap-8 border-b border-slate-100">
      <div className="flex items-center gap-1 cursor-pointer">
        <GiFoodChain size={48} className="text-red-500" />
        <h1 className="text-2xl font-extrabold tracking-widest text-red-500 uppercase">
          QuikBites
        </h1>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          className="flex-1 w-full px-6 py-2 text-gray-600 bg-gray-100 border-none outline-none resize-none rounded-2xl focus:ring-2 focus:ring-red-500"
        />
        <button className="absolute p-2 text-white transition-colors duration-300 transform -translate-y-1/2 bg-red-500 rounded-full right-2 top-1/2 hover:bg-red-600 hover:text-white">
          <FaSearch size={18} />
        </button>
      </div>
      <div className="flex items-center gap-4 cursor-pointer">
        <button className="inline-flex items-center justify-center w-48 gap-2 px-4 py-2 transition-colors duration-300 bg-gray-100 rounded-2xl hover:bg-gray-200">
          <IoLocationSharp />
          <span className="font-extrabold">Address Here</span>
          <FaChevronDown />
        </button>

        {/* Toggle Delivery or Pickup */}
        <div className="flex items-center gap-4 transition-colors duration-300 bg-gray-100 rounded-2xl hover:bg-gray-200">
          <div className="px-4 py-2 font-bold text-white bg-black rounded-3xl ">
            <button>Delivery</button>
          </div>
          <div className="px-4 py-2 font-bold rounded-2xl">
            <button>Pickup</button>
          </div>
        </div>

        <button className="inline-flex items-center justify-center p-4 transition-colors duration-300 bg-gray-100 rounded-full hover:bg-gray-200">
          <FaBell />
        </button>

        <button className="inline-flex items-center gap-2 px-6 py-2 text-xl text-white transition-colors duration-300 bg-red-500 hover:bg-red-600 rounded-3xl">
          <FaShoppingCart />
          <span className="font-extrabold">2</span>
        </button>
      </div>
    </header>
  );
};
export default Header;
