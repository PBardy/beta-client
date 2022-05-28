import { View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

type Props = React.ComponentProps<typeof View>;

const Screen = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <View {...props} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Screen;
