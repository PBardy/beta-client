import { locationsAdapter } from '@redux/slices/locations.slice';
import { RootState, store } from '@redux/store';
import { useAppSelector } from './useAppSelector';

export const useLocationsSelector = () => useAppSelector((state) => state.locations);

export const useLocationsAdapterSelector = () => {
  return locationsAdapter.getSelectors<RootState>((state) => state.locations);
};

export const useLocation = (uuid: string) => {
  const adapter = useLocationsAdapterSelector();
  const location = adapter.selectById(store.getState(), uuid);

  return location;
};

export const useLocations = () => {
  const adapter = useLocationsAdapterSelector();
  const locations = adapter.selectAll(store.getState());

  return locations;
};
