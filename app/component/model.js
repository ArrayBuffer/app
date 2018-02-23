import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  TouchableOpacity,
  RefreshControl
} from 'react-native';


/**
 * Option: 估价选项页面
 * NavigationBar: 导航条组件
 */
import { api } from '../api';
import Request from '../http';
import Option from './option';
import NavigationBar from './NavigationBar';
import Toast, {DURATION} from 'react-native-easy-toast';

const listData = [
  {
    key: 1,
    name: 'iPhone61S'
  },
  {
    key: 2,
    name: 'iPhone2S'
  },
  {
    key: 3,
    name: 'iPhone3S'
  },
  {
    key: 4,
    name: 'iPhone4S'
  },
  {
    key: 5,
    name: 'iPhone5S'
  },
  {
    key: 6,
    name: 'iPhone6S'
  },
  {
    key: 7,
    name: 'iPhone7S'
  },
  {
    key: 8,
    name: 'iPhone8S'
  },
  {
    key: 6,
    name: 'iPhone6S'
  },
  {
    key: 7,
    name: 'iPhone7S'
  },
  {
    key: 8,
    name: 'iPhone8S'
  },
  {
    key: 6,
    name: 'iPhone6S'
  },
  {
    key: 7,
    name: 'iPhone7S'
  },
  {
    key: 8,
    name: 'iPhone8S'
  },
];


export default class Models extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      options: '',
      listData: ds.cloneWithRows(listData),
      isLoading: true
    };
    this.onLoad();
  }

  renderRow(item) {
    return <View style={styles.row}>
      <TouchableOpacity style={{ height: 50 }} onPress={() => {
        this.toast.show(item.key, DURATION.LENGTH_LONG)
      }}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    </View>
  }

  renderSeparator(sectionId, rowId, adjacentRowHighlighted) {
    return <View key={ rowId } style={styles.line}/>
  }

  renderFooter() {
    return <Text>木有更多数据了</Text>
  }

  onLoad() {
    setTimeout( () => {
      this.setState({
        isLoading: false
      })
    }, 500)
  }

  render() {

    // 刷新icon
    const refresh = <RefreshControl
      refreshing={ this.state.isLoading }
      onRefresh = { () => this.onLoad()}
    />;


    return (
      <View style={styles.container}>
        <NavigationBar title="机型" statusBar={styles.statusBar}/>
        <ListView
          dataSource={this.state.listData}
          renderRow={(item) => this.renderRow(item)}
          renderSeparator={(sectionId, rowId, adjacentRowHighlighted) => this.renderSeparator()}
          renderFooter={() => this.renderFooter()}
          refreshControl = {
            <RefreshControl refreshing={ this.state.isLoading }/>
          }
        />
        <Toast ref={toast => this.toast = toast}/>
        <Text style={styles.text}>I am models page</Text>
        <Text style={styles.text}>received from options{this.state.options}</Text>
        <Text
          style={styles.text}
          onPress={() => {
            this.props.navigator.push({
              component: Option,
              params: {
                productId: 30788,
                callback: (options) => {
                  this.setState({
                    options: options
                  })
                }
              }
            })
          }}
        >去估价</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  statusBar: {},
  row: {
    height: 50
  },
  line: {
    height: 1,
    backgroundColor: '#ccc'
  }
});