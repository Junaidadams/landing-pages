import PropTypes from "prop-types";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Toggle from "./Toggle";
import { navVariants } from "../../constants";

const Navbar = ({ styling, textColour, bgColour }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="absolute top-2 z-20 w-screen">
      <ul
        className={`flex flex-row space-x-2 sm:space-x-6 text-sm sm:text-xl md:text-2xl font-sans tracking-wide w-full ${styling} hidden md:flex relative`}
      >
        <li className="">
          <a href="#telma">Telma</a>
        </li>
        <li className="">
          <a href="#alpino">Alpino</a>
        </li>
      </ul>

      <div className="md:hidden">
        <Toggle
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          textColour={textColour}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={navVariants}
            transition={{ duration: 0.5 }}
            className={`bg-[${bgColour}] text-[${textColour}] bg-opacity-95 absolute top-0 left-0 z-30 flex w-full flex-col space-y-6 pb-10 capitalize shadow-lg md:hidden`}
          >
            <div className="md:hidden">
              <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>

            <ul className="mx-auto  flex-row space-x-8 rounded-full p-2 capitalize ">
              <li>
                <a
                  href="#telma"
                  className="m-auto font-light tracking-tighter"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  Telma
                </a>
              </li>
              <li>
                <a
                  href="#telma"
                  className="m-auto font-light tracking-tighter"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  Telma
                </a>
              </li>
              <li>
                <a
                  href="#telma"
                  className="m-auto font-light tracking-tighter"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  Telma
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

Navbar.propTypes = {
  styling: PropTypes.string,
  textColour: PropTypes.string,
  bgColour: PropTypes.string,
};

export default Navbar;
