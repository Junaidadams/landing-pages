import PropTypes from "prop-types";
import { easeInOut, motion } from "framer-motion";

const FlipLink = ({ children, subText, color }) => {
  const duration = 0.25;
  const stagger = 0.025;

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black font-san uppercase sm:text-7xl  md:text-8xl "
      style={{ color: color || "#f1f5f9 " }}
    >
      <div>
        {children.split("").map((letter, index) => {
          return (
            <motion.span
              transition={{
                duration: duration,
                ease: easeInOut,
                delay: stagger * index,
              }}
              className="inline-block"
              variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
              key={index}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {subText.split("").map((letter, index) => {
          return (
            <motion.span
              transition={{
                duration: duration,
                ease: easeInOut,
                delay: stagger * index,
              }}
              className="inline-block"
              variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
              key={index}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};

FlipLink.propTypes = {
  children: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default FlipLink;
