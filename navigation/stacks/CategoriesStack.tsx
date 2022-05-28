import Header from '@components/Headers/Header/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '@screens/CategoriesScreen/CategoriesScreen';
import CategoryScreen from '@screens/CategoryScreen/CategoryScreen';
import CreateUserCategoryScreen from '@screens/CreateUserCategoryScreen/CreateUserCategoryScreen';
import UpdateCategoryScreen from '@screens/UpdateCategoryScreen/UpdateCategoryScreen';
import UpdateUserCategoryScreen from '@screens/UpdateUserCategoryScreen/UpdateUserCategoryScreen';
import UserCategoriesScreen from '@screens/UserCategoriesScreen/UserCategoriesScreen';
import UserCategoryScreen from '@screens/UserCategoryScreen/UserCategoryScreen';
import { CategoriesStackParamList } from '@types';

const Stack = createNativeStackNavigator<CategoriesStackParamList>();

export const CategoriesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ViewCategory'
        component={CategoryScreen}
        options={{
          title: 'Category',
          header: (props) => <Header title='Category' {...props} />,
        }}
      />
      <Stack.Screen
        name='ViewCategories'
        component={CategoriesScreen}
        options={{
          title: 'Categories',
          header: (props) => <Header title='Categories' {...props} />,
        }}
      />
      <Stack.Screen
        name='UpdateCategory'
        component={UpdateCategoryScreen}
        options={{
          title: 'Update Category',
          header: (props) => <Header title='Update Category' {...props} />,
        }}
      />
      <Stack.Screen
        name='ViewUserCategory'
        component={UserCategoryScreen}
        options={{
          title: 'Category',
          header: (props) => <Header title='Category' {...props} />,
        }}
      />
      <Stack.Screen
        name='ViewUserCategories'
        component={UserCategoriesScreen}
        options={{
          title: 'Categories',
          header: (props) => <Header title='Categories' {...props} />,
        }}
      />
      <Stack.Screen
        name='CreateUserCategory'
        component={CreateUserCategoryScreen}
        options={{
          title: 'Update Category',
          header: (props) => <Header title='Create Category' {...props} />,
        }}
      />
      <Stack.Screen
        name='UpdateUserCategory'
        component={UpdateUserCategoryScreen}
        options={{
          title: 'Update Category',
          header: (props) => <Header title='Update Category' {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};
