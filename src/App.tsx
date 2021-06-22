import 'react-native-gesture-handler';
import React from 'react';
// import SceneWrapper from './components/SceneWrapper';
import Login from './scenes/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Login">
          {props => <Login {...props} register={false} />}
        </Screen>
        <Screen name="Register">
          {props => <Login {...props} register={true} />}
        </Screen>
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
