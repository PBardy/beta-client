import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Screen from '@components/Screen/Screen';
import tw from '@config/tailwind.config';
import SearchInput from '@components/SearchInput/SearchInput';
import LocationsError from './LocationsError';
import LocationsLoading from './LocationsLoading';
import Locations from '@components/Locations/Locations';
import XButton from '@components/XButton/XButton';
import { useGoToCreateLocation } from '@hooks/useGoToCreateLocation';
import XText from '@components/Typography/XText/XText';

type Props = {};

const LocationsScreen = (props: Props) => {
  const goToCreateLocation = useGoToCreateLocation();

  return (
    <Screen>
      <View style={tw.style('flex flex-col flex-1 p-4')}>
        <View style={tw.style('flex flex-1')}>
          <SearchInput />
          <View style={tw.style('flex flex-1 mt-2 mb-4 max-h-148')}>
            <ScrollView>
              <Locations />
              <LocationsError />
              <LocationsLoading />
            </ScrollView>
          </View>
        </View>
        <View>
          <XButton icon='plus' onPress={goToCreateLocation}>
            <XText>Create location</XText>
          </XButton>
        </View>
      </View>
    </Screen>
  );
};

export default LocationsScreen;
