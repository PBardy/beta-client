import { useAlerts } from '@hooks/useAlerts';
import { useNavigation } from '@react-navigation/native';
import AlertsScreenHOC from './AlertsScreenHOC';

export default function AlertsScreen() {
  const alerts = useAlerts();
  const navigation = useNavigation();

  return <AlertsScreenHOC nav={navigation} alerts={alerts} />;
}
