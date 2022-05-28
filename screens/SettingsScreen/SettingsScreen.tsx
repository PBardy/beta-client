import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';
import { IconButton } from 'react-native-paper';
import XHeading4 from '@components/Typography/XHeading4/XHeading4';
import { useGoToProfile } from '@hooks/useGoToProfile';
import SettingsHero from './SettingsHero';
import { useGoToAlerts } from '@hooks/useGoToAlerts';
import { settingStyles as styles } from './SettingStyles';
import { useGoToAlertSettings } from '@hooks/useGoToAlertSettings';
import { useModal } from '@contexts/modal.context';
import ConfirmSignOutModal from '@components/Modals/ConfirmSignOutModal.tsx/ConfirmSignOutModal';
import ConfirmDeleteAccountModal from '@components/Modals/ConfirmDeleteAccountModal/ConfirmDeleteAccountModal';

type Props = {};

const SettingsScreen = (props: Props) => {
  const modal = useModal();
  const goToAlerts = useGoToAlerts();
  const goToProfile = useGoToProfile();
  const goToAlertSettings = useGoToAlertSettings();

  const signOut = () => {
    modal.openModal(<ConfirmSignOutModal {...modal} />);
  };

  const deleteAccount = () => {
    modal.openModal(<ConfirmDeleteAccountModal {...modal} />);
  };

  return (
    <SafeAreaView>
      <View style={tw.style('bg-gray min-h-full')}>
        <SettingsHero />
        <View style={tw.style('px-5 py-6')}>
          <View style={styles.group}>
            <TouchableOpacity onPress={goToProfile}>
              <View style={styles.setting}>
                <View style={styles.hbox}>
                  <IconButton icon='account' />
                  <XHeading4 style={styles.h4}>Profile</XHeading4>
                </View>
                <IconButton icon='chevron-right' />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.group}>
            <TouchableOpacity onPress={goToAlerts}>
              <View style={styles.setting}>
                <View style={styles.hbox}>
                  <IconButton icon='bell' />
                  <XHeading4 style={styles.h4}>Alerts</XHeading4>
                </View>
                <IconButton icon='chevron-right' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToAlertSettings}>
              <View style={styles.setting}>
                <View style={styles.hbox}>
                  <IconButton icon='bell' />
                  <XHeading4 style={styles.h4}>Alert Settings</XHeading4>
                </View>
                <IconButton icon='chevron-right' />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.group}>
            <TouchableOpacity onPress={signOut}>
              <View style={styles.setting}>
                <View style={styles.hbox}>
                  <IconButton icon='logout' />
                  <XHeading4 style={styles.h4}>Sign out</XHeading4>
                </View>
                <IconButton icon='chevron-right' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={deleteAccount}>
              <View style={styles.setting}>
                <View style={styles.hbox}>
                  <IconButton icon='delete' />
                  <XHeading4 style={styles.h4}>Delete Account</XHeading4>
                </View>
                <IconButton icon='chevron-right' />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
