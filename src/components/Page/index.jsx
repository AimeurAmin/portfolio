import React from 'react'
import { Link } from 'react-router-dom'
import { links } from '../../utils/links'
import NavBar from '../NavBar'
import PageContent from '../PageContent'
import { StyledPage } from './Page.styled'

const Page = ({children}) => {
  return (
    <StyledPage>
      <NavBar>
        {links.map(link => (
          <Link to={link.path}>{link.name}</Link>
        ))}
      </NavBar>
      {children?.length !==undefined ? children?.map(item => !item.props.stickToNav ? (
          <PageContent>
            {item}
          </PageContent>
        ) : (
          item
        ))
        : !children.props.stickToNav ? (
          <PageContent>{children}</PageContent>
        ) : (children)
      }
    </StyledPage>
  )
}

export default Page
