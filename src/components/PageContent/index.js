import React from 'react'
import { StyledPageContent } from './PageContent.styled'

const PageContent = ({children}) => {
  return (
    <StyledPageContent>
      {children}
    </StyledPageContent>
  )
}

export default PageContent
