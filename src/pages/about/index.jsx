import React from 'react'
import { Link } from 'react-router-dom'
import Description from '../../components/Descripton'
import NavBar from '../../components/NavBar'
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
