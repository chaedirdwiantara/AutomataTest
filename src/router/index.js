import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductList, Splash, ProductDetail} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: true, title: 'Ruma Benda'}}
      />
    </Stack.Navigator>
  );
};

export default Router;
