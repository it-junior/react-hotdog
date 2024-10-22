import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #00000050;
  z-index: 50;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 430px;
  height: 100vh;
  background: ${p => p.theme.colors.background};
  z-index: 50;
  padding: 32px 32px 70px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-sizing: border-box;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${p => p.theme.fontSize.h2};
  line-height: ${p => p.theme.lineHeight.h2};
`;

export const FooterWrapper = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  bottom: 0;
  left: 32px;
  padding: 16px 0;
  border-top: ${p => p.theme.colors.brand};
`;
