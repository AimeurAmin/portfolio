import React from 'react'
import { StyledBadge } from './Badge.styled'

const Badge = ({children, className}) => {
  return (
    <StyledBadge className={className}>
      {children}
    </StyledBadge>
  )
}

export default Badge
