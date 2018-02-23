import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';

const backButtonIcon = require('../image/ic_arrow_back_white_36pt.png');
const iconStyle = {
  width: 22,
  height: 22,
  margin: 5
};

/**
 * @desc 顶部导航返回按钮
 * @prop callback 点击时的回收函数
 */
export default class BackButton extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <TouchableOpacity onPress={() => { this.props.callback()}}>
        <Image style={ iconStyle } source={ backButtonIcon }/>
      </TouchableOpacity>
    )
  }
}