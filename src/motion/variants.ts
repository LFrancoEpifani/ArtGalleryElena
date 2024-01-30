


export const animationTitle = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

//Animación imágenes galería
export const animationLeftImages = {
  hidden: {
    x: -1000,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};

export const animationRightImages = {
  hidden: {
    x: 1000,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};



//Variantes para mostrar palabra por palabra.
export const container = {
  hidden: {
    opacity: 0,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1 * i,
    },
  }),
};

export const child = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};


//about

export const scrollTextVariants = {
  oculto: { y: 100, opacity: 0 },
  visible1: { y: 0, opacity: 1 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 1,
    },
  },
};