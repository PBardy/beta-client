import { View, Text } from 'react-native';
import React from 'react';
import type { ILocation } from '@interfaces/location.interface';

type Props = {
  location: ILocation;
};

const LocationTile = (props: Props) => {
  return (
    <View>
      <Text>{props.location.name}</Text>
    </View>
  );
};

export default LocationTile;
