import React, {useEffect, useMemo} from 'react';
import {useTheme} from 'styled-components';
import {AccordionProps} from './interfaces';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import * as S from './styles';

import {ChevronDown} from '@src/components/Icons/ChevronDown';

export function Accordion({item, isOpen, position, onChange}: AccordionProps) {
  const {colors} = useTheme();

  const {icon: Icon, items, score, title} = item;

  const formatterScore = useMemo(() => {
    const [scoreLeft, scoreRight] = score.split('/');
    return (
      <S.Score small={false} active={isOpen}>
        {scoreLeft}
        <S.Score small active={isOpen}>
          {`/${scoreRight}`}
        </S.Score>
      </S.Score>
    );
  }, [isOpen, score]);

  const animateValue = useSharedValue(180);
  const opacityValue = useSharedValue(0.5);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: animateValue.value + 'deg',
        },
      ],
    };
  });
  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value,
    };
  });

  useEffect(() => {
    if (isOpen) {
      animateValue.value = withTiming(180, {duration: 500});
      opacityValue.value = withTiming(1, {duration: 700});
    } else {
      animateValue.value = withTiming(0, {duration: 500});
      opacityValue.value = withTiming(0.5, {duration: 700});
    }
  }, [animateValue, isOpen, opacityValue]);

  return (
    <S.Container active={isOpen}>
      <S.Header active={isOpen}>
        <S.Content
          activeOpacity={0.7}
          onPress={() => onChange(isOpen ? '0' : position)}>
          <S.ContainerPosition>
            <Icon fill={isOpen ? colors.gray900 : colors.gray300} />
          </S.ContainerPosition>
          <S.ContainerTitle>
            <S.Title active={isOpen}>{title}</S.Title>
          </S.ContainerTitle>
          <S.Right>
            {formatterScore}
            <S.ContainerIcon style={animatedStyle}>
              <ChevronDown fill={isOpen ? colors.gray900 : colors.gray300} />
            </S.ContainerIcon>
          </S.Right>
        </S.Content>
      </S.Header>
      {isOpen && (
        <S.ContainerItens style={opacityStyle}>
          {items.map(i => (
            <S.Item key={i.id}>
              <S.TextItem>{i.title}</S.TextItem>
              <S.TextItem>{i.date}</S.TextItem>
            </S.Item>
          ))}
        </S.ContainerItens>
      )}
    </S.Container>
  );
}
