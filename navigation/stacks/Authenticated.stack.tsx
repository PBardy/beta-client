import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticatedStackParamList } from '@types';
import { DashboardStack } from './DashboardStack';

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

export const AuthenticatedStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Dashboard' component={DashboardStack} />
  </Stack.Navigator>
);
