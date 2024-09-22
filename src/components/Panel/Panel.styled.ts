import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${p => p.theme.colors.background};
  width: 100%;
`;

export const Content = styled.div`
  width: 920px;
  margin: 0 auto;
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${p => p.theme.colors.brand};
`;

export const Total = styled.div`
  font-size: ${p => p.theme.fontSize.h3};
  line-height: ${p => p.theme.lineHeight.h3};
  font-weight: 700;
`;
