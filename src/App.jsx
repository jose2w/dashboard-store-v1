import { useState } from "react";

import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLargeFill,
  RiPieChartLine,
  RiArrowDropDownLine,
  RiCloseLine,
} from "react-icons/ri";

//Components
import Sidebar from "./components/shared/Sidebar";
import { use } from "react";
import Car from "./components/shared/Car";
import Card from "./components/shared/Card";
import Header from "./components/shared/Header";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrder = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);

  };

  return (
    <div className="bg-[#262837] w-full min-h-screen " >
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder}/>
      {/* menu movil*/}
      <nav
        className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center
      justify-between
      rounded-tr-xl "
      >
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLargeFill />
        </button>
        <button onClick={toggleOrder} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4 ">
          {/* Header */}
          <Header/>
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg ">
              <RiArrowDropDownLine className="text-2xl" />
              Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <Card img="dish.png" 
            description="Speacy 
            seasoned seafood nodles"
             price="4.67" 
             inventory="20 Bowls available"/>
              {/* Card */}
            <Card img="comida.png" 
            description="Speacy 
            seasoned seafood nodles"
             price="4.67" 
             inventory="20 Bowls available"/>
              {/* Card */}
            <Card img="dish.png" 
            description="Speacy 
            seasoned seafood nodles"
             price="4.67" 
             inventory="20 Bowls available"/>
              {/* Card */}
            <Card img="comida.png" 
            description="Speacy 
            seasoned seafood nodles"
             price="4.67" 
             inventory="20 Bowls available"/>
              {/* Card */}
            <Card img="dish.png" 
            description="Speacy 
            seasoned seafood nodles"
             price="4.67" 
             inventory="20 Bowls available"/>
              {/* Card */}
            <Card img="comida.png" 
            description="Speacy 
            seasoned seafood nodles"
             price="4.67" 
             inventory="20 Bowls available"/>
              {/* Card */}
            <Card img="dish.png" 
            description="Speacy 
            seasoned seafood nodles"
             price="4.67" 
             inventory="20 Bowls available"/>
              {/* Card */}
            <Card img="comida.png" 
            description="Speacy 
            seasoned seafood nodles"
             price="4.67" 
             inventory="20 Bowls available"/>
             {/* Card */}
            <Card img="dish.png" 
            description="Speacy 
            seasoned seafood nodles"
             price="4.67" 
             inventory="20 Bowls available"/>
          </div>
        </div>
       
      </main>
    </div>
  );
}

export default App;
