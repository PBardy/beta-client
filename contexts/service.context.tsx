import type { IAuthService } from '@interfaces/auth.interface';
import type { ICategoryService } from '@interfaces/category.interface';
import type { IDateService } from '@interfaces/date.interface';
import type { ILocationService } from '@interfaces/location.interface';
import type { INumberService } from '@interfaces/number.interface';
import type { IProductService } from '@interfaces/product.interface';
import { DateService } from '@services/date.service';
import { NumberService } from '@services/number.service';
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
  dates: IDateService;
  number: INumberService;
  product: IProductService;
  category: ICategoryService;
  location: ILocationService;
};

export const services: IServices = {
  auth: new AuthService(),
  dates: new DateService(),
  number: new NumberService(),
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
