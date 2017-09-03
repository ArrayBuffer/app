import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet
} from 'react-native';

import api from '../config';
import Request from '../http';
import RepositoryData from '../expand/Repository.data';


export default class PopularPage extends Component {

  constructor(props){
    super(props);
    this.repositoryData = new RepositoryData();
    this.state = {
      repositoryList: [],
      status: 0,
      text: ''
    };
    this.request = this.request.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }

   request() {
    let key = this.state.text;
    console.log(key);
    this.repositoryData.getRepository(api.getRepository + `?q=${key}&sort=stars`)
      .then( res => {
        this.setState({
          repositoryList: JSON.stringify(res),
          status: 2
        })
      })
      .catch( err => {
        this.setState({
          repositoryList: JSON.stringify(err)
        })
      })
  }

  textChangeHandler() {

  }

  render() {
    return <View style={ styles.container}>
      <Text>测试宣传单</Text>
      <Text>测试宣传单</Text>
      <Text>测试宣传单</Text>
      <Text onPress = { () => this.request() }>获取数据</Text>
      <TextInput style = { styles.input } value={ this.state.text } onChangeText = { text => this.setState({ text: text }) }/>
      <Text>{ this.state.repositoryList }</Text>
      <Text>{ this.state.status }</Text>
      <Text>{ this.state.text }</Text>
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
  }
});