import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';


// 顶部导航条
import NavigationBar from './NavigationBar';


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


/**
 * 估价选项页面
 * @param productId
 */
export default class Option extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: '128-iPhone6s'
    };
    this.getButton = this.getButton.bind(this);
  }

  getButton(image) {
    return (
      <TouchableOpacity onPress = { () => { this.props.navigator.pop() }}>
        <Image style={ iconStyle } source={image}/>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title="估价"
          statusBar={styles.statusBar}
          leftButton={this.getButton(backButtonIcon)}
          rightButton={this.getButton(starButtonIcon)}
        />
        <Text style={styles.text}>I am option page</Text>
        <Text style={styles.text}>产品ID: {this.props.productId}</Text>
        <Text
          style={styles.text}
          onPress={() => {
            this.props.callback(this.state.options);
            this.props.navigator.pop();
          }}
        >返回到机型页面</Text>
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
  statusBar: {}
});