import { SearchLoupeIcon20Regular, XIcon20Light } from '@skbkontur/icons';
import { ChangeEvent, FC } from 'react';
import { useTheme } from 'styled-components';

import { ControlWrapper, IconWrapper, ValidationWrapper, Wrapper } from './Input.styled';

interface Props {
  hasSearchIcon?: boolean;
  onChange?: (value: string) => void;
  placeholder?: string;
  validationText?: string;
  value?: string;
}

export const Input: FC<Props> = ({ value, onChange, placeholder, hasSearchIcon, validationText }) => {
  const { colors } = useTheme();

  return (
    <Wrapper>
      <ControlWrapper isValid={!validationText} value={value} placeholder={placeholder} onChange={handleChange} />
      <IconWrapper>{renderIcon()}</IconWrapper>
      {!!validationText && <ValidationWrapper>{validationText}</ValidationWrapper>}
    </Wrapper>
  );

  function renderIcon() {
    if (value)
      return (
        <button onClick={() => onChange?.('')}>
          <XIcon20Light color={colors.brand} />
        </button>
      );
    if (hasSearchIcon) return <SearchLoupeIcon20Regular color={colors.secondary} />;

    return null;
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
  }
};
