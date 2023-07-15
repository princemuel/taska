import { ButtonIcon } from "./button-icon";

export interface ButtonContentProps {
  children?: React.ReactNode;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

export const ButtonContent = ({
  leftIcon,
  rightIcon,
  children,
}: React.PropsWithChildren<ButtonContentProps>) => {
  return (
    <>
      {leftIcon && <ButtonIcon>{leftIcon}</ButtonIcon>}
      {children}
      {rightIcon && <ButtonIcon>{rightIcon}</ButtonIcon>}
    </>
  );
};
