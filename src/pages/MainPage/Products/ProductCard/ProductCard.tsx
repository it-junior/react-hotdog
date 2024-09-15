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
  isLiked: boolean;
  item: ProductM;
  onChangeLikedProduct: (item: ProductM, isLiked: boolean) => void;
}

export const ProductCard: FC<Props> = ({ item, isLiked, onChangeLikedProduct }) => {
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
      <Button type="backless" width="100%">
        Выбрать
      </Button>
    </Wrapper>
  );

  async function handleLike() {
    try {
      onChangeLikedProduct(item, isLiked);
      await api.toggleLike(item);
    } catch (e) {
      console.log(e);
    }
  }
};
