import React from 'react';
import AvatarHeader from '@assets/header-avatar.png';

import * as S from './styles';

//import {} from './interfaces';

export function Avatar() {
  return <S.Container source={AvatarHeader} resizeMode="cover" />;
}
