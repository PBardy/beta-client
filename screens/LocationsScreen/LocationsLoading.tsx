import { View } from 'react-native';
import React from 'react';
import { useIsFetching } from '@hooks/useIsFetching';
import { ActivityIndicator } from 'react-native-paper';
import tw from '@config/tailwind.config';

const LocationsLoading = () => {
  const isFetching = useIsFetching('locations/fetch');

  if (!isFetching) {
    return <React.Fragment />;
  }

  return (
    <View style={tw.style('flex flex-row flex-1 items-center justify-center')}>
      <View style={tw.style('py-10')}>
        <ActivityIndicator size='large' />
      </View>
    </View>
  );
};

export default LocationsLoading;
