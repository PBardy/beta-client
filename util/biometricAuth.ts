import { hasHardwareAsync, isEnrolledAsync, authenticateAsync } from 'expo-local-authentication';

const biometricsAuth = async () => {
  const compatible = await hasHardwareAsync();
  if (!compatible) {
    throw new Error('This device is not compatible for biometric authentication');
  }

  const enrolled = await isEnrolledAsync();
  if (!enrolled) {
    throw new Error("This device doesn't have biometric authentication enabled");
  }

  const result = await authenticateAsync({
    promptMessage: 'Sign in with biometrics',
    disableDeviceFallback: true,
  });

  if (!result.success) {
    throw new Error(`${result.error} - Authentication unsuccessful`);
  }

  return result;
};

export default biometricsAuth;
