import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 312px;
`;

export const ControlWrapper = styled.input<{ isValid: boolean }>`
  border: 1px solid ${p => (p.isValid ? p.theme.colors.secondary : p.theme.colors.red)};
  padding: 8px 42px 8px 12px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 2px;

  &:focus-visible {
    border: 1px solid ${p => p.theme.colors.brand};
    outline: 1px solid ${p => p.theme.colors.brand};
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

export const ValidationWrapper = styled.div`
  position: absolute;
  right: 0;
  top: -8px;
  transform: translateY(-100%);
  color: ${p => p.theme.colors.red};
`;
