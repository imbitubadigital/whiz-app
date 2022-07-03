import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Teste} from './components/Teste';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your apps!</Text>
      <Teste />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
