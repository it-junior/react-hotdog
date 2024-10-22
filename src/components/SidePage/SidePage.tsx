import { XIcon20Light } from '@skbkontur/icons';
import { PropsWithChildren, FC, ReactElement } from 'react';

import { Content, FooterWrapper, HeaderWrapper, Wrapper } from './SidePage.styled';
import { Button } from '../Button/Button';

interface Props {
  title: string;
  footer?: ReactElement;
}

export const SidePage: FC<PropsWithChildren<Props>> = ({ title, footer, children }) => {
  return (
    <Wrapper>
      <Content>
        <HeaderWrapper>
          <div>{title}</div>
          <button>
            <XIcon20Light />
          </button>
        </HeaderWrapper>
        <div>{children}</div>
        <FooterWrapper>
          {footer}
          <Button type="backless">Закрыть</Button>
        </FooterWrapper>
      </Content>
    </Wrapper>
  );
};
