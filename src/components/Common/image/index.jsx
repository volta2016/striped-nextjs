import { HeroImage, Image } from "./styles";

const NextImage = ({ src, alt, width, height, className }) => {
  return (
    <>
      {className === "image" ? (
        <Image src={src} height={height} alt={alt} className={className} />
      ) : (
        <HeroImage src={src} alt={alt} width={width} height={height} />
      )}
    </>
  );
};

export default NextImage;
