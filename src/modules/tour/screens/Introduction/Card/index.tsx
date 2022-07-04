import React, {memo, useMemo} from 'react';

import * as S from './styles';

import {PropsTour} from './interfaces';

const CardItem = ({item}: PropsTour) => {
  const {label, icon: Icon} = item;
  const handleTitle = useMemo(() => {
    const labelSplit = label.split(' ');
    const formatted = labelSplit.map((i: string, index) => {
      if (i === 'Whiz') {
        return (
          <S.Title key={String(index)} highlight>
            {`${i} `}{' '}
          </S.Title>
        );
      }
      return `${i} `;
    });

    return <S.Title highlight={false}>{formatted}</S.Title>;
  }, [label]);

  return (
    <S.Container>
      <Icon />
      <S.ContentTitle>{handleTitle}</S.ContentTitle>
    </S.Container>
  );
};

const Card = memo(CardItem);

export default Card;
