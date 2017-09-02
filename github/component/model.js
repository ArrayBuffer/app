import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

// 估价选项页面
import Option from './option';
// 导航条组件
import NavigationBar from './NavigationBar';

export default class Models extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar title="机型" statusBar={ styles.statusBar }/>
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
  statusBar: {

  }
});