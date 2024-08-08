import { FC } from 'react';

import { Group, List, Title, Wrapper } from './Products.styled';
import { ProductCard } from '../ProductCard/ProductCard';

export const Products: FC = () => {
  return (
    <Wrapper>
      <Group>
        <Title>Булки</Title>
        <List>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </List>
      </Group>
    </Wrapper>
  );
};
