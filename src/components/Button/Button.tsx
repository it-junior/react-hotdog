import { FC, PropsWithChildren, ReactElement } from 'react';

import { Wrapper } from './Button.styled';

export type ButtonType = 'backless' | 'default';

interface Props {
  icon?: ReactElement;
  onClick?: () => void;
  type?: ButtonType;
}

export const Button: FC<PropsWithChildren<Props>> = ({ children, icon, type = 'default', onClick }) => {
  return (
    <Wrapper type={type} hasChildren={!!children} onClick={onClick}>
      {icon}
      {children && <div>{children}</div>}
    </Wrapper>
  );
};
