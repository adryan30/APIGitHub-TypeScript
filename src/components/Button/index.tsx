import React from "react";

export type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
};
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled
}) => {
  return (
    <button className="btn" type="submit" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
