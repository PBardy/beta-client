import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import tw from '@config/tailwind.config';

type Props = {
  exampleProp1: number;
  exampleProp2: boolean;
};

const Example2 = (props: Props) => {
  const [property1, setProperty1] = useState<number>(0);
  const [property2, setProperty2] = useState<string[]>([]);
  const [property3, setProperty3] = useState<Object>({});
  const [property4, setProperty4] = useState<boolean>(true);

  const onPress = () => {};

  const onSubmit = () => {
    setProperty2([...property2, 'another item']);
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View style={styles.header}>
          <View>{property4 ? <Text>Conditonally rendered text</Text> : null}</View>
          <TouchableOpacity onPress={onPress}>
            <Text>Fake button</Text>
          </TouchableOpacity>
          <Button title='Real button' onPress={onPress} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {},
});

export default Example2;
