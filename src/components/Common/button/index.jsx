import { ButtonBase, ButtonForm } from "./styles";

const Button = ({ children, link, tipo, ...props }) => {
  return (
    <>
      {tipo === "link" ? (
        <ButtonBase href={link} {...props}>
          {children}
        </ButtonBase>
      ) : (
        <ButtonForm>{children}</ButtonForm>
      )}
    </>
  );
};

export default Button;
