import {SafeAreaView} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/Redux/Store/Store';
import { persistStore } from 'reduxjs-toolkit-persist'
let persistor = persistStore(Store)
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import RootNavigation from './src/Navigation/RootNavigation';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigation/>
        </PersistGate>
      </Provider>    
    </SafeAreaView>
  );
};

export default App;
