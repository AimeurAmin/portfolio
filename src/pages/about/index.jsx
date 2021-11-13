import React from 'react'
import Description from '../../components/Descripton'
import Page from '../../components/Page'
import { description } from '../../utils/texts'
import { StyledAbout } from './styles'

const About = () => {
  return (
    <Page>
      <Description paragraphs={[...description]} stickToNav={true}/>
      <StyledAbout >
        About me page content
      </StyledAbout>
    </Page>
  )
}

export default About
