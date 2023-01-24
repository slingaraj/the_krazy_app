import * as React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionSpecs,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Homepage from '../../Screens/Homepage';
import AddnewTask from '../../Screens/AddnewTask';

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          // ...coustomtrans
          headerShown: false,
          gestureEnabled: true,
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            // open: config,
            close: TransitionSpecs.TransitionIOSSpec,
            // close: closeconfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="AddnewTask" component={AddnewTask} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
