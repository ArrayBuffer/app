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
import CustomKeyPage from './CustomKeyPage';
import SortKeyPage from './SortKeyPage';
export default class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      text: '',
      repositoryList: ''
    };
  }
  render() {
    let navigationBar = (
      <NavigationBar
        title={'我的'}
        statusBar={{backgroundColor: '#2196F3'}}
      />
    );
    let customLink = (
      <Text
        onPress = { () => {
          this.props.navigator.push({
            component: CustomKeyPage,
            params: {...this.props}
          })
        }}
        style = { styles.customLink }
      >设置</Text>
    );
    return <View style={styles.container}>
      { navigationBar }
      { customLink }
      <Text
        onPress = { () => {
          this.props.navigator.push({
            component: SortKeyPage,
            params: {...this.props}
          })
        }}
        style = { styles.customLink }
      >自定义标签</Text>
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
  customLink: {
    margin: 10
  }
});