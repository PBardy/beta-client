import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import tw from '@config/tailwind.config';
import { List } from 'react-native-paper';
import { useCategories } from '@hooks/useCategories';
import { ICategory } from '@interfaces/category.interface';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';

type Props = {
  onConfirm: (categories: Array<ICategory>) => void;
};

const CategoriesSelector = (props: Props) => {
  const categories = useCategories();
  const [selected, setSelected] = useState<Array<ICategory>>([]);

  const find = (category: ICategory) => {
    return selected.findIndex((c) => c.uuid === category.uuid);
  };

  const select = (category: ICategory) => {
    setSelected([...selected, category]);
  };

  const deselect = (category: ICategory) => {
    const index = find(category);
    const cloned = [...selected];
    const spliced = index > -1 ? cloned.splice(index, 1) : cloned;
    setSelected(cloned);
  };

  const toggle = (category: ICategory) => {
    selected.includes(category) ? deselect(category) : select(category);
  };

  return (
    <View style={tw.style('flex flex-col max-h-full')}>
      <View style={tw.style('flex-row items-center justify-center py-4')}>
        <Text style={tw.style('text-2xl font-sans font-bold')}>Categories</Text>
      </View>
      <View style={tw.style('flex-1')}>
        <ScrollView>
          <List.Section style={tw.style('px-4')}>
            {categories.map((category, index) => (
              <List.Item
                key={index}
                title={category.name}
                style={tw.style('border-b border-b-gray')}
                onPress={() => toggle(category)}
                right={
                  find(category) > -1
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

export default CategoriesSelector;
