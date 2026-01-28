export const colourTheme = {
  page1: [
    ["#421C3C", "#DFD1C7", "#"],
    ["#1B3347", "#30A856", "#999"],
    ["#BA2511", "#E2C041", "#E2C041"],
  ],
  page2: [
    ["#DFD7C6", "#5E5C57", "highlight"],
    ["#977EDB", "#F0ECF8", "highlight"],
    ["#AFBEA3", "#244548", "highlight"],
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

export const navVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.01,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
