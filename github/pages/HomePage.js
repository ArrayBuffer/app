import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components';
import TabNavigator from 'react-native-tab-navigator';
import PopularPage from './PopularPage'

const ic_polular = require('../image/ic_polular.png');
const ic_trending = require('../image/ic_trending.png');
const ic_favorite = require('../image/ic_favorite.png');
const ic_my = require('../image/ic_my.png');

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'popular'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/*<Navigator*/}
        {/*initialRoute={{ component: Model }}*/}
        {/*// configureScene = { (route, routeStack) => Navigator.SceneConfigs.FloatFromRight }*/}
        {/*renderScene={(route, navigator) => {*/}
        {/*let Component = route.component;*/}
        {/*return <Component navigator={navigator} {...route.params}/>*/}
        {/*}}>机型</Navigator>*/}
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'popular'}
            title="popular"
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Image source={ic_polular} style={[styles.image]}/>}
            renderSelectedIcon={() => <Image source={ic_polular} style={[styles.image, styles.tintColor]}/>}
            onPress={() => {
              this.setState({selectedTab: 'popular'})
            }}
          >
            {/*<View style={styles.popularView}/>*/}
            <PopularPage/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'trending'}
            title="trending"
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Image source={ ic_trending } style={[ styles.image ]}/>}
            renderSelectedIcon={() => <Image source={ ic_trending } style={[ styles.image, styles.tintColor]}/>}
            onPress={() => {
              this.setState({selectedTab: 'trending'})
            }}
          >
            <View style={ styles.trendView }/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'favorite'}
            title="Favorite"
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Image source={ ic_favorite } style={[ styles.image ]}/>}
            renderSelectedIcon={() => <Image source={ ic_favorite } style={[styles.image, styles.tintColor]}/>}
            onPress={() => {
              this.setState({ selectedTab: 'favorite' })
            }}
          >
            <View style={ styles.favoriteView }/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'my'}
            title="my"
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Image source={ ic_my } style={[styles.image]}/>}
            renderSelectedIcon={() => <Image source={ ic_my } style={[styles.image, styles.tintColor]}/>}
            onPress={() => {
              this.setState({selectedTab: 'my'})
            }}
          >
            <View style={ styles.myView }/>
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
  popularView: {
    flex: 1,
    backgroundColor: '#76488e'
  },
  trendView: {
    flex: 1,
    backgroundColor: '#4998a1'
  },
  favoriteView: {
    flex: 1,
    backgroundColor: '#e77005'
  },
  myView: {
    flex: 1,
    backgroundColor: '#4f629f'
  },
  image: {
    height: 22,
    width: 22
  },
  tintColor: {
    tintColor: '#4998a1'
  },
  selectedTitleStyle: {
    color: '#4998a1'
  }
});
