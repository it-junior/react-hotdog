import { FC, useEffect, useState } from 'react';

import { Group, List, Title, Wrapper } from './Products.styled';
import { api } from '../../api/api';
import { ProductGroupM } from '../../api/types';
import { Loader } from '../Loader/Loader';
import { ProductCard } from '../ProductCard/ProductCard';

export const Products: FC = () => {
  const [productGroup, setProductGroup] = useState<ProductGroupM[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const data = await api.getProducts();
        setProductGroup(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    void load();
  }, []);

  return <Wrapper>{renderContent()}</Wrapper>;

  function renderContent() {
    if (isLoading) return <Loader />;

    return productGroup.map(({ id, caption, items }) => (
      <Group key={id}>
        <Title>{caption}</Title>
        <List>
          {items.map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
        </List>
      </Group>
    ));
  }
};
