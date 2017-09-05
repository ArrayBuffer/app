import React, {Component} from 'react';
import {
  View,
  Text,
  RefreshControl,
  StyleSheet
} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar
} from 'react-native-scrollable-tab-view';

import NavigationBar from '../components/NavigationBar';
import PopularTab from '../components/PopularTab';

export default class FavoritePage extends Component {

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
        title={'收藏'}
        statusBar={{backgroundColor: '#2196F3'}}
      />;

    return <View style={styles.container}>
      { navigationBar }
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
    backgroundColor: '#2196F3'
  },
});