import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar
} from 'react-native-scrollable-tab-view';

import NavigationBar from '../components/NavigationBar';
import PopularTab from '../components/PopularTab';
import BackButton from '../components/BackButton';

import Language, {FLAG} from '../expand/Language';

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
      dataList: [],
    };
    this.language = new Language(FLAG.key)
  }

  // 获取keys
  loadData() {
    this.language.fetch()
      .then(result => {
        this.setState({
          dataList: result
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.loadData()
  }

  rightButtonTapHandler() {

  }

  renderTagList() {
    if (!this.state.dataList || this.state.dataList.length === 0) return null;
    let data = this.state.dataList,
      len = this.state.dataList.length,
      views = [];
    for (let i = 0, l = len - 2; i < l; i += 2) {
      views.push(
        <View key={i}>
          <View style = { styles.row }>
            <Text>{ data[i].name }</Text>
            <Text>{ data[i+1].name }</Text>
          </View>
          <View style = { styles.line }/>
        </View>
      )
    }

    views.push(
      <View key={len - 1}>
        <View style = { styles.row }>
          { len % 2 === 0 ? <Text>{ data[len-2].name }</Text> : null}
          <Text>{ data[len-1].name }</Text>
        </View>
        <View style = { styles.line }/>
      </View>
    );
    return views;
  }

  render() {

    // 顶部导航条右边按钮
    let rightButton = (
      <TouchableOpacity>
        <View style={styles.rightButton}>
          <Text style={styles.rightButtonText}>保存</Text>
        </View>
      </TouchableOpacity>
    );

    // 导航条
    let navigationBar = (
      <NavigationBar
        title={'自定义标签'}
        leftButton={<BackButton callback={() => {
          this.props.navigator.pop()
        }}/>}
        rightButton={rightButton}
      />
    );

    return <View style={styles.container}>
      {navigationBar}
      <ScrollView>
        <Text>自定义标识</Text>
        {this.renderTagList()}
      </ScrollView>
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
  rightButton: {
    margin: 5
  },
  rightButtonText: {
    color: 'white'
  },
  line: {
    height: 1,
    backgroundColor: 'black'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});