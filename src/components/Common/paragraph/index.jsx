import { ParagraphContainer } from "./styles";

const Paragraph = ({ children, ...props }) => {
  return <ParagraphContainer {...props}>{children}</ParagraphContainer>;
};

export default Paragraph;
