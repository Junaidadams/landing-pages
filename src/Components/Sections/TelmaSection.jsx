import { colourTheme } from "../../../constants";
import Navbar from "../Navbar";

const TelmaSection = ({
  page1Index,
  handleSetColour,
  page1Colour,
  setPage1Index,
}) => {
  return (
    <section
      id="telma"
      className="scroll-section relative"
      style={{
        backgroundColor: page1Colour[0],
        color: page1Colour[1],
      }}
    >
      <Navbar textColour={page1Colour[1]} bgColour={page1Colour[0]} />

      <div className="flex flex-col xl:flex-row w-full">
        <div className="font-black sm:text-5xl md:text-6xl text-4xl text-center font-telma  from-[#ffffff07] to-[#fff0] rounded-full  w-5/6  mx-auto lg:w-1/3 mb-2">
          <img
            src="/hand.png"
            alt="hand reaching with pencil"
            className="grayscale rounded-b-full absolute z-0 opacity-40 w-9/12 m-auto top-1/2 left-1/2 -translate-1/2 "
          />
          <div className="z-20 relative">
            <h2 className="font-black sm:text-6xl text-3xl font-telma  ">
              This font is called
            </h2>
            <h2 className="">"Telma"</h2>
            <h2 className=" opacity-60 ">"Telma"</h2>
            <h2 className=" opacity-25 ">"Telma"</h2>
            <h2 className=" opacity-5 ">"Telma"</h2>
          </div>
        </div>
        <div className="m-auto w-5/6 lg:w-1/3 flex flex-col space-y-2 z-20 relative">
          <h2 className="font-black text-center xl:text-left text-xl sm:text-2xl font-telma">
            You should use it
          </h2>
          <p className="text-sm sm:text-lg font-sans text-center xl:text-left">
            Telma is an informal handwritten typeface family. Its letterforms
            have a noticeable contrast between thick and thin, which gives
            certain characters' quirky structures a more formal characteristic.
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
          </button>
        ))}
      </div>
    </section>
  );
};

export default TelmaSection;
