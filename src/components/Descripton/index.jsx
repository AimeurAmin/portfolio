import { motion } from 'framer-motion';
import React from 'react'
import { StyledDescription } from './Description.styled';

const Description = ({paragraphs}) => {
  const pVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      scale: 0
    }
  }

  const descrVariants = {
    initial: {
      opacity: 0,
      height: 0,
      paddingBlock: 0
    },
    animate: {
      opacity: 1,
      height: 'fit-content',
      transition: {
        delay: .5,
        when: "beforeChildren", // tells parent to finish animating before children start animating
        staggerChildren: .9 // time for each child to finish animate
      }
    },
    exit: {
      height: 0,
      padding: 0,
      transition: {
        delay: .5,
      }
    },
  }

  return (
    <StyledDescription
      variants={descrVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {paragraphs.map(paragraph => (
        <motion.p
          variants={pVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >{paragraph.en}</motion.p>
      ))}
    </StyledDescription>
  )
}

export default Description;
