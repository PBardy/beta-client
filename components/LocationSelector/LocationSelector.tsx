import { ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import tw from '@config/tailwind.config';
import { useLocations } from '@hooks/useLocations';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';
import { IModalContext } from '@contexts/modal.context';
import { IconButton } from 'react-native-paper';
import XHeading4 from '@components/Typography/XHeading4/XHeading4';
import { ILocation } from '@interfaces/location.interface';

type Props = IModalContext & {
  onConfirm: (locations: Array<ILocation>) => void;
};

const LocationSelector = (props: Props) => {
  const { onConfirm, closeModal } = props;
  const locations = useLocations();
  const [selections, setSelections] = useState<Array<ILocation>>([]);

  const isSelected = (location: ILocation) => {
    return selections.includes(location);
  };

  const onSelect = (location: ILocation) => {
    const locs = [...selections];
    const index = locs.findIndex((l) => l.uuid === location.uuid);
    index > -1 ? locs.splice(index, 1) : locs.push(location);

    setSelections(locs);
  };

  const confirmSelections = () => {
    onConfirm(selections);
    closeModal();
  };

  return (
    <View style={tw.style('m-5 p-5 bg-white rounded-lg')}>
      <View style={tw.style('flex flex-row items-center justify-between')}>
        <XHeading4 style={tw.style('uppercase text-primary font-bold')}>
          {selections.length < 1 ? 'Choose locations' : 'Selected (' + selections.length + ')'}
        </XHeading4>
      </View>
      <View style={tw.style('my-4 max-h-150')}>
        <ScrollView>
          <View style={tw.style('flex flex-row flex-wrap')}>
            {locations.map((loc, i) => (
              <TouchableOpacity style={tw.style('w-full')} key={i} onPress={() => onSelect(loc)}>
                <View style={tw.style('bg-gray rounded-lg shadow mb-1')}>
                  <View style={tw.style('h-16 flex flex-row items-center justify-between')}>
                    <XHeading4>{loc.name}</XHeading4>
                    {isSelected(loc) ? (
                      <IconButton
                        size={28}
                        icon='check'
                        style={tw.style('-mr-2')}
                        color={tw.color('primary')}
                      />
                    ) : null}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View>
        <XButton onPress={confirmSelections}>
          <XText>Confirm</XText>
        </XButton>
      </View>
    </View>
  );
};

export default LocationSelector;
