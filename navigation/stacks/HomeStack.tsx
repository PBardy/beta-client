import Header from '@components/Headers/Header/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import type { HomeStackParamList } from '@types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='ViewHome'
      component={HomeScreen}
      options={{ header: (props) => <Header title='Home' {...props} /> }}
    />
  </Stack.Navigator>
);
