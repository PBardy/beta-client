import Header from '@components/Headers/Header/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateProductScreen from '@screens/CreateProductScreen/CreateProductScreen';
import CreateUserProductScreen from '@screens/CreateUserProductScreen/CreateUserProductScreen';
import ProductScreen from '@screens/ProductScreen/ProductScreen';
import ProductsScreen from '@screens/ProductsScreen/ProductsScreen';
import UpdateProductScreen from '@screens/UpdateProductScreen/UpdateProductScreen';
import UpdateUserProductScreen from '@screens/UpdateUserProductScreen/UpdateUserProductScreen';
import UserProductScreen from '@screens/UserProductScreen/UserProductScreen';
import UserProductsScreen from '@screens/UserProductsScreen/UserProductsScreen';
import { ProductsStackParamList } from '@types';

const Stack = createNativeStackNavigator<ProductsStackParamList>();

export const ProductsStack = () => (
  <Stack.Navigator initialRouteName='ViewProducts'>
    <Stack.Screen
      name='ViewProduct'
      navigationKey='ViewProduct'
      component={ProductScreen}
      options={{ title: 'Product', header: (props) => <Header title='Product' {...props} /> }}
    />
    <Stack.Screen
      name='ViewProducts'
      navigationKey='ViewProducts'
      component={ProductsScreen}
      options={{ title: 'Products', header: (props) => <Header title='Products' {...props} /> }}
    />
    <Stack.Screen
      name='CreateProduct'
      navigationKey='CreateProduct'
      component={CreateProductScreen}
      options={{
        title: 'Add Product',
        header: (props) => <Header title='Create Product' {...props} />,
      }}
    />
    <Stack.Screen
      name='UpdateProduct'
      navigationKey='UpdateProduct'
      component={UpdateProductScreen}
      options={{
        title: 'Update Product',
        header: (props) => <Header title='Update Product' {...props} />,
      }}
    />
    <Stack.Screen
      name='ViewUserProducts'
      navigationKey='ViewUserProducts'
      component={UserProductsScreen}
      options={{
        title: 'Your Products',
        header: (props) => <Header title='Your Products' {...props} />,
      }}
    />
    <Stack.Screen
      name='ViewUserProduct'
      navigationKey='ViewUserProduct'
      component={UserProductScreen}
      options={{
        title: 'View Product',
        header: (props) => <Header title='View Product' {...props} />,
      }}
    />
    <Stack.Screen
      name='CreateUserProduct'
      navigationKey='CreateUserProduct'
      component={CreateUserProductScreen}
      options={{
        title: 'Create Product',
        header: (props) => <Header title='Create Product' {...props} />,
      }}
    />
    <Stack.Screen
      name='UpdateUserProduct'
      navigationKey='UpdateUserProduct'
      component={UpdateUserProductScreen}
      options={{
        title: 'Update Product',
        header: (props) => <Header title='Update Product' {...props} />,
      }}
    />
  </Stack.Navigator>
);
