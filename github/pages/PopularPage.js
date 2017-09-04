import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar
} from 'react-native-scrollable-tab-view';

import NavigationBar from '../components/NavigationBar';
import PopularTab from '../components/PopularTab';

export default class PopularPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      text: '',
      repositoryList: ''
    };
  }

  render() {

    let navigationBar =
      <NavigationBar
        title={'最热'}
        statusBar={ styles.statusBar }
      />;

    return <View style={styles.container}>
      { navigationBar }
      <ScrollableTabView
        renderTabBar={() => <DefaultTabBar/>}
        tabBarBackgroundColor = { '#2196f3' }
        tabBarActiveTextColor = { '#fff' }
        tabBarInactiveTextColor = { 'mintcream' }
        tabBarUnderlineStyle = { styles.tabBarUnderlineStyle }
      >
        <PopularTab tabLabel='react'/>
        <PopularTab tabLabel='angular'/>
        <PopularTab tabLabel='Vue'/>
      </ScrollableTabView>
    </View>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 40,
    borderWidth: 1
  },
  tabBarUnderlineStyle: {
    height: 2,
    backgroundColor: '#fff'
  },
  statusBar: {

  },
});