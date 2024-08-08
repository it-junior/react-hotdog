import { CSSProperties, FC, PropsWithChildren, ReactElement } from 'react';

import { Wrapper } from './Button.styled';

export type ButtonType = 'backless' | 'default';

interface Props {
  icon?: ReactElement;
  onClick?: () => void;
  type?: ButtonType;
  width?: CSSProperties['width'];
}

export const Button: FC<PropsWithChildren<Props>> = ({ children, icon, type = 'default', onClick, width }) => {
  return (
    <Wrapper type={type} hasChildren={!!children} width={width} onClick={onClick}>
      {icon}
      {children && <div>{children}</div>}
    </Wrapper>
  );
};
