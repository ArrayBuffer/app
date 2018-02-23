import React, {Component} from 'react';
import {
  View,
  Text,
  RefreshControl,
  StyleSheet
} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar
} from 'react-native-scrollable-tab-view';

import NavigationBar from '../components/NavigationBar';
import PopularTab from '../components/PopularTab';
import Language, { FLAG } from '../expand/Language';

export default class PopularPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      text: '',
      repositoryList: '',
      keyList: []
    };
    this.language = new Language(FLAG.key);
  }

  componentDidMount() {
    this.language.fetch()
      .then(result => {
        this.setState({
          keyList: result
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {

    let navigationBar =
      <NavigationBar
        title={'最热'}
        statusBar={{backgroundColor: '#2196F3'}}
      />;

    let keyList = this.state.keyList;

    return <View style={styles.container}>
      { navigationBar }
      <ScrollableTabView
        renderTabBar={() => <DefaultTabBar/>}
        tabBarBackgroundColor = { '#2196f3' }
        tabBarActiveTextColor = { '#fff' }
        tabBarInactiveTextColor = { 'mintcream' }
        tabBarUnderlineStyle = { styles.tabBarUnderlineStyle }
      >
        {
          keyList.map((value, index, arr) => {
            let item = arr[index];
            if(item.checked) {
              return <PopularTab key={ item.name } tabLabel={item.name}/>
            }
          })
        }
      </ScrollableTabView>
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
});