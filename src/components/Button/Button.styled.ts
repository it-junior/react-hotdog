import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: ${p => p.theme.colors.brand};
  color: ${p => p.theme.colors.background};
  border-radius: 8px;
`;
