import * as React from 'react';

interface ButtonProps {
  className: string,
  disabled?: boolean,
  children?: any,
  onClick?: () => void
}

const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  disabled = false,
  children,
  onClick
}) => (
  <button
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
