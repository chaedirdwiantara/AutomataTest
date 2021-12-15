// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Router from './router';
import store from './reducers/store';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';

function App() {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
}

export default App;
