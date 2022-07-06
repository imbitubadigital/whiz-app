import {BackgroundGradient} from '@src/components/BackgroundGradient';
import {Button} from '@src/components/Button';
import {Link} from '@src/components/Link';
import {useAuth} from '@src/contexts/auth';
import React, {useCallback, useRef, useState} from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';

import {AndroidBackHandler} from 'react-navigation-backhandler';
import {dataTour} from '../../data';
import Card from './Card';

import * as S from './styles';
const screenWidth = Dimensions.get('window').width;

export function Introduction() {
  const scrollRef = useRef<ScrollView | any>(null);

  const {settingTour, loading} = useAuth();
  const [position, setPosition] = useState(0);

  const handlePosition = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentPosition = Math.round(
        e.nativeEvent.contentOffset.x / screenWidth,
      );
      setPosition(currentPosition);
    },
    [],
  );

  const handleSkip = useCallback(() => {
    setPosition(0);
    settingTour('skip');
  }, [settingTour]);

  return (
    <BackgroundGradient>
      <AndroidBackHandler onBackPress={() => true} />
      <S.Container>
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
              <Button
                label="Let’s start!"
                onPress={() => settingTour('concluded')}
                loading={loading}
              />
            ) : (
              <>
                <S.ContainerBullet>
                  {dataTour.map((item, index) => {
                    return (
                      <S.Bullet key={item.id} active={index === position} />
                    );
                  })}
                </S.ContainerBullet>
                <Link label="Skip" align="center" onPress={handleSkip} />
              </>
            )}
          </S.ContentFooter>
        </S.Footer>
      </S.Container>
    </BackgroundGradient>
  );
}
