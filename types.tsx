import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Authenticated: NavigatorScreenParams<AuthenticatedStackParamList>;
  Unauthenticated: NavigatorScreenParams<UnauthenticatedStackParamsList>;
  NotFound: undefined;
};

export type AuthenticatedStackParamList = {
  Dashboard: NavigatorScreenParams<DashboardStackParamList>;
};

export type DashboardStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Products: NavigatorScreenParams<ProductsStackParamList>;
  Locations: NavigatorScreenParams<LocationsStackParamList>;
  Categories: NavigatorScreenParams<CategoriesStackParamList>;
  Alerts: NavigatorScreenParams<AlertsStackParamList>;
  Settings: NavigatorScreenParams<SettingsStackParamList>;
};

export type HomeStackParamList = {
  ViewHome: undefined;
};

export type ProductsStackParamList = {
  ViewProduct: ViewProductParams | undefined;
  ViewProducts: undefined;
  CreateProduct: undefined;
  UpdateProduct: UpdateProductParams | undefined;
  ViewUserProduct: ViewUserProductParams;
  ViewUserProducts: undefined;
  UpdateUserProduct: UpdateUserProductParams;
  CreateUserProduct: CreateUserProductParams | undefined;
};

export type ViewProductParams = {
  id: string;
};

export type UpdateProductParams = {
  id: string;
};

export type CreateUserProductParams = {
  id: string;
};

export type LocationsStackParamList = {
  ViewLocation: ViewLocationParams;
  ViewLocations: undefined;
  CreateLocation: undefined;
  UpdateLocation: UpdateLocationParams;
  ViewUserLocation: ViewUserLocationParams;
  ViewUserLocations: undefined;
  CreateUserLocation: undefined;
  UpdateUserLocation: UpdateUserLocationParams;
};

export type ViewLocationParams = {
  id: string;
};

export type UpdateLocationParams = {
  id: string;
};

export type CategoriesStackParamList = {
  ViewCategory: ViewCategoryParams;
  ViewCategories: undefined;
  UpdateCategory: UpdateCategoryParams;
  ViewUserCategory: ViewUserCategoryParams;
  ViewUserCategories: undefined;
  CreateUserCategory: undefined;
  UpdateUserCategory: UpdateUserCategoriesParams;
};

export type ViewCategoryParams = {
  id: string;
};

export type UpdateCategoryParams = {
  id: string;
};

export type AlertsStackParamList = {
  Alert: undefined;
  Alerts: undefined;
};

export type SettingsStackParamList = {
  Settings: undefined;
  Profile: undefined;
  AlertSettings: undefined;
};

export type ViewUserProductParams = {
  id: string;
};

export type UpdateUserProductParams = {
  id: string;
};

export type ViewUserLocationParams = {
  id: string;
};

export type UpdateUserLocationParams = {
  id: string;
};

export type ViewUserCategoryParams = {
  id: string;
};

export type UpdateUserCategoriesParams = {
  id: string;
};

export type UnauthenticatedStackParamsList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  ConfirmEmail: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;
