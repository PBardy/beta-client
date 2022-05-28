import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Authenticated: {
        path: '/dashboard',
        screens: {
          Dashboard: {
            path: '',
            screens: {
              Home: {
                path: '/home',
                screens: {
                  ViewHome: {
                    path: '',
                  },
                },
              },
              Products: {
                path: '/products',
                screens: {
                  ViewProduct: {
                    path: '/:id',
                  },
                  ViewProducts: {
                    path: '/',
                  },
                  CreateProduct: {
                    path: '/create',
                  },
                  UpdateProduct: {
                    path: '/:id/update',
                  },
                  ViewUserProduct: {
                    path: '/user/:id',
                  },
                  ViewUserProducts: {
                    path: '/user/',
                  },
                  CreateUserProduct: {
                    path: '/user/create',
                  },
                  UpdateUserProduct: {
                    path: '/user/:id/update',
                  },
                },
              },
              Locations: {
                path: '/locations',
                screens: {
                  ViewLocation: {
                    path: ':id',
                  },
                  ViewLocations: {
                    path: '/',
                  },
                  CreateLocation: {
                    path: '/create',
                  },
                  UpdateLocation: {
                    path: '/:id/update',
                  },
                  ViewUserLocation: {
                    path: '/user/:id',
                  },
                  ViewUserLocations: {
                    path: '/user/',
                  },
                  CreateUserLocation: {
                    path: '/user/create',
                  },
                  UpdateUserLocation: {
                    path: '/user/:id/update',
                  },
                },
              },
              Categories: {
                path: '/categories',
                screens: {
                  ViewCategory: {
                    path: '/:id',
                  },
                  ViewCategories: {
                    path: '',
                  },
                  UpdateCategory: {
                    path: '/:id/update',
                  },
                  ViewUserCategory: {
                    path: '/user/:id',
                  },
                  ViewUserCategories: {
                    path: '/user/',
                  },
                  CreateUserCategory: {
                    path: '/user/create',
                  },
                  UpdateUserCategory: {
                    path: '/user/:id/update',
                  },
                },
              },
              Alerts: {
                path: '/alerts',
                screens: {
                  Alert: {
                    path: '/:id',
                  },
                  Alerts: {
                    path: '/',
                  },
                },
              },
              Settings: {
                path: '/settings',
                screens: {
                  Settings: {
                    path: '/',
                  },
                  Profile: {
                    path: '/profile',
                  },
                  AlertSettings: {
                    path: '/alerts',
                  },
                },
              },
            },
          },
        },
      },
      Unauthenticated: {
        path: '',
        screens: {
          SignIn: {
            path: '/sign-in',
          },
          SignUp: {
            path: '/sign-up',
          },
          ForgotPassword: {
            path: '/forgot-password',
          },
          ConfirmEmail: {
            path: '/confirm-email',
          },
        },
      },
    },
  },
};

export default linking;
