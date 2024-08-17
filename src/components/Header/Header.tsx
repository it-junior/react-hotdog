import { HeartIcon20Light, MarketShoppingBasketIcon20Light, TimeClockMoveBackIcon20Light } from '@skbkontur/icons';
import { FC } from 'react';

import { ButtonsWrapper, LogoWrapper, SecondaryText, Title, TitleWrapper, Wrapper } from './Header.styled';
import { Button } from '../Button/Button';
import { LogoIcon } from '../LogoIcon/LogoIcon';

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
        <Button icon={<HeartIcon20Light />}>Избранное</Button>
        <Button icon={<TimeClockMoveBackIcon20Light />}>Мои заказы</Button>
        <Button icon={<MarketShoppingBasketIcon20Light />}>Корзина</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
