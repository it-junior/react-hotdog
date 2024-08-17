import { FC } from 'react';

import { Wrapper } from './Empty.styled';
import { LogoIcon } from '../LogoIcon/LogoIcon';

export const Empty: FC = () => {
  return (
    <Wrapper>
      <LogoIcon />
      <div>
        Ничего не найдено
        <br /> Измените или сбросьте поиск
      </div>
    </Wrapper>
  );
};
