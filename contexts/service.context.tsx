import { IAuthService } from '@interfaces/auth.interface';
import { ICategoryService } from '@interfaces/category.interface';
import { ILocationService } from '@interfaces/location.interface';
import { IProductService } from '@interfaces/product.interface';
import { createContext, useContext, useMemo } from 'react';
import { AuthService } from '../services/auth.service';
import { CategoryService } from '../services/category.service';
import { LocationService } from '../services/location.service';
import { ProductsService } from '../services/products.service';

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

export type IServices = {
  auth: IAuthService;
  product: IProductService;
  category: ICategoryService;
  location: ILocationService;
};

export const services: IServices = {
  auth: new AuthService(),
  product: new ProductsService(),
  category: new CategoryService(),
  location: new LocationService(),
};

export const ServiceContext = createContext<IServices>(services);

export const useServices = () => {
  return useContext(ServiceContext);
};

export const ServiceProvider = ({ children }: Props) => {
  const context = useMemo(() => {
    return services;
  }, []);

  return <ServiceContext.Provider value={context}>{children}</ServiceContext.Provider>;
};
