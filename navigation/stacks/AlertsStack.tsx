import Header from '@components/Headers/Header/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlertsScreen from '@screens/AlertsScreen/AlertsScreen';
import type { AlertsStackParamList } from '@types';

const Stack = createNativeStackNavigator<AlertsStackParamList>();

export const AlertsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Alerts'
      component={AlertsScreen}
      options={{ header: (props) => <Header title='Alerts' {...props} /> }}
    />
  </Stack.Navigator>
);
