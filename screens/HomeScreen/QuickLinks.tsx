import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import tw from '@config/tailwind.config';
import { useGoToProducts } from '@hooks/useGoToProducts';
import { useGoToLocations } from '@hooks/useGoToLocations';
import { useGoToCategories } from '@hooks/useGoToCategories';
import { useGoToUserProducts } from '@hooks/useGoToUserProducts';
import { useGoToUserLocations } from '@hooks/useGoToUserLocations';
import { useGoToUserCategories } from '@hooks/useGoToUserCategories';
import XImage from '@components/XImage/XImage';
import { images } from '@config/images.config';
import { useModal } from '@contexts/modal.context';
import SearchModal from '@components/Modals/SearchModal/SearchModal';

const QuickLinks = () => {
  const modal = useModal();
  const goToProducts = useGoToProducts();
  const goToLocations = useGoToLocations();
  const goToCategories = useGoToCategories();
  const goToUserProducts = useGoToUserProducts();
  const goToUserLocations = useGoToUserLocations();
  const goToUserCategories = useGoToUserCategories();

  const findSomething = () => {
    modal.openModal(<SearchModal {...modal} />);
  };

  return (
    <React.Fragment>
      <View style={tw.style('flex items-center justify-center py-3')}>
        <XHeading3>Quick Links</XHeading3>
      </View>
      <View style={tw.style('flex flex-row justify-center flex-wrap')}>
        <TouchableOpacity onPress={goToProducts}>
          <View style={tw.style('flex-1 flex-col items-center my-4 mx-3')}>
            <View style={tw.style('w-20 h-20 rounded-full bg-secondary')}>
              <View style={tw.style('w-full h-full flex-row items-center justify-center')}>
                <XImage style={tw.style('w-13 h-13')} source={images.images.IMAGE_FOOD} />
              </View>
            </View>
            <XText style={tw.style('mt-1 text-xs text-center')}>Products</XText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToLocations}>
          <View style={tw.style('flex-1 flex-col items-center my-4 mx-3')}>
            <View style={tw.style('w-20 h-20 rounded-full bg-secondary')}>
              <View style={tw.style('w-full h-full flex-row items-center justify-center')}>
                <XImage style={tw.style('w-10 h-10')} source={images.images.IMAGE_LOCATION} />
              </View>
            </View>
            <XText style={tw.style('mt-1 text-xs text-center')}>Locations</XText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToCategories}>
          <View style={tw.style('flex-1 flex-col items-center my-4 mx-3')}>
            <View style={tw.style('w-20 h-20 rounded-full bg-secondary')}>
              <View style={tw.style('w-full h-full flex-row items-center justify-center')}>
                <XImage style={tw.style('w-10 h-10')} source={images.images.IMAGE_CATEGORY} />
              </View>
            </View>
            <XText style={tw.style('mt-1 text-xs text-center')}>Categories</XText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToUserProducts}>
          <View style={tw.style('flex-1 flex-col items-center my-4 mx-3')}>
            <View style={tw.style('w-20 h-20 rounded-full bg-secondary')}>
              <View style={tw.style('w-full h-full flex-row items-center justify-center')}>
                <XImage style={tw.style('w-13 h-13')} source={images.images.IMAGE_FOOD} />
              </View>
            </View>
            <XText style={tw.style('mt-1 text-xs text-center')}>My Products</XText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToUserLocations}>
          <View style={tw.style('flex-1 flex-col items-center my-4 mx-3')}>
            <View style={tw.style('w-20 h-20 rounded-full bg-secondary')}>
              <View style={tw.style('w-full h-full flex-row items-center justify-center')}>
                <XImage style={tw.style('w-10 h-10')} source={images.images.IMAGE_LOCATION} />
              </View>
            </View>
            <XText style={tw.style('mt-1 text-xs text-center')}>My Locations</XText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToUserCategories}>
          <View style={tw.style('flex-1 flex-col items-center my-4 mx-3')}>
            <View style={tw.style('w-20 h-20 rounded-full bg-secondary')}>
              <View style={tw.style('w-full h-full flex-row items-center justify-center')}>
                <XImage style={tw.style('w-10 h-10')} source={images.images.IMAGE_CATEGORY} />
              </View>
            </View>
            <XText style={tw.style('mt-1 text-xs text-center')}>My Categories</XText>
          </View>
        </TouchableOpacity>
        <View style={tw.style('mt-6 mb-3 px-6 w-full')}>
          <XButton icon='magnify' style={tw.style('w-full')} onPress={() => findSomething()}>
            <XText>Find Something</XText>
          </XButton>
        </View>
      </View>
    </React.Fragment>
  );
};

export default QuickLinks;
