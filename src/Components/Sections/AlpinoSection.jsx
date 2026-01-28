import { colourTheme } from "../../../constants";
import Navbar from "../Navbar";
import { circleVariants } from "../../../constants";
import { motion } from "framer-motion";

const AlpinoSection = ({
  page2Index,
  handleSetColour,
  page2Colour,
  setPage2Index,
}) => {
  return (
    <section
      id="alpino"
      className="scroll-section relative"
      style={{
        backgroundColor: page2Colour[0],
        color: page2Colour[1],
      }}
    >
      <Navbar />

      <motion.img
        initial={{ x: -30 }}
        whileInView={{ x: [-60, 0, -60] }}
        transition={{ duration: 12, ease: "backInOut", repeat: Infinity }}
        viewport={{ once: false }}
        className="max-w-[90%] top-0 left-0 absolute opacity z-0 scale-y-[-1]"
        src="src/assets/cloudbg.png"
      />
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col">
        <div className="relative inline-flex items-center justify-center scale-75 sm:scale-90 md:scale-100 lg:scale-110 mb-12 mx-auto ">
          {/* Circle */}
          <svg
            viewBox="0 0 100 100"
            className="absolute z-0 w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke={page2Colour[1]}
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              variants={circleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </svg>

          <svg
            viewBox="0 0 17 17"
            className="relative z-10 w-20 h-20 sm:w-12 sm:h-12 md:w-14 md:h-14"
          >
            <path
              d="M8.012,1.062 L4.035,8.87 L2.709,7.569 C2.709,7.569 -0.305,14 0.063,14 L15.965,14 L15.965,13.998 L12.627,6.898 L11.644,7.51 L8.012,1.062 Z"
              fill={page2Colour[1]}
            />
          </svg>
        </div>

        <div className="text-center font-alpino mt-10">
          <h2 className="font-light sm:text-6xl text-3xl">
            Reach new heights with
          </h2>
          <h2 className="sm:text-8xl text-4xl">Alpino</h2>
        </div>
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
  );
};

export default AlpinoSection;
