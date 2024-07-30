import { FC } from 'react';

import { ButtonsWrapper, LogoWrapper, SecondaryText, Title, TitleWrapper, Wrapper } from './Header.styled';
import { LogoIcon } from './LogoIcon';
import { Button } from '../Button/Button';

export const Header: FC = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoIcon />
        <TitleWrapper>
          <Title>REACT HOTDOG</Title>
          <SecondaryText>Собери свой хот-дог</SecondaryText>
        </TitleWrapper>
      </LogoWrapper>
      <ButtonsWrapper>
        <Button>Избранное</Button>
        <Button>Мои заказы</Button>
        <Button>Корзина</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
