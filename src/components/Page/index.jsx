import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import { links } from '../../utils/links'
import NavBar from '../NavBar'
import PageContent from '../PageContent'
import { StyledPage } from './Page.styled'

const Page = ({children}) => {
  const boxVariants = {
    initial: {
      opacity: 0,
      scale: 0
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        duration: .7,
        when: "beforeChildren", // tells parent to finish animating before children start animating
        staggerChildren: .6 // time for each child to finish animate
      }
    }
  }
  return (
    <StyledPage as={motion.div} variants={boxVariants} initial="initial" animate="animate">
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
