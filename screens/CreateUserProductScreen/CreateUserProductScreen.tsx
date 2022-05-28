import { View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import tw from '@config/tailwind.config';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';
import { Button, IconButton, List } from 'react-native-paper';
import { useFormik } from 'formik';
import { useAppDispatch } from '@hooks/useAppSelector';
import { createOneProductThunk } from '@redux/thunks/products.thunk';
import { useIsFetching } from '@hooks/useIsFetching';
import { ICategory } from '@interfaces/category.interface';
import { date, object, string } from 'yup';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { useModal } from '@contexts/modal.context';
import AmountSelector from '@components/Modals/AmountSelector/AmountSelector';
import XHeading4 from '@components/Typography/XHeading4/XHeading4';
import { SafeAreaView } from 'react-native-safe-area-context';
import XParagraph from '@components/XParagraph/XParagraph';
import ProductSelector from '@components/Modals/ProductSelector/ProductSelector';
import { useUserProducts } from '@hooks/useUserProducts';
import { DatePickerModal } from 'react-native-paper-dates';
import { useServices } from '@contexts/service.context';
import CategorySelector from '@components/Modals/CategorySelector/CategorySelector';

type Form = {
  name: string;
  thumbnail: string;
  description: string;
  categories: ICategory[];
  expiryDate: Date;
  bestBeforeDate: Date;
  quantity: number;
};

const initialValues: Form = {
  name: '',
  thumbnail: '',
  description: '',
  categories: [],
  expiryDate: new Date(),
  bestBeforeDate: new Date(),
  quantity: 1,
};

const validationSchema = object().shape({
  name: string().required(),
  thumbnail: string(),
  description: string(),
  expiryDate: date(),
  bestBeforeDate: date(),
});

const CreateUserProductScreen = () => {
  // Hooks
  const modal = useModal();
  const services = useServices();
  const dispatch = useAppDispatch();
  const isFetching = useIsFetching('products/create-one');
  const products = useUserProducts();

  // State
  const [showExpiry, setShowExpiry] = useState<boolean>(false);
  const [showBestBefore, setShowBestBefore] = useState<boolean>(false);

  const onSubmit = (values: Form) => {
    if (form.isValid) {
      dispatch(createOneProductThunk(values));
    }
  };

  const pickImage = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      form.setFieldValue('thumbnail', result.uri);
    }
  };

  const removeCategory = (category: ICategory) => {
    const categories = form.values.categories;
    const index = categories.indexOf(category);
    if (index > -1) {
      categories.splice(index, 1);
    }

    form.setFieldValue('categories', categories);
  };

  const editQuantity = () => {
    modal.openModal(
      <AmountSelector
        {...modal}
        initialValue={form.values.quantity}
        onConfirm={(quantity) => form.setFieldValue('quantity', quantity)}
      />
    );
  };

  const editExpiry = (change: any) => {
    setShowExpiry(false);

    const value = change.date;
    if (services.dates.isBeforeToday(value)) {
      return;
    }

    form.setFieldValue('expiryDate', value);
  };

  const editBestBefore = (change: any) => {
    setShowBestBefore(false);
    const value = change.date;
  };

  // TODO: change to user categories selector
  const editCategories = () => {
    modal.openModal(<CategorySelector {...modal} min={1} max={1} onSelect={() => {}} />);
  };

  const editExistingProduct = () => {
    modal.openModal(<ProductSelector {...modal} min={1} max={1} />);
  };

  const form = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  return (
    <SafeAreaView>
      <View style={tw.style('flex flex-col flex-1 max-h-188')}>
        <ScrollView>
          <View>
            <View style={tw.style('p-4 bg-primary')}>
              <View style={tw.style('flex flex-row items-center')}>
                <View style={tw.style('bg-white rounded-full')}>
                  <View style={tw.style('flex flex-row items-center justify-center w-6 h-6')}>
                    <XText style={tw.style('font-bold text-primary')}>1</XText>
                  </View>
                </View>
                <XHeading4 style={tw.style('text-white ml-2')}>Create a new product</XHeading4>
              </View>
              <XParagraph style={tw.style('text-white mt-2 mb-4')}>
                Never added this product before? Specify its name and upload a picture so you can
                find it later{products.length ? ', otherwise choose an existing one' : '.'}.
              </XParagraph>
              <View style={tw.style('flex flex-row')}>
                <View style={tw.style('h-full mr-2')}>
                  <View style={tw.style('w-30 h-full bg-black rounded-l-lg relative')}>
                    <TouchableOpacity activeOpacity={1} onPress={pickImage}>
                      <View style={tw.style('w-full h-full absolute')}>
                        <View
                          style={tw.style('w-full h-full flex-row items-center justify-center')}>
                          <IconButton icon='image' color={tw.color('white')} onPress={pickImage} />
                        </View>
                      </View>
                      <Image
                        style={tw.style('w-30 h-30')}
                        source={{ uri: form.values.thumbnail }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={tw.style('flex flex-col flex-1')}>
                  <TextInput
                    placeholder='Name'
                    value={form.values.name}
                    style={tw.style('font-sans text-sm px-2 py-2 bg-white mb-2 rounded-tr-lg')}
                    onChangeText={form.handleChange('name')}
                  />
                  <TextInput
                    multiline={true}
                    numberOfLines={3}
                    placeholder='Description'
                    value={form.values.description}
                    style={tw.style('font-sans text-sm px-2 py-2 bg-white flex-1 rounded-br-lg')}
                    onChangeText={form.handleChange('description')}
                  />
                </View>
              </View>
              {/* Only show if these can choose an existing product */}
              {products.length ? (
                <View style={tw.style('bg-white rounded-lg mt-4')}>
                  <Button uppercase={false} onPress={editExistingProduct}>
                    <XText style={tw.style('text-primary')}>...or use existing</XText>
                  </Button>
                </View>
              ) : null}
            </View>
            <View style={tw.style('p-4 bg-white')}>
              <View style={tw.style('flex flex-row items-center')}>
                <View style={tw.style('bg-primary rounded-full')}>
                  <View style={tw.style('flex flex-row items-center justify-center w-6 h-6')}>
                    <XText style={tw.style('font-bold text-white')}>2</XText>
                  </View>
                </View>
                <XHeading4 style={tw.style('text-primary ml-2')}>
                  Specify the expiration dates
                </XHeading4>
              </View>
              <XParagraph style={tw.style('text-primary my-2')}>
                Add a best before date or an expiry date. These dates determine when we send you
                alerts.
              </XParagraph>
              <View style={tw.style('bg-primary rounded-lg my-1')}>
                <Button uppercase={false} onPress={() => setShowBestBefore(true)}>
                  <XText style={tw.style('text-white')}>
                    Best Before: {form.values.bestBeforeDate.toLocaleDateString()}
                  </XText>
                </Button>
              </View>
              <View style={tw.style('bg-primary rounded-lg my-1')}>
                <Button uppercase={false} onPress={() => setShowExpiry(true)}>
                  <XText style={tw.style('text-white')}>
                    Expires: {form.values.expiryDate.toLocaleDateString()}
                  </XText>
                </Button>
              </View>
            </View>
            <View style={tw.style('p-4 bg-primary')}>
              <View style={tw.style('flex flex-row items-center')}>
                <View style={tw.style('bg-white rounded-full')}>
                  <View style={tw.style('flex flex-row items-center justify-center w-6 h-6')}>
                    <XText style={tw.style('font-bold text-primary')}>3</XText>
                  </View>
                </View>
                <XHeading4 style={tw.style('text-white ml-2')}>
                  How many products have you bought?
                </XHeading4>
              </View>
              <XParagraph style={tw.style('text-white my-2')}>
                If the product's you've bought have drastically different expiry dates, then add
                them seperately.
              </XParagraph>
              <View style={tw.style('bg-white rounded-lg my-1')}>
                <Button uppercase={false} onPress={editQuantity}>
                  <XText>
                    {form.values.quantity} product{form.values.quantity > 1 ? 's' : ''}
                  </XText>
                </Button>
              </View>
            </View>
            <View style={tw.style('p-4 bg-white')}>
              <View style={tw.style('flex flex-row items-center')}>
                <View style={tw.style('bg-primary rounded-full')}>
                  <View style={tw.style('flex flex-row items-center justify-center w-6 h-6')}>
                    <XText style={tw.style('font-bold text-white')}>4</XText>
                  </View>
                </View>
                <XHeading4 style={tw.style('text-primary ml-2')}>Add some categories</XHeading4>
              </View>
              <XParagraph style={tw.style('text-primary my-2')}>
                Categories allow you to group certain related products, such as legumes or takeaway.
              </XParagraph>
              <View style={tw.style('bg-primary rounded-lg my-1')}>
                <Button uppercase={false} onPress={editCategories}>
                  <XText style={tw.style('text-white')}>Add categories</XText>
                </Button>
              </View>
            </View>
            <View style={tw.style('p-4 bg-primary')}>
              <View style={tw.style('flex flex-row items-center')}>
                <View style={tw.style('bg-white rounded-full')}>
                  <View style={tw.style('flex flex-row items-center justify-center w-6 h-6')}>
                    <XText style={tw.style('font-bold text-primary')}>5</XText>
                  </View>
                </View>
                <XHeading4 style={tw.style('text-white ml-2')}>Finish creation</XHeading4>
              </View>
              <XParagraph style={tw.style('text-white my-2')}>
                Everything correct? Just press 'create product' and we'll set up alerts to inform
                you if this product is about to go out of date.
              </XParagraph>
              <View style={tw.style('py-2 px-4')}>
                <XButton
                  loading={isFetching}
                  style={tw.style('bg-white')}
                  onPress={form.handleSubmit}>
                  <XText style={tw.style('text-primary')}>Create product</XText>
                </XButton>
              </View>
            </View>
          </View>
          {form.values.categories.length ? (
            <View>
              <List.Section>
                {form.values.categories.map((category, index) => (
                  <View key={index} style={tw.style('bg-white -mb-2 flex-row')}>
                    <List.Item title={category.name} style={tw.style('flex-1')} />
                    <IconButton
                      icon='close'
                      size={24}
                      color={tw.color('primary')}
                      onPress={() => removeCategory(category)}
                    />
                  </View>
                ))}
              </List.Section>
            </View>
          ) : null}
        </ScrollView>
      </View>
      {/* Date picker modals */}
      <React.Fragment>
        <DatePickerModal
          startDate={new Date()}
          locale='en-GB'
          mode='single'
          visible={showExpiry}
          onDismiss={() => setShowExpiry(false)}
          date={form.values.expiryDate}
          onConfirm={editExpiry}
          validRange={{ startDate: new Date() }}
        />
        <DatePickerModal
          startDate={new Date()}
          locale='en-GB'
          mode='single'
          visible={showBestBefore}
          onDismiss={() => setShowBestBefore(false)}
          date={form.values.bestBeforeDate}
          onConfirm={editBestBefore}
          validRange={{ startDate: new Date() }}
        />
      </React.Fragment>
    </SafeAreaView>
  );
};

export default CreateUserProductScreen;
