import {SafeAreaView} from 'react-native';
import React from 'react';
import RootNavigation from './navigators/RootNavigator';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RootNavigation />
    </SafeAreaView>
  );
};

export default App;
