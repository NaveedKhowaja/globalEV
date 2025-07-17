import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined;
};

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'GlobalEV' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
