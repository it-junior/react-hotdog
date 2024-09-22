import { FC, PropsWithChildren } from 'react';

import { Content, Wrapper } from './Panel.styled';

export const Panel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};
