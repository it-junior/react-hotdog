import { CSSProperties } from 'react';
import styled from 'styled-components';

import { ButtonType } from './Button';

export const Wrapper = styled.button<{
  hasChildren: boolean;
  type: ButtonType;
  color?: string;
  width?: CSSProperties['width'];
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => (p.hasChildren ? '8px 16px' : '4px')};
  background: ${p => (p.type === 'backless' ? 'transparent' : p.color ?? p.theme.colors.brand)};
  color: ${p => (p.type === 'backless' ? p.color ?? p.theme.colors.brand : p.theme.colors.background)};
  border: 1px solid ${p => (p.type === 'backless' ? p.color ?? p.theme.colors.brand : 'transparent')};
  border-radius: 8px;
  gap: 4px;
  width: ${p => (p.width ? p.width : 'unset')};
`;
