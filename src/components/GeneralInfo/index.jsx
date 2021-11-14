/* eslint-disable no-sequences */
import React from 'react'
import {StyledGeneralInfo } from'./GeneralInfo.styled'; // Import regular stylesheet
import mypic from '../../assets/imgs/mypic.png';
import firstname from '../../assets/imgs/firstname.png';
import lastname from '../../assets/imgs/lastname.png';
import cloudIcon from '../../assets/icons/cloud.png';
import githubIcon from '../../assets/icons/github.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import locationIcon from '../../assets/icons/location.png';
import hireMeIcon from '../../assets/icons/hireme.png'
import { motion } from 'framer-motion';
import { generalInfoVariants, hireMeIconVariants, listVariant, picVariant } from './variants';
import Badge from '../Badge';

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
        <div className="last-name">
          <img src={lastname} alt="last-name" />
        </div>
      </motion.div>

      <Badge className="badge first-badge">
        Web Developer
      </Badge>

      <Badge className="badge">
        <img className="badgeIcon" src={cloudIcon} alt="cloud-icon" />
        <p>Download Resume</p>
      </Badge>

      <div className="external-links">
        <a href="https://github.com/AimeurAmin/"  target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/aimeur-mohammed-amin-399a61b4/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="" />
        </a>
      </div>

      <div className="location-and-contact">
        <div className="location">
          <img src={locationIcon} alt="" />
          <p>Algiers, Algeria</p>
        </div>
        <p className="email">m.amin.aimeur@gmail.com</p>
        <p className="phone">+213-552-551-812</p>
        <p className="phone">+213-779-368-024</p>
      </div>

      <motion.button className="hire-me" initial="rest" whileHover="hover" animate="rest">
        <div className="content">
          <motion.img src={hireMeIcon} alt="hire-me" 
            variants={hireMeIconVariants}
          />
          <div className="hire-me-text">Hire Me</div>
        </div>
      </motion.button>
    </StyledGeneralInfo>
  )
}

export default GeneralInfo
