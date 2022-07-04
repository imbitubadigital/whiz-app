import {Button} from '@src/components/Button';
import {Link} from '@src/components/Link';
import React, {useCallback, useRef, useState} from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StatusBar,
} from 'react-native';
import {AndroidBackHandler} from 'react-navigation-backhandler';
import {dataTour} from '../../data';
import Card from './Card';

import * as S from './styles';
const screenWidth = Dimensions.get('window').width;

export function Introduction() {
  const scrollRef = useRef<ScrollView | any>(null);
  const [position, setPosition] = useState(0);
  const [numberStep, setNumberStep] = useState(1);

  const handlePosition = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentPosition = Math.round(
        e.nativeEvent.contentOffset.x / screenWidth,
      );
      setPosition(currentPosition);
      setNumberStep(currentPosition + 1);
    },
    [],
  );
  console.log({position, numberStep});
  return (
    <>
      <AndroidBackHandler onBackPress={() => true} />
      <S.Container>
        <StatusBar hidden={true} />
        <S.Content>
          <S.ScrollTour
            pagingEnabled
            onMomentumScrollEnd={handlePosition}
            scrollEventThrottle={16}
            ref={scrollRef}
            scrollEnabled={true}>
            {dataTour.map(item => {
              return <Card key={item.id} item={item} />;
            })}
          </S.ScrollTour>
        </S.Content>
        <S.Footer>
          <S.ContentFooter active={position === dataTour.length - 1}>
            {position === dataTour.length - 1 ? (
              <Button label="Let’s start!" />
            ) : (
              <>
                <S.ContainerBullet>
                  {dataTour.map((item, index) => {
                    return (
                      <S.Bullet key={item.id} active={index === position} />
                    );
                  })}
                </S.ContainerBullet>
                <Link label="Skip" align="center" />
              </>
            )}
          </S.ContentFooter>
        </S.Footer>
      </S.Container>
    </>
  );
}
