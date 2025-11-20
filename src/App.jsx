import "./App.css";

import { useState } from "react";

function App() {
  const colourTheme = {
    page1: [
      ["#421C3C", "#DFD1C7", "#"],
      ["#1B3347", "#30A856", "#999"],
      ["#BA2511", "#E2C041", "#E2C041"],
    ],
    page2: [
      ["main", "secondary", "highlight"],
      ["main", "secondary", "highlight"],
      ["main", "secondary", "highlight"],
    ],
  };

  const [page1Index, setPage1Index] = useState(0);
  const page1Colour = colourTheme.page1[page1Index];

  const handleSetColour = (index) => {
    setPage1Index(index);
  };

  return (
    <div className="scroll-container">
      <section
        className="scroll-section relative"
        style={{
          backgroundColor: page1Colour[0],
          color: page1Colour[1],
        }}
      >
        <nav className="absolute top-0 right-0">
          <ul className="flex flex-row space-x-2.5">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
        </nav>

        <div>
          <h2 className="font-black text-6xl font-telma">
            This font is called
          </h2>
          <h2 className="font-black text-8xl text-center font-telma">Telma</h2>
          <h2 className="font-black text-8xl text-center font-telma opacity-75">
            Telma
          </h2>
          <h2 className="font-black text-8xl text-center font-telma opacity-50">
            Telma
          </h2>
          <h2 className="font-black text-8xl text-center font-telma opacity-25">
            Telma
          </h2>
        </div>

        <div className="absolute bottom-2 left-2 flex space-x-2">
          {colourTheme.page1.map((colors, idx) => (
            <button
              key={idx}
              style={{
                opacity: page1Index === idx ? 1 : 0.8,
                backgroundColor: colors[1],
                color: colors[0],
              }}
              onClick={() => handleSetColour(idx)}
              className={`w-10 h-10 rounded-full inline-flex items-center justify-center shadow-2xl`}
            >
              <span
                className="w-1/2 h-full rounded-l-full"
                style={{ background: colors[0] }}
              ></span>
              <span
                className="w-1/2 h-full bg-white rounded-r-full"
                style={{ background: colors[1] }}
              ></span>
              <span className="absolute text-2xl font-black text-white">
                {" "}
                {idx + 1}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="scroll-section bg-[#ECE9DA] text-[#C47668] relative">
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
      <section className="scroll-section">
        <h2>Landing Page 3</h2>
      </section>
      {/* Add more sections as needed */}
    </div>
  );
}

export default App;
