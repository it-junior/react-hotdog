import React, { FC, useEffect, useState } from 'react';

import { Products } from './Products/Products';
import { Search } from './Search/Search';
import { TotalPanel } from './TotalPanel/TotalPanel';
import { api } from '../../api/api';
import { ProductsInfoM } from '../../api/types';
import { PageWrapper } from '../../components/App/App.styled';
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

  const { groups, likedProducts, cartProducts } = productsInfo;

  const filteredProductGroups = groups.map(group => {
    return {
      ...group,
      items: group.items.filter(({ caption }) => caption.toLowerCase().includes(query.toLowerCase())),
    };
  });
  const searchCount = filteredProductGroups.reduce((acc, group) => acc + group.items.length, 0);

  return (
    <PageWrapper>
      <Search query={query} count={searchCount} onChangeQuery={setQuery} />
      {renderProducts()}
      {renderTotalPanel()}
    </PageWrapper>
  );

  function renderProducts() {
    if (searchCount && productsInfo)
      return (
        <Products
          groupItems={filteredProductGroups}
          likedProducts={likedProducts}
          cartProducts={cartProducts}
          onChangeLikedProduct={(item, isLiked) =>
            setProductsInfo({
              ...productsInfo,
              likedProducts: isLiked
                ? likedProducts.filter(likedProduct => likedProduct.id !== item.id)
                : [...likedProducts, item],
            })
          }
          onChangeCartProduct={(item, inCart) =>
            setProductsInfo({
              ...productsInfo,
              cartProducts: inCart
                ? cartProducts.filter(cartProduct => cartProduct.id !== item.id)
                : [...cartProducts, item],
            })
          }
        />
      );

    return (
      <Empty>
        Ничего не найдено
        <br /> Измените или сбросьте поиск
      </Empty>
    );
  }

  function renderTotalPanel() {
    if (!cartProducts.length) return null;

    return <TotalPanel cartProducts={cartProducts} />;
  }
};
