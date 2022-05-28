import { useAppSelector } from './useAppSelector';

export const useIsErring = (request: string) =>
  useAppSelector((s) => s.api.error.actions.includes(request));
