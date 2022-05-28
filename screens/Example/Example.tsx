import React, { Component } from 'react';
import { KeyboardAvoidingView, SafeAreaView, View } from 'react-native';

type Props = {
  exampleProp1: number;
  exampleProp2: boolean;
};

type State = {
  property1: number;
  property2: string[];
  property3: Object;
};

export default class Example extends Component<Props, State> {
  public state = {
    property1: 0,
    property2: [],
    property3: {},
  };

  private onSubmit(): void {
    // ...
    // do something
    this.setState({ property2: [...this.state.property2, 'another item'] });
  }

  public render() {
    return (
      <SafeAreaView>
        <KeyboardAvoidingView>
          <View></View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
