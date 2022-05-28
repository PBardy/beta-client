import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UpdateUserCategoryScreen from '@screens/UpdateUserCategoryScreen/UpdateUserCategoryScreen';
import UserCategoriesScreen from '@screens/UserCategoriesScreen/UserCategoriesScreen';
import UserCategoryScreen from '@screens/UserCategoryScreen/UserCategoryScreen';
import { UserCategoriesStackParamList } from '@types';

const Stack = createNativeStackNavigator<UserCategoriesStackParamList>();

export const UserCategoriesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='ViewUserCategory' component={UserCategoryScreen} />
      <Stack.Screen name='ViewUserCategories' component={UserCategoriesScreen} />
      <Stack.Screen name='UpdateUserCategory' component={UpdateUserCategoryScreen} />
    </Stack.Navigator>
  );
};
