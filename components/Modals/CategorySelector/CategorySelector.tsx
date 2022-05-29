import { ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { ICategory } from '@interfaces/Category.interface';
import { useCategories } from '@hooks/useCategories';
import { IModalContext } from '@contexts/modal.context';
import tw from '@config/tailwind.config';
import XHeading4 from '@components/Typography/XHeading4/XHeading4';
import { IconButton, List } from 'react-native-paper';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';

type Props = IModalContext & {
  min?: number;
  max?: number;
  onConfirm: (categories: Array<ICategory>) => void;
};

const CategorySelector = (props: Props) => {
  const { onConfirm, closeModal } = props;
  const categories = useCategories();
  const [selections, setSelections] = useState<Array<ICategory>>([]);

  const isSelected = (category: ICategory) => {
    return selections.includes(category);
  };

  const onSelect = (category: ICategory) => {
    const cats = [...selections];
    const index = cats.findIndex((l) => l.uuid === category.uuid);
    index > -1 ? cats.splice(index, 1) : cats.push(category);

    setSelections(cats);
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
          <List.Section>
            {categories.map((cat, i) => (
              <List.Item
                key={i}
                title={cat.name}
                onPress={() => onSelect(cat)}
                right={() => isSelected(cat) && <List.Icon icon='check' />}
              />
            ))}
          </List.Section>
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

export default CategorySelector;
