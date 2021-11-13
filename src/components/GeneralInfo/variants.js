export const generalInfoVariants = {
  initial: {
    x: "-100vw"
  },
  animate: {
    x: 0,
    transition: {
      delay: .5,
      when: "beforeChildren", // tells parent to finish animating before children start animating
      staggerChildren: .6 // time for each child to finish animate
    }
  }
}

export const picVariant = {
  initial: {
    scale: 0
  },
  animate: {
    scale: [0, 1.2, 1]
  }
}

export const listVariant = {
  initial: {
   opacity: 0
  },
  animate: {
    opacity: 1,
  }
}