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
import { Button } from '../Button/Button';

interface Props {}

export const ProductCard: FC<Props> = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={`${process.env.PUBLIC_URL}/img/product-1.png`} alt="текст" />
        <LikeButtonWrapper>
          <Button type="backless" icon={<HeartIcon16Light />} width="32px" />
        </LikeButtonWrapper>
      </ImgWrapper>
      <ContentWrapper>
        <Title>Обычная Обычная Обычная Обычная Обычная</Title>
        <div>
          <PriceTitle>Цена</PriceTitle>
          <Price>600 руб.</Price>
        </div>
      </ContentWrapper>
      <Button type="backless" width="100%">
        Выбрать
      </Button>
    </Wrapper>
  );
};
