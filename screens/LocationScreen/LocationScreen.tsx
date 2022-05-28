import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { ViewLocationParams } from '@types';
import { useLocation } from '@hooks/useLocations';
import { useGoToHome } from '@hooks/useGoToHome';
import { useGoToUpdateLocation } from '@hooks/useGoToUpdateLocation';
import Screen from '@components/Screen/Screen';
import tw from '@config/tailwind.config';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import XParagraph from '@components/XParagraph/XParagraph';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';
import DeleteLocation from './DeleteLocation';
import ProductSelector from '@components/ProductSelector/ProductSelector';

const LocationScreen = () => {
  const route = useRoute();
  const params = route.params as ViewLocationParams;
  const location = useLocation(params.id);
  const goToHome = useGoToHome();
  const goToUpdateLocation = useGoToUpdateLocation(params.id);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [showChooseItems, setShowChooseItems] = useState<boolean>(false);

  return (
    <Screen>
      <View style={tw.style('flex flex-col p-4')}>
        <View style={tw.style('bg-white rounded-lg')}>
          <View style={tw.style('flex flex-row p-4')}>
            <View style={tw.style('flex flex-col flex-1 px-1 py-2')}>
              <XHeading3>{location?.name}</XHeading3>
              <XParagraph>{location?.description}</XParagraph>
            </View>
          </View>
        </View>
        <View style={tw.style('my-4 flex flex-col')}>
          <XButton icon='plus' style={tw.style('my-1')} onPress={() => setShowChooseItems(true)}>
            <XText>Add items</XText>
          </XButton>
          <XButton icon='pen' style={tw.style('my-1')} onPress={goToUpdateLocation}>
            <XText>Update Location</XText>
          </XButton>
          <XButton
            icon='delete'
            style={tw.style('my-1 bg-red')}
            onPress={() => setShowDelete(true)}>
            <XText>Delete Location</XText>
          </XButton>
        </View>
      </View>
      {/** Modals  */}
      <React.Fragment>
        <ProductSelector visible={showChooseItems} onDismiss={() => setShowChooseItems(false)} />
        <DeleteLocation
          location={location!}
          visible={showDelete}
          onDismiss={() => setShowDelete(false)}
        />
      </React.Fragment>
    </Screen>
  );
};

export default LocationScreen;
