import { View, Text } from 'react-native';
import React from 'react';
import type { ILocation } from '@interfaces/location.interface';
import { useGoToLocation } from '@hooks/useGoToLocation';
import { Card, IconButton } from 'react-native-paper';
import tw from '@config/tailwind.config';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import XParagraph from '@components/XParagraph/XParagraph';

type Props = {
  location: ILocation;
};

const Location = (props: Props) => {
  const goToLocation = useGoToLocation(props.location.uuid);

  return (
    <Card style={tw.style('rounded-lg my-1')} onPress={goToLocation}>
      <Card.Content>
        <View style={tw.style('flex flex-row')}>
          <View style={tw.style('flex-1')}>
            <View></View>
            <View>
              <XHeading3>{props.location.name}</XHeading3>
              <XParagraph>{props.location.description}</XParagraph>
            </View>
          </View>
          <View style={tw.style('flex flex-row items-center')}>
            <IconButton icon='chevron-right' />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default Location;
