/**
 * react-native 学习 demo
 * @author: GX
 */

import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  AppRegistry,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="首页"
            selectedTitleStyle={{ color : 'red'}}
            renderIcon={() => <Image source={require('./image/ic_polular.png')} style={[styles.image]} />}
            renderSelectedIcon={() => <Image source={require('./image/ic_polular.png')} style={[styles.image, { tintColor: '#4998a1'}]} />}
            onPress={ () => { this.setState({ selectedTab: 'home' })}}
          >
            <View style={ styles.home }/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'popular'}
            title="流行"
            renderIcon={() => <Image source={require('./image/ic_polular.png')} style={[styles.image]} />}
            renderSelectedIcon={() => <Image source={require('./image/ic_polular.png')} style={[styles.image, { tintColor: '#4998a1'}]}/>}
            onPress={ () => { this.setState({ selectedTab: 'popular' })}}
          >
            <View style={ styles.popular }/>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  home: {
    flex: 1,
    backgroundColor: '#4998a1'
  },
  popular: {
    flex: 1,
    backgroundColor: '#76488e'
  },
  image: {
    height: 22,
    width: 22
  }
});

AppRegistry.registerComponent('github', () => github);
