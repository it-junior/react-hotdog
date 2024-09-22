import { FC, PropsWithChildren, ReactElement } from 'react';

import { Wrapper } from './Empty.styled';
import { LogoIcon } from '../LogoIcon/LogoIcon';

interface Props {
  subCaption?: ReactElement;
}

export const Empty: FC<PropsWithChildren<Props>> = ({ children, subCaption }) => {
  return (
    <Wrapper>
      <LogoIcon />
      <div>{children}</div>
      {subCaption}
    </Wrapper>
  );
};
