import { FC } from 'react';

import { CountWrapper, Wrapper } from './Search.styled';
import { Input } from '../../../components/Input/Input';

interface Props {
  count: number;
  onChangeQuery: (value: string) => void;
  query: string;
}

export const Search: FC<Props> = ({ count, query, onChangeQuery }) => {
  return (
    <Wrapper>
      <CountWrapper>{count && query && `Найдено товаров: ${count}`}</CountWrapper>
      <Input value={query} onChange={onChangeQuery} />
    </Wrapper>
  );
};