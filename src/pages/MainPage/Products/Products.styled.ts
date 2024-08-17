import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.div`
  font-size: ${p => p.theme.fontSize.h2};
  line-height: ${p => p.theme.lineHeight.h2};
  font-weight: 600;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 206px);
  justify-content: space-between;
  row-gap: 32px;
`;
