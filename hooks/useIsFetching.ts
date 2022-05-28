import { useAppSelector } from './useAppSelector';

export const useIsFetching = (request: string) =>
  useAppSelector((s) => s.api.loader.actions.includes(request));
