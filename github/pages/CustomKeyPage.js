import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  RefreshControl,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar
} from 'react-native-scrollable-tab-view';

import NavigationBar from '../components/NavigationBar';
import PopularTab from '../components/PopularTab';

/**
 * backButtonIcon: 返回按钮图标
 * starButtonIcon: 收藏按钮图标
 * iconStyle: 图标尺寸
 */
const backButtonIcon = require('../image/ic_arrow_back_white_36pt.png');
const starButtonIcon = require('../image/ic_star.png');
const iconStyle = {
  width: 22,
  height: 22,
  margin: 5
};

export default class CustomKeyPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      text: '',
      repositoryList: ''
    };
  }

  getButton(image) {
    return (
      <TouchableOpacity onPress={() => {
        this.props.navigator.pop()
      }}>
        <Image style={iconStyle} source={image}/>
      </TouchableOpacity>
    )
  }

  render() {

    let navigationBar = (
      <NavigationBar
        title={'自定义标签'}
        statusBar={{backgroundColor: '#2196F3'}}
        leftButton={this.getButton(backButtonIcon)}
        rightButton={this.getButton(starButtonIcon)}
      />
    );

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