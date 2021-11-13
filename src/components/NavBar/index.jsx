import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { StyledNavBar } from './NavBar.styled'

const NavBar = ({children}) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(undefined)
  const mainLinkVariant = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      scale: [0, 1]
    },
    exit: {
      opacity: [1, 0],
      scale: [1, 0]
    }
  }

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
          <div key={index}>
            {item}
          </div>
        )))}
      </div>
    </StyledNavBar>
  )
}

export default NavBar
