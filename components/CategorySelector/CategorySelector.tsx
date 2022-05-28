import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Checkbox, IconButton, List, Modal, Portal } from 'react-native-paper';
import tw from '@config/tailwind.config';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';
import { ICategory } from '@interfaces/Category.interface';
import { useCategories, useCategory } from '@hooks/useCategories';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';

type Props = Partial<React.ComponentProps<typeof Modal>> & {
  onSelect: (categories: Array<ICategory>) => void;
};

const CategorySelector = (props: Props) => {
  const { onSelect } = props;
  const categories = useCategories();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [selection, setSelection] = useState<Array<string>>([]);

  const onConfirm = () => {
    const selections = selection.map((c) => useCategory(c));
    const filtered = selections.filter((c) => c != null);
    onSelect(filtered as Array<ICategory>);
  };

  const select = (category: ICategory) => {
    const selections = [...selection];
    const index = selections.indexOf(category.uuid);
    index > -1 ? selections.splice(index, 1) : selections.push(category.uuid);
    setDisabled(selections.length <= 0);
    setSelection(selections);
  };

  const getTitle = (category: ICategory) => {
    return category?.name ? category.name : 'Undefined';
  };

  const getCheckboxStatus = (category: ICategory) => {
    if (selection.includes(category?.uuid)) {
      return 'checked';
    }

    return 'unchecked';
  };

  return (
    <Portal>
      <Modal visible={props.visible!} onDismiss={props.onDismiss}>
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <XHeading3 style={styles.modalTitle}>Select categories</XHeading3>
            <IconButton style={styles.modalClose} size={28} icon='close' />
          </View>
          <View style={styles.modalContent}>
            <ScrollView>
              <List.Section>
                {categories.map((category, i) => (
                  <TouchableOpacity key={i} activeOpacity={1} onPress={() => select(category)}>
                    <View style={styles.category}>
                      <View style={styles.circle}></View>
                      <List.Item
                        style={tw.style('flex-1')}
                        titleStyle={styles.categoryTitle}
                        title={getTitle(category)}
                      />
                      <Checkbox.Android
                        color={tw.color('primary')}
                        status={getCheckboxStatus(category)}
                      />
                    </View>
                  </TouchableOpacity>
                ))}
              </List.Section>
            </ScrollView>
          </View>
          <View>
            <XButton disabled={disabled} onPress={onConfirm}>
              <XText>Confirm selection</XText>
            </XButton>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  circle: tw.style('w-12 h-12 rounded-full bg-black'),
  category: tw.style('flex flex-row items-center my-1'),
  categoryTitle: tw.style('font-bold'),
  modal: tw.style('bg-white p-5 m-5 rounded-lg h-150'),
  modalClose: tw.style('p-0 m-0 -mr-2 -mt-2'),
  modalTitle: tw.style('flex-1 flex flex-wrap'),
  modalHeader: tw.style('flex flex-row justify-between'),
  modalContent: tw.style('flex-1 mt-2 mb-6'),
});

export default CategorySelector;
