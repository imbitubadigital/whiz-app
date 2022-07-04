import React from 'react';
import {ItemClass} from '../ItemClass';
import {dataClasses} from './data';

import * as S from './styles';

//import {} from './interfaces';

export function NextClasses() {
  return (
    <S.Container>
      {dataClasses.map(item => (
        <ItemClass key={item.id} item={item} />
      ))}
    </S.Container>
  );
}
