import { HeartIcon16Light, HeartIcon16Solid } from '@skbkontur/icons';
import { FC } from 'react';
import { useTheme } from 'styled-components';

import {
  ContentWrapper,
  Img,
  ImgWrapper,
  LikeButtonWrapper,
  Price,
  PriceTitle,
  Title,
  Wrapper,
} from './ProductCard.styled';
import { api } from '../../../../api/api';
import { ProductM } from '../../../../api/types';
import { Button } from '../../../../components/Button/Button';

interface Props {
  inCart: boolean;
  isLiked: boolean;
  item: ProductM;
  onClickLike: () => void;
  onClickSetToCart: () => void;
}

export const ProductCard: FC<Props> = ({ item, isLiked, inCart, onClickLike, onClickSetToCart }) => {
  const { colors } = useTheme();

  const { caption, img, price } = item;

  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={`${process.env.PUBLIC_URL}/img/${img}`} alt="текст" />
        <LikeButtonWrapper>
          <Button
            type="backless"
            icon={isLiked ? <HeartIcon16Solid /> : <HeartIcon16Light />}
            width="32px"
            color={isLiked ? colors.red : undefined}
            onClick={handleLike}
          />
        </LikeButtonWrapper>
      </ImgWrapper>
      <ContentWrapper>
        <Title>{caption}</Title>
        <div>
          <PriceTitle>Цена</PriceTitle>
          <Price>{price} руб.</Price>
        </div>
      </ContentWrapper>
      <Button type={inCart ? 'default' : 'backless'} width="100%" onClick={handleSetToCart}>
        {inCart ? 'Убрать' : 'Выбрать'}
      </Button>
    </Wrapper>
  );

  async function handleLike() {
    try {
      onClickLike();
      await api.toggleLike(item);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSetToCart() {
    try {
      onClickSetToCart();
      await api.setToCart(item);
    } catch (e) {
      console.log(e);
    }
  }
};
