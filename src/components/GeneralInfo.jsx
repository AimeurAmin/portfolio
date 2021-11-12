import React from 'react'
import {StyledGeneralInfo } from'./GeneralInfo.styled'; // Import regular stylesheet
import mypic from '../assets/imgs/mypic.png'
import firstname from '../assets/imgs/firstname.png'
import lastname from '../assets/imgs/lastname.png'
import { motion } from 'framer-motion';

const GeneralInfo = () => {
  const boxVariants = {
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
  const picVariant = {
    initial: {
      scale: 0
    },
    animate: {
      scale: [0, 1.2, 1]
    }
  }
  const listVariant = {
    initial: {
     opacity: 0
    },
    animate: {
      opacity: 1,
    }
  }
  return (
    <StyledGeneralInfo 
      as={motion.div}
      variants={boxVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div />
      <motion.div 
        className="mypic"
        variants={listVariant, picVariant} 
      >
        <img src={mypic} alt="Logo" />
      </motion.div>

      <motion.div
        className="name-container"
        variants={listVariant}
      >
        <div className="first-name">
          <img src={firstname} alt="" />
        </div>
        <div className="first-name">
          <img src={lastname} alt="" />
        </div>
      </motion.div>
    </StyledGeneralInfo>
  )
}

export default GeneralInfo
