import Header from '@components/Headers/Header/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateLocationsScreen from '@screens/CreateLocationScreen/CreateLocationsScreen';
import CreateUserLocationScreen from '@screens/CreateUserLocationScreen/CreateUserLocationScreen';
import LocationScreen from '@screens/LocationScreen/LocationScreen';
import LocationsScreen from '@screens/LocationsScreen/LocationsScreen';
import UpdateLocationScreen from '@screens/UpdateLocationScreen/UpdateLocationScreen';
import UpdateUserLocationScreen from '@screens/UpdateUserLocationScreen/UpdateUserLocationScreen';
import UserLocationScreen from '@screens/UserLocationScreen/UserLocationScreen';
import UserLocationsScreen from '@screens/UserLocationsScreen/UserLocationsScreen';
import type { LocationsStackParamList } from '@types';

const Stack = createNativeStackNavigator<LocationsStackParamList>();

export const LocationsStack = () => (
  <Stack.Navigator initialRouteName='ViewLocations'>
    <Stack.Screen
      name='ViewLocation'
      component={LocationScreen}
      options={{ title: 'Location', header: (props) => <Header title='Home' {...props} /> }}
    />
    <Stack.Screen
      name='ViewLocations'
      component={LocationsScreen}
      options={{ title: 'Locations', header: (props) => <Header title='Locations' {...props} /> }}
    />
    <Stack.Screen
      name='CreateLocation'
      component={CreateLocationsScreen}
      options={{
        title: 'Add location',
        header: (props) => <Header title='Add Location' {...props} />,
      }}
    />
    <Stack.Screen
      name='UpdateLocation'
      component={UpdateLocationScreen}
      options={{
        title: 'Update location',
        header: (props) => <Header title='Update Location' {...props} />,
      }}
    />
    <Stack.Screen
      name='ViewUserLocations'
      component={UserLocationsScreen}
      options={{
        title: 'View Your Locations',
        header: (props) => <Header title='View Your Locations' {...props} />,
      }}
    />
    <Stack.Screen
      name='ViewUserLocation'
      component={UserLocationScreen}
      options={{
        title: 'Location',
        header: (props) => <Header title='Location' {...props} />,
      }}
    />
    <Stack.Screen
      name='CreateUserLocation'
      component={CreateUserLocationScreen}
      options={{
        title: 'Create Location',
        header: (props) => <Header title='Create Location' {...props} />,
      }}
    />
    <Stack.Screen
      name='UpdateUserLocation'
      component={UpdateUserLocationScreen}
      options={{
        title: 'Update location',
        header: (props) => <Header title='Update Location' {...props} />,
      }}
    />
  </Stack.Navigator>
);
