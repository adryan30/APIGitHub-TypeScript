import React, { SetStateAction } from "react";

export type InputBoxProps = {
  name: string;
  type: string;
  variable?: string | number;
  callback: React.Dispatch<React.SetStateAction<string>>;
};
export const InputBox: React.FC<InputBoxProps> = ({
  name,
  type,
  variable,
  callback
}) => {
  const capitalize = (s: string): string =>
    s.slice(0, 1).toUpperCase() + s.slice(1);
  return (
    <>
      <label htmlFor={name}>{capitalize(name)}</label>
      <input
        type={type}
        id={name}
        placeholder={`Digite seu ${capitalize(name)}`}
        value={variable}
        onChange={event => callback(event.target.value)}
      />
    </>
  );
};

export default InputBox;
