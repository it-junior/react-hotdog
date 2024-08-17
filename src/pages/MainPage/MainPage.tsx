import React, { FC, useEffect, useState } from 'react';

import { Wrapper } from './MainPage.stlyed';
import { Products } from './Products/Products';
import { Search } from './Search/Search';
import { api } from '../../api/api';
import { ProductGroupM } from '../../api/types';
import { Empty } from '../../components/Empty/Empty';
import { Loader } from '../../components/Loader/Loader';

export const MainPage: FC = () => {
  const [productGroups, setProductGroups] = useState<ProductGroupM[]>([]);
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const filteredProductGroups = productGroups.map(group => {
    return {
      ...group,
      items: group.items.filter(({ caption }) => caption.toLowerCase().includes(query.toLowerCase())),
    };
  });
  const searchCount = filteredProductGroups.reduce((acc, group) => acc + group.items.length, 0);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const data = await api.getProducts();
        setProductGroups(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    void load();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <Wrapper>
      <Search query={query} count={searchCount} onChangeQuery={setQuery} />
      {renderProducts()}
    </Wrapper>
  );

  function renderProducts() {
    if (searchCount) return <Products groupItems={filteredProductGroups} />;

    return <Empty />;
  }
};
