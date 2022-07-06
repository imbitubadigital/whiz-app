import React, {useCallback, useState} from 'react';

import * as S from './styles';

import {BackgroundGradient} from '@src/components/BackgroundGradient';
import {Title} from '@src/components/Title';

import {Separator} from '@src/components/Separator';

import {Link} from '@src/components/Link';
import {Button} from '@src/components/Button';

import {FlatList} from 'react-native';
import {SubjectItem} from './SubjectItem';
import {ItemsSubject} from './data';
import {Header} from '@src/components/Header';

import {useAuth} from '@src/contexts/auth';

export function Subjects() {
  const {createUserFinish} = useAuth();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const handleSelect = useCallback((id: string) => {
    setSelectedItems(prevState => {
      const check = prevState.filter((item: string) => item === id);
      if (check.length > 0) {
        return prevState.filter((item: string) => item !== id);
      }
      return [...prevState, id];
    });
  }, []);

  const handleSubmit = useCallback(async () => {
    await createUserFinish(selectedItems);
  }, [createUserFinish, selectedItems]);

  return (
    <BackgroundGradient>
      <S.Container>
        <Header />
        <S.Content>
          <Title>
            Which <Title type="highlight">subjects</Title> are{'\n'} you taking
            this year?
          </Title>

          <S.Subtitle>You can edit this information later</S.Subtitle>

          <Separator height={40} />
          <S.ContainerList>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={ItemsSubject}
              renderItem={({item}) => (
                <SubjectItem
                  item={item}
                  onPress={() => handleSelect(item.id)}
                  selected={selectedItems.includes(item.id)}
                />
              )}
              keyExtractor={item => String(item.id)}
              ItemSeparatorComponent={() => <S.SeparatorList />}
            />
          </S.ContainerList>
          <Separator height={22} />
          <S.ContainerButton>
            <Button label="Confirm" onPress={handleSubmit} />
          </S.ContainerButton>
          <Separator height={18} />
          <Link label="Skip for now" onPress={handleSubmit} />
          <Separator height={40} />
        </S.Content>
      </S.Container>
    </BackgroundGradient>
  );
}
