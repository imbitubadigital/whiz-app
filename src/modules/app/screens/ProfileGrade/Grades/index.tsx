import React, {useCallback, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Accordion} from './Accordion';
import {dataCharm} from './dataCharm';

import * as S from './styles';

export function Grades() {
  const [position, setPosition] = useState('0');

  const handleChange = useCallback((value: string) => {
    setPosition(value);
  }, []);
  return (
    <S.Container>
      <KeyboardAwareScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {dataCharm.map(item => (
          <Accordion
            key={item.id}
            item={item}
            isOpen={position === item.id}
            position={item.id}
            onChange={handleChange}
          />
        ))}
      </KeyboardAwareScrollView>
    </S.Container>
  );
}
