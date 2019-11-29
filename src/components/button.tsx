import * as React from 'react';

interface ButtonProps {
  className: string,
  children?: any,
  onClick?: () => void
}

const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  children,
  onClick
}) => (
  <button
    className={className}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
