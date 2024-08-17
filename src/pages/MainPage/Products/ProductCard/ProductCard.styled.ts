import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 16px;
  border: 1px solid ${p => p.theme.colors.brand};
  border-radius: 8px;
  width: 206px;
  box-sizing: border-box;
`;

export const ImgWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid ${p => p.theme.colors.brand};
  height: 126px;
`;

export const LikeButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Img = styled.img`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PriceTitle = styled.div`
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSize.mini};
  line-height: ${p => p.theme.lineHeight.mini};
`;

export const Price = styled.div`
  font-weight: 600;
`;
