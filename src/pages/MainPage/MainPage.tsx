import React, { FC, useEffect, useState } from 'react';

import { Wrapper } from './MainPage.stlyed';
import { Products } from './Products/Products';
import { Search } from './Search/Search';
import { api } from '../../api/api';
import { ProductsInfoM } from '../../api/types';
import { Empty } from '../../components/Empty/Empty';
import { Loader } from '../../components/Loader/Loader';

export const MainPage: FC = () => {
  const [productsInfo, setProductsInfo] = useState<ProductsInfoM>();
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.getProductsInfo();
        setProductsInfo(data);
      } catch (e) {
        console.log(e);
      }
    };

    void load();
  }, []);

  if (!productsInfo) return <Loader />;

  const { groups, likedProducts } = productsInfo;

  const filteredProductGroups = groups.map(group => {
    return {
      ...group,
      items: group.items.filter(({ caption }) => caption.toLowerCase().includes(query.toLowerCase())),
    };
  });
  const searchCount = filteredProductGroups.reduce((acc, group) => acc + group.items.length, 0);

  return (
    <Wrapper>
      <Search query={query} count={searchCount} onChangeQuery={setQuery} />
      {renderProducts()}
    </Wrapper>
  );

  function renderProducts() {
    if (searchCount)
      return (
        <Products
          groupItems={filteredProductGroups}
          likedProducts={likedProducts}
          onChangeLikedProduct={(item, isLiked) =>
            setProductsInfo({
              groups,
              likedProducts: isLiked
                ? likedProducts.filter(likedProduct => likedProduct.id !== item.id)
                : [...likedProducts, item],
            })
          }
        />
      );

    return <Empty />;
  }
};
