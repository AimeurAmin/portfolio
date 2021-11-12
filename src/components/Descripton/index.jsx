import React from 'react'
import { StyledDescription } from './Description.styled';

const Description = ({paragraphs}) => {
  return (
    <StyledDescription>
      {paragraphs.map(paragraph => (
        <p>{paragraph.en}</p>
      ))}
    </StyledDescription>
  )
}

export default Description;
