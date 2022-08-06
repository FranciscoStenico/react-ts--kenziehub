import { PrimaryButton, SecondaryButton } from "./styles";

const Button = ({ buttonStyle, children, handler, submit = false }) =>
  buttonStyle === "primary" ? (
    <PrimaryButton onClick={handler} buttonType={submit} type={submit ? "submit" : undefined}>{children}</PrimaryButton>
  ) : (
    <SecondaryButton onClick={handler} >{children}</SecondaryButton>
  );

export default Button;
