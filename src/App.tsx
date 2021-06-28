import 'react-native-gesture-handler';
import React from 'react';
import Login from './scenes/Login';
import {StatusBar} from 'react-native';
import Home from './scenes/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StoreProvider} from './stores';

const {Navigator, Screen} = createStackNavigator();
const App = () => {
  return (
    <StoreProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#003663" />
        <Navigator screenOptions={{headerShown: false}}>
          <Screen name="Login">
            {props => <Login {...props} register={false} />}
          </Screen>
          <Screen name="Register">
            {props => <Login {...props} register={true} />}
          </Screen>
          <Screen name="Home" component={Home} />
        </Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
