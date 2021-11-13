import { motion } from 'framer-motion';
import React from 'react'
import { StyledDescription } from './Description.styled';
import { descrVariants, pVariants } from './variants';

const Description = ({paragraphs}) => {
  
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
