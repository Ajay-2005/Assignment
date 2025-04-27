import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnBoardingScreen from './components/OnBoardScreen/OnBoardScreen';

export default function App() {
  return (
    <View style={styles.container}>
      
     <StatusBar style="auto" />
      <OnBoardingScreen />
      {/* <Button title="Submit" onPress={handleSubmit} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',

    
  },
});
