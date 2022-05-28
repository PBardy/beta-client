import XText from '@components/Typography/XText/XText';
import tw from '@config/tailwind.config';
import type { IAlert } from '@interfaces/alerts.interface';
import { NavigationProp } from '@react-navigation/native';
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ReadAlerts from './ReadAlerts';
import UnreadAlerts from './UnreadAlerts';

type Props = {
  nav: NavigationProp<any>;
  alerts: Array<IAlert>;
};

type State = {
  tabIndex: number;
};

export default class AlertsScreenHOC extends Component<Props, State> {
  public state = {
    tabIndex: 0,
  };

  private isActiveTab(tabIndex: number): boolean {
    return this.state.tabIndex === tabIndex;
  }

  private tabStyle(tabIndex: number): string {
    return this.isActiveTab(tabIndex) ? 'font-bold text-primary' : '';
  }

  public onSearch(): void {}

  public render() {
    return (
      <SafeAreaView>
        <View style={tw.style('bg-gray min-h-full relative')}>
          <ScrollView>
            <View style={tw.style('bg-primary w-full h-50')}>
              <View style={tw.style('flex flex-row justify-center my-5')}>
                <View style={tw.style('bg-white rounded-lg mx-5 flex-1')}>
                  <View style={tw.style('flex flex-row items-center py-2')}>
                    <View style={tw.style('flex-1 border-r border-primary')}>
                      <XText style={tw.style('text-center', this.tabStyle(0))}>Read</XText>
                    </View>
                    <View style={tw.style('flex-1')}>
                      <XText style={tw.style('text-center', this.tabStyle(1))}>Unread</XText>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={tw.style('absolute left-0 right-0 top-20')}>
              <View style={tw.style('mx-5')}>
                <ScrollView>
                  {this.isActiveTab(0) && <ReadAlerts />}
                  {this.isActiveTab(1) && <UnreadAlerts />}
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
