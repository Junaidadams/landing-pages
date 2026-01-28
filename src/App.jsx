import "./App.css";

import { useState } from "react";
import Navbar from "./Components/Navbar";
import { motion, AnimatePresence, animate } from "framer-motion";
import { colourTheme } from "../constants";

import AlpinoSection from "./Components/Sections/AlpinoSection";
import TelmaSection from "./Components/Sections/TelmaSection";

function App() {
  const [page1Index, setPage1Index] = useState(0);
  const page1Colour = colourTheme.page1[page1Index];

  const [page2Index, setPage2Index] = useState(0);
  const page2Colour = colourTheme.page2[page2Index];

  const handleSetColour = (setPageIndex, index) => {
    setPageIndex(index);
  };

  return (
    <div className="scroll-container">
      <TelmaSection
        page1Colour={page1Colour}
        handleSetColour={handleSetColour}
        page1Index={page1Index}
        setPage1Index={setPage1Index}
      />
      <AlpinoSection
        page2Colour={page2Colour}
        handleSetColour={handleSetColour}
        page2Index={page2Index}
        setPage2Index={setPage2Index}
      />

      <section
        id="telma"
        className="scroll-section bg-[#ECE9DA] text-[#C47668] relative"
      >
        <nav className="absolute top-0 right-0">
          <ul className="flex flex-row space-x-2.5">
            <li className="hover:cursor-pointer">Home</li>
            <li className="hover:cursor-pointer">About</li>
            <li className="hover:cursor-pointer">Contact</li>
            <li className="hover:cursor-pointer">Services</li>
          </ul>
        </nav>
        <h2 className="font-black text-5xl">Landing Page 2</h2>
      </section>
      <section id="telma" className="scroll-section">
        <h2>Landing Page 3</h2>
      </section>
      {/* Add more sections as needed */}
    </div>
  );
}

export default App;
