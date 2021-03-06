import styled from "styled-components";
import { motion } from "framer-motion";
export const BoxOne = styled.div`
  max-width: 620px;
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 6.625rem;
  flex-direction: row;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const Article = styled(motion.article)``;
