import { HeartIcon16Light } from '@skbkontur/icons';
import { FC } from 'react';

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
import { ProductM } from '../../../../api/types';
import { Button } from '../../../../components/Button/Button';

interface Props {
  item: ProductM;
}

export const ProductCard: FC<Props> = ({ item }) => {
  const { caption, img, price } = item;

  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={`${process.env.PUBLIC_URL}/img/${img}`} alt="текст" />
        <LikeButtonWrapper>
          <Button type="backless" icon={<HeartIcon16Light />} width="32px" />
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
};
