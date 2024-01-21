import {SafeAreaView} from 'react-native';
import React from 'react';
import RootNavigation from './navigators/RootNavigator';
import styles from './styles';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider>
        <RootNavigation />
      </PaperProvider>
    </SafeAreaView>
  );
};

export default App;
