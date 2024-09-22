import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Field = styled.div<{ right?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${p => (p.right ? 'flex-end' : 'flex-start')};
  gap: 8px;
`;
