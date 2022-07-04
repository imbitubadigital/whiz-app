import React from 'react';
import {ItemAccess} from '../ItemAccess';
import {dataAccess} from './data';

import * as S from './styles';

//import {} from './interfaces';

export function QuickAccess() {
  return (
    <S.Container>
      {dataAccess.map(item => (
        <ItemAccess key={item.id} item={item} />
      ))}
    </S.Container>
  );
}
