import { ChangeEvent, FC } from 'react';

import { Wrapper } from './Input.styled';

interface Props {
  onChange?: (value: string) => void;
  value?: string;
}

export const Input: FC<Props> = ({ value, onChange }) => {
  return <Wrapper value={value} onChange={handleChange} />;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
  }
};
