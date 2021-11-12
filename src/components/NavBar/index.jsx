import React from 'react'
import { useLocation } from 'react-router';
import { StyledNavBar } from './NavBar.styled'

const NavBar = ({children}) => {
  const location = useLocation();
  return (
    <StyledNavBar>
      <div className="selected">
        {children.find(item => location.pathname === item.props.to)}
        <div className="undeline-item"></div>
      </div>
      <div className="other-pages">
        {children.map((item) => (location.pathname !== item.props.to && item))}
      </div>
    </StyledNavBar>
  )
}

export default NavBar
