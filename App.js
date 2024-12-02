import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import DashboardScreen from './src/screens/DashboardScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <DashboardScreen />
    </SafeAreaView>
  );
};

export default App;
