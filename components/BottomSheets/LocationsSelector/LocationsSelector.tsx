import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import tw from '@config/tailwind.config';
import { List } from 'react-native-paper';
import { useCategories } from '@hooks/useCategories';
import { ILocation } from '@interfaces/location.interface';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';

type Props = {
  onConfirm: (categories: Array<ILocation>) => void;
};

const LocationsSelector = (props: Props) => {
  const categories = useCategories();
  const [selected, setSelected] = useState<Array<ILocation>>([]);

  const find = (location: ILocation) => {
    return selected.findIndex((c) => c.uuid === location.uuid);
  };

  const select = (location: ILocation) => {
    setSelected([...selected, location]);
  };

  const deselect = (location: ILocation) => {
    const index = find(location);
    const cloned = [...selected];
    const spliced = index > -1 ? cloned.splice(index, 1) : cloned;
    setSelected(cloned);
  };

  const toggle = (location: ILocation) => {
    selected.includes(location) ? deselect(location) : select(location);
  };

  return (
    <View style={tw.style('flex flex-col max-h-full')}>
      <View style={tw.style('flex-row items-center justify-center py-4')}>
        <Text style={tw.style('text-2xl font-sans font-bold')}>Categories</Text>
      </View>
      <View style={tw.style('flex-1')}>
        <ScrollView>
          <List.Section style={tw.style('px-4')}>
            {categories.map((location, index) => (
              <List.Item
                key={index}
                title={location.name}
                style={tw.style('border-b border-b-gray')}
                onPress={() => toggle(location)}
                right={
                  find(location) > -1
                    ? () => <List.Icon icon='check' color={tw.color('primary')} />
                    : () => <List.Icon icon='plus' color={tw.color('primary')} />
                }
              />
            ))}
          </List.Section>
        </ScrollView>
      </View>
      <View style={tw.style('px-4 py-6')}>
        <XButton onPress={() => props.onConfirm(selected)}>
          <XText>{selected.length ? 'Selected (' + selected.length + ')' : 'Confirm'}</XText>
        </XButton>
      </View>
    </View>
  );
};

export default LocationsSelector;
