import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledNavBar = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  padding-block: calc(50 / 16 * .8rem);
  padding-inline: calc(100 / 16 * .8rem);
  background-color: #0F1015;
  border-top-left-radius: calc(25 / 16 * .8rem);
  border-top-right-radius: calc(25 / 16 * .8rem);
  height: calc(50/ 16 * .8rem);
  a, a:focus {
    text-decoration: none;
    color: white;
    font-size: calc(26 / 16 * 0.8rem);
    font-weight: 700;
    line-height: calc(21 / 16 * .8rem);
  }
  .selected {
    display: block;
    width: fit-content;
    .undeline-item {
      background-color: #38AE46;
      width: 100%;
      height: calc(5 / 16 * .8rem);
      border-radius: calc(20 / 16 * .8rem);
      margin-block-start: calc(10 / 16 * .8rem);
    }
  }
  .other-pages {
    display: flex;
    justify-content: flex-end;
    a {
      margin-inline-start: calc(30 / 16 * 0.8rem);
      font-weight: 500;
      :hover {
        color: #38AE46;
      }
    }
  }
`