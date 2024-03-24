import { JSX, MouseEventHandler } from 'react';
import './style.scss';

type ButtonProps = {
  type: 'submit' | 'reset' | 'button';
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: string | JSX.Element | JSX.Element[];
  title?: string;
  disabled?: boolean;
};

export const Button = ({ type, className, onClick, children, title, disabled }: ButtonProps): JSX.Element => {
  return (
    <button className={`${className} button`} type={type} onClick={onClick} title={title} disabled={disabled}>
      {children}
    </button>
  );
};
