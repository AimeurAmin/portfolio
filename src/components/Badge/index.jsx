import { motion } from 'framer-motion'
import React from 'react'
import { StyledBadge } from './Badge.styled'

const Badge = ({children, className, variants}) => {
  return (
    <StyledBadge as={motion.div} variants={variants} className={className}>
      {children}
    </StyledBadge>
  )
}

export default Badge
