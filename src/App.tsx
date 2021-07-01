import 'react-native-gesture-handler';
import React from 'react';
import Login from './scenes/Login';
import {StatusBar} from 'react-native';
import Home from './scenes/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StoreProvider} from './stores';
import {IosStatusBarColor} from './styles';

const {Navigator, Screen} = createStackNavigator();
const App = () => {
  return (
    <StoreProvider>
      <IosStatusBarColor>
        <StatusBar backgroundColor="#001D34" barStyle={'light-content'} />
        <NavigationContainer>
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
      </IosStatusBarColor>
    </StoreProvider>
  );
};

export default App;
