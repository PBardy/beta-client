import Header from '@components/Headers/Header/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '@screens/ProfileScreen/ProfileScreen';
import SettingsScreen from '@screens/SettingsScreen/SettingsScreen';
import type { SettingsStackParamList } from '@types';

const Stack = createNativeStackNavigator<SettingsStackParamList>();

export const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Settings'
      component={SettingsScreen}
      options={{ header: (props) => <Header title='Settings' {...props} /> }}
    />
    <Stack.Screen
      name='Profile'
      component={ProfileScreen}
      options={{ header: (props) => <Header title='Profile' {...props} /> }}
    />
  </Stack.Navigator>
);
