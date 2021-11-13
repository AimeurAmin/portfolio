import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledDescription = styled(motion.div)`
  background-color: #0F1015;
  padding-inline: calc(144 / 16 * .8rem);
  padding-block-end: calc(20 / 16 * .8rem);
  p {
    margin-block-end: calc(26 / 16 * .8rem);
    text-indent: calc(40 / 16 * .8rem);
    font-size: calc(20 / 16 * .8rem);
    line-height: calc(28 / 16 * .8rem)
  }
`;