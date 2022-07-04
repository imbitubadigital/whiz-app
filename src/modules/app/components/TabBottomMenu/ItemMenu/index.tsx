import React, {memo} from 'react';

import * as S from './styles';

import {IPropsItemMenu} from './interfaces';
import {useTheme} from 'styled-components';

function ItemMenuBottomTab({item, active, ...rest}: IPropsItemMenu) {
  const {colors} = useTheme();
  const {icon: Icon, name} = item;
  return (
    <S.Container {...rest} active={active} activeOpacity={0.7}>
      {/* <HomeIcon /> */}
      <Icon fill={active ? colors.primary : colors.gray300} />
      <S.Label active={active}>{name}</S.Label>
    </S.Container>
  );
}

const ItemMenu = memo(ItemMenuBottomTab);
export {ItemMenu};
