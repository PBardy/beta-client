import { View } from 'react-native';
import React, { useState } from 'react';
import { Modal, Portal } from 'react-native-paper';
import tw from '@config/tailwind.config';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';

type Props = Partial<React.ComponentProps<typeof Modal>>;

const ColorSelector = (props: Props) => {
  const [showSelf, setShowSelf] = useState<boolean>(true);

  const onConfirm = () => {
    setShowSelf(false);
  };

  return (
    <Portal>
      <Modal visible={showSelf && props.visible!} onDismiss={props.onDismiss}>
        <View style={tw.style('m-5 p-5 bg-white')}>
          <View>
            <XHeading3>Choose color</XHeading3>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default ColorSelector;
