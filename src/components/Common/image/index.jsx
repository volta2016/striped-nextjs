import { HeroImage } from "./styles";

const NextImage = ({ src, alt, width, height }) => {
  return <HeroImage src={src} alt={alt} width={width} height={height} />;
};

export default NextImage;
