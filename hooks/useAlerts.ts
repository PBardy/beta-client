import { alertsAdapter } from '@redux/slices/alerts.slice';
import { RootState, store } from '@redux/store';
import { useAppSelector } from './useAppSelector';

export const useAlertsSelector = () => useAppSelector((state) => state.alerts);

export const useAlertsAdapterSelector = () => {
  return alertsAdapter.getSelectors<RootState>((state) => state.alerts);
};

export const useAlert = (uuid: string) => {
  const adapter = useAlertsAdapterSelector();
  const alert = adapter.selectById(store.getState(), uuid);

  return alert;
};

export const useAlerts = () => {
  const adapter = useAlertsAdapterSelector();
  const alerts = adapter.selectAll(store.getState());
  const filtered = alerts.filter((c) => c);

  return filtered;
};
