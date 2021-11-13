import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { StyledNavBar } from './NavBar.styled'
import { linkVariants, mainLinkVariant } from './variants';

const NavBar = ({children}) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(undefined)
  

  useEffect(() => {
    if(currentPath) {
      setTimeout(() => {
        setCurrentPath(location.pathname)
      }, 1000);
    } else {
      setCurrentPath(location.pathname)
    }
  }, [location])

  return (
    <StyledNavBar>
      <motion.div
        variants={mainLinkVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        className="selected"
        key={location.key}
      >
        {children.find(item => (currentPath === item.props.to))}
        <div className="undeline-item"></div>
      </motion.div>
      <div className="other-pages">
        {children.map((item, index) => (currentPath !== item.props.to && (
          <motion.div key={item.id}
            variants={linkVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {item}
          </motion.div>
        )))}
      </div>
    </StyledNavBar>
  )
}

export default NavBar
