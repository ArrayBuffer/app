import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import HomePage from '../pages/HomePage';

export default class WelcomePage extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.navigator.resetTo({
        component: HomePage
      })
    }, 1000)
  }

  componentWillUnmount(){
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return <View style={ styles.container}>
      <Text style={ styles.container } >{'回收宝科技'}</Text>
      <Image
        style={ styles.logo }
        source={ require('../image/ic_arrow_back_white_36pt.png')}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    width: 300,
    height: 600
  }
});