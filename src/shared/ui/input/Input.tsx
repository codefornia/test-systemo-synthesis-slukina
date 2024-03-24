import { ChangeEvent, JSX } from 'react';
import './style.scss';

type InputProps = {
  id?: string;
  type?: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  placeholder?: string;
  children?: string | JSX.Element | JSX.Element[];
  required?: boolean;
  title?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  disabled?: boolean;
  autoComplete?: string;
};

export const Input = ({
  id,
  type,
  className,
  onChange,
  name,
  value,
  placeholder,
  required,
  title,
  maxLength,
  minLength,
  pattern,
  disabled,
  autoComplete,
}: InputProps): JSX.Element => {
  return (
    <>
      <label className={className} htmlFor={id}>
        {title}
      </label>
      <input
        className={className}
        type={type}
        id={id}
        name={name}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        disabled={disabled}
        autoComplete={autoComplete}
      />
    </>
  );
};
