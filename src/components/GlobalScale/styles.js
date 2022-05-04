import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionGlobalScale = styled.section`
  background: url(/images/earth-background.png),
    ${({ theme }) => theme.colors.primary.darkblue};
  background-position: top right;
  background-repeat: no-repeat;
  padding: 4rem 0;
  @media (max-width: 576px) {
    background-size: 114%;
    background-position: top 0px right -34px;
  }
`;

export const BoxGlobal = styled.div`
  max-width: 528px;
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2.75rem;
  flex-direction: rom;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;
