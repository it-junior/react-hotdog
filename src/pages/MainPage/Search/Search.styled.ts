import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CountWrapper = styled.div`
  font-size: ${p => p.theme.fontSize.h3};
  line-height: ${p => p.theme.lineHeight.h3};
`;
