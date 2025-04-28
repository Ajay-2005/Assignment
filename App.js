import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'; // import useState
import OnBoardingScreen from './components/OnBoardScreen/OnBoardScreen';
import Dashboard from './components/dashboard/Dashboard';

export default function App() {
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <OnBoardingScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
