import {SafeAreaView} from 'react-native';
import React from 'react';
import RootNavigation from './navigators/RootNavigator';
import styles from './styles';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {store} from './store/store';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <PaperProvider>
          <RootNavigation />
        </PaperProvider>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
