import React, { forwardRef, Ref } from "react";

interface InputProps {
  type: string;
  value: string;
  autoFocus?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputItem = (
  { type, value, autoFocus, onChange }: InputProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        autoFocus={autoFocus}
        onChange={onChange}
      />
    </div>
  );
};

export default forwardRef(InputItem);
