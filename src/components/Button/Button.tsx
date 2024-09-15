import { CSSProperties, FC, PropsWithChildren, ReactElement } from 'react';

import { Wrapper } from './Button.styled';

export type ButtonType = 'backless' | 'default';

interface Props {
  color?: string;
  icon?: ReactElement;
  onClick?: () => void;
  type?: ButtonType;
  width?: CSSProperties['width'];
}

export const Button: FC<PropsWithChildren<Props>> = ({ children, icon, type = 'default', onClick, width, color }) => {
  return (
    <Wrapper type={type} hasChildren={!!children} width={width} color={color} onClick={onClick}>
      {icon}
      {children && <div>{children}</div>}
    </Wrapper>
  );
};
