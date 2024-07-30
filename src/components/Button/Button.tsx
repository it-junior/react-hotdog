import { FC, PropsWithChildren } from 'react';

import { Wrapper } from './Button.styled';

interface Props {}

export const Button: FC<PropsWithChildren<Props>> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
