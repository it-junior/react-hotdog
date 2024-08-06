import styled from 'styled-components';

export const Wrapper = styled.header`
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${p => p.theme.colors.brand};
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: ${p => p.theme.fontSize.h1};
  line-height: ${p => p.theme.lineHeight.h1};
`;

export const SecondaryText = styled.div`
  font-size: ${p => p.theme.fontSize.h3};
  line-height: ${p => p.theme.lineHeight.h3};
  color: ${p => p.theme.colors.secondary};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
