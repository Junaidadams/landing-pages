export const colourTheme = {
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

export const circleVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1.1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};
