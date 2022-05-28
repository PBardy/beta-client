import { useAppSelector } from '@hooks/useAppSelector';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { AuthenticatedStack } from './stacks/Authenticated.stack';
import { UnauthenticatedStack } from './stacks/Unauthenticated.stack';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const signedIn = useAppSelector((s) => s.auth.signedIn);
  const signedOut = useAppSelector((s) => s.auth.signedOut);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {signedIn && <Stack.Screen name='Authenticated' component={AuthenticatedStack} />}
      {signedOut && <Stack.Screen name='Unauthenticated' component={UnauthenticatedStack} />}
    </Stack.Navigator>
  );
}
