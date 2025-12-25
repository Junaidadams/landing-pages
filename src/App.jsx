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
      ["#DFD7C6", "#5E5C57", "highlight"],
      ["#977EDB", "#F0ECF8", "highlight"],
      ["#F9F1C5", "#E091B5", "highlight"],
    ],
  };

  const [page1Index, setPage1Index] = useState(0);
  const page1Colour = colourTheme.page1[page1Index];

  const [page2Index, setPage2Index] = useState(0);
  const page2Colour = colourTheme.page2[page2Index];

  const handleSetColour = (setPageIndex, index) => {
    setPageIndex(index);
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
        <nav className="absolute top-2 ">
          <ul className="flex flex-row space-x-2 sm:space-x-6 text-sm sm:text-xl md:text-2xl font-sans tracking-wide">
            <li className="hover:cursor-pointer">Home</li>
            <li className="hover:cursor-pointer">About</li>
            <li className="hover:cursor-pointer">Contact</li>
            <li className="hover:cursor-pointer">Services</li>
          </ul>
        </nav>

        <div className="flex flex-col xl:flex-row w-full">
          <div className="font-black sm:text-5xl md:text-6xl text-4xl text-center font-telma bg-linear-to-b from-[#ffffff07] to-[#fff0] rounded-full  w-5/6  mx-auto lg:w-1/3 mb-2">
            <h2 className="font-black sm:text-6xl text-3xl font-telma">
              This font is called
            </h2>
            <h2 className="">"Telma"</h2>
            <h2 className=" opacity-60">"Telma"</h2>
            <h2 className=" opacity-25">"Telma"</h2>
            <h2 className=" opacity-5">"Telma"</h2>
          </div>
          <div className="m-auto w-5/6 lg:w-1/3 flex flex-col space-y-2">
            <h2 className="font-black text-center xl:text-left text-xl sm:text-2xl font-telma">
              You should use it
            </h2>
            <p className="text-sm sm:text-lg font-sans text-center xl:text-left">
              Telma is an informal handwritten typeface family. Its letterforms
              have a noticeable contrast between thick and thin, which gives
              certain characters' quirky structures a more formal
              characteristic.
            </p>
            <button
              className="text-xl py-4 px-3 mt-1 m-auto xl:mr-auto xl:ml-0 rounded-sm font-black font-telma animate-pulse hover:animate-none hover:cursor-pointer hover:shadow-lg shadow-[#ffffff1e]"
              style={{
                background: page1Colour[1],
                color: page1Colour[0],
              }}
            >
              Telma More
            </button>
          </div>
        </div>

        <nav>
          <h1></h1>
        </nav>

        <div className="absolute bottom-2 left-2 flex space-x-2">
          {colourTheme.page1.map((colors, idx) => (
            <button
              key={idx}
              style={{
                opacity: page1Index === idx ? 1 : 0.65,
                backgroundColor: colors[1],
                color: colors[0],
              }}
              onClick={() => handleSetColour(setPage1Index, idx)}
              className={`w-10 h-10 rounded-full inline-flex items-center justify-center shadow-2xl p-1 hover:cursor-pointer`}
            >
              <span
                className="w-1/2 h-full rounded-l-full"
                style={{ background: colors[0] }}
              ></span>
              <span
                className="w-1/2 h-full bg-white rounded-r-full"
                style={{ background: colors[1] }}
              ></span>
              {/* <span className="absolute text-2xl font-black text-white">
                {" "}
                {idx + 1}
              </span> */}
            </button>
          ))}
        </div>
      </section>
      <section
        className="scroll-section relative"
        style={{
          backgroundColor: page2Colour[0],
          color: page2Colour[1],
        }}
      >
        <nav className="absolute top-2">
          <ul className="flex flex-row space-x-2 sm:space-x-6 text-sm sm:text-xl">
            <li className="hover:cursor-pointer">Home</li>
            <li className="hover:cursor-pointer">About</li>
            <li className="hover:cursor-pointer">Contact</li>
            <li className="hover:cursor-pointer">Services</li>
          </ul>
        </nav>

        <div className="font-light sm:text-8xl text-4xl text-center font-alpino rounded-full px-2 py-14">
          <h2 className="font-light sm:text-6xl text-3xl font-alpino">
            Reach new heights with
          </h2>
          <h2 className="font-alpino">Alpino</h2>
        </div>

        <div className="absolute bottom-2 left-2 flex space-x-2">
          {colourTheme.page2.map((colors, idx) => (
            <button
              key={idx}
              style={{
                opacity: page2Index === idx ? 1 : 0.65,
                backgroundColor: colors[1],
                color: colors[0],
              }}
              onClick={() => handleSetColour(setPage2Index, idx)}
              className={`w-10 h-10 rounded-full inline-flex items-center justify-center shadow-2xl p-1 hover:cursor-pointer`}
            >
              <span
                className="w-1/2 h-full rounded-l-full"
                style={{ background: colors[0] }}
              ></span>
              <span
                className="w-1/2 h-full bg-white rounded-r-full"
                style={{ background: colors[1] }}
              ></span>
              {/* <span className="absolute text-2xl font-black text-slate-700">
                {" "}
                {idx + 1}
              </span> */}
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
