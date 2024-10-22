import { HeartIcon20Light, MarketShoppingBasketIcon20Light, TimeClockMoveBackIcon20Light } from '@skbkontur/icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ButtonsWrapper, LogoWrapper, SecondaryText, Title, TitleWrapper, Wrapper } from './Header.styled';
import { PRODUCT_GROUP_LIST } from '../../api/constatns';
import { ProductCard } from '../../pages/MainPage/Products/ProductCard/ProductCard';
import { Button } from '../Button/Button';
import { LogoIcon } from '../LogoIcon/LogoIcon';
import { SidePage } from '../SidePage/SidePage';

export const Header: FC = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link to="/">
          <LogoIcon />
        </Link>
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
      <SidePage title="Корзина" footer={<Button>Перейти к оформлению</Button>}>
        <ProductCard
          inCart={true}
          isLiked={true}
          item={PRODUCT_GROUP_LIST[0].items[0]}
          onClickLike={() => {}}
          onClickSetToCart={() => {}}
        />
      </SidePage>
    </Wrapper>
  );
};
