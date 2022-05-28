import { View, Text } from 'react-native';
import React from 'react';
import { useLocations } from '@hooks/useLocations';
import XText from '@components/Typography/XText/XText';
import tw from '@config/tailwind.config';
import Location from '@components/Location/Location';

type Props = {};

const Locations = (props: Props) => {
  const locations = useLocations();

  if (locations.length === 0) {
    return (
      <View style={tw.style('flex flex-1 flex-row items-center justify-center')}>
        <XText>No locations found.</XText>
      </View>
    );
  }

  return (
    <View style={tw.style('flex flex-col')}>
      {locations.map((location, index) => (
        <Location key={index} location={location!} />
      ))}
    </View>
  );
};

export default Locations;
