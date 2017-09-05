import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  StatusBar,
  AsyncStorage
} from 'react-native';
import NavigationBar from '../components/NavigationBar';
import Toast, { DURATION } from 'react-native-easy-toast';
export default class AsyncStorageTest extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  onSave() {
    AsyncStorage.setItem('key', this.state.text, err => {
      if(!err) {
        this.toast.show('设置成功', DURATION.LENGTH_LONG)
      } else {
        this.toast.show('保存失败', DURATION.LENGTH_LONG)
      }
    })
  }

  onRemove() {
    AsyncStorage.removeItem('key', err => {
      if(!err){
        this.toast.show('移除成功', DURATION.LENGTH_LONG)
      } else {
        this.toast.show('移除失败', DURATION.LENGTH_LONG)
      }
    })
  }

  onGet() {
    AsyncStorage.getItem('key', (err, res) => {
      if(!err) {
        if(res !== null && res !== '') {
          this.toast.show('取出成功'+res, DURATION.LENGTH_LONG)
        } else {
          this.toast.show('key不存在', DURATION.LENGTH_LONG)
        }
      } else {
        this.toast.show('取出失败', DURATION.LENGTH_LONG)
      }
    })
  }

  render(){
    let navigationBar =
      <NavigationBar
        title={'AsyncStorageTest'}
        statusBar={{backgroundColor: '#2196F3'}}
      />;
    return(
      <View style = { styles.container }>
        { navigationBar }
        <TextInput value = { this.state.text } style = { styles.input } onChangeText = { text => this.setState({ text: text })}/>
        <View style = {{ flexDirection: 'row'}}>
          <Text style = { styles.text } onPress = { () => this.onSave() }>保存</Text>
          <Text style = { styles.text } onPress = { () => this.onRemove() }>移除</Text>
          <Text style = { styles.text } onPress = { () => this.onGet() }>取出</Text>
        </View>
        <Toast ref = { toast => this.toast = toast }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 30,
    borderWidth: 1,
    paddingLeft: 5,
    margin: 10
  },
  text: {
    margin: 10
  }
});