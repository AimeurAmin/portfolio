/* eslint-disable no-sequences */
import React from 'react'
import {StyledGeneralInfo } from'./GeneralInfo.styled'; // Import regular stylesheet
import mypic from '../../assets/imgs/mypic.png'
import firstname from '../../assets/imgs/firstname.png'
import lastname from '../../assets/imgs/lastname.png'
import { motion } from 'framer-motion';
import { generalInfoVariants, listVariant, picVariant } from './variants';

const GeneralInfo = () => {
  
  return (
    <StyledGeneralInfo 
      as={motion.div}
      variants={generalInfoVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div />
      <motion.div 
        className="mypic"
        variants={listVariant, picVariant}
      >
        <motion.img src={mypic} alt="Logo" />
      </motion.div>

      <motion.div
        className="name-container"
        variants={listVariant}
      >
        <div className="first-name">
          <img src={firstname} alt="first-name" />
        </div>
        <div className="first-name">
          <img src={lastname} alt="last-name" />
        </div>
      </motion.div>

      <motion.div
        className="contact"
      >

      </motion.div>
    </StyledGeneralInfo>
  )
}

export default GeneralInfo
