import { FC } from 'react';

import LoaderGif from './loader.gif';
import { ImgWrapper, Wrapper } from './Loader.styled';
export const Loader: FC = () => {
  return (
    <Wrapper>
      <ImgWrapper src={LoaderGif} alt="Загрузка" />
    </Wrapper>
  );
};
