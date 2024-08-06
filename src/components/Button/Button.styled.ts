import styled from 'styled-components';

import { ButtonType } from './Button';

export const Wrapper = styled.button<{ hasChildren: boolean; type: ButtonType }>`
  display: flex;
  align-items: center;
  padding: ${p => (p.hasChildren ? '8px 16px' : '4px')};
  background: ${p => (p.type === 'backless' ? 'transparent' : p.theme.colors.brand)};
  color: ${p => (p.type === 'backless' ? p.theme.colors.brand : p.theme.colors.background)};
  border: 1px solid ${p => (p.type === 'backless' ? p.theme.colors.brand : 'transparent')};
  border-radius: 8px;
  gap: 4px;
`;
