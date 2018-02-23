import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  RefreshControl,
  StyleSheet
} from 'react-native';

import { api } from '../api/index';
import RepositoryData from '../expand/Repository.data';
import RepositoryCell from '../components/RepositoryCell';

export default class PopularTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoad: false,
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    };
    this.repositoryData = new RepositoryData();
  }

  componentWillMount() {
    this.getPopularDate()
  }

  getPopularDate() {
    this.setState({
      isLoad: true
    });
    let key = this.props.tabLabel;
    this.repositoryData.getRepository(api.getRepository + `?q=${key}&sort=stars`)
      .then(res => {
        this.setState({
          isLoad: false,
          dataSource: this.state.dataSource.cloneWithRows(res.items)
        })
      })
      .catch(err => {
        this.setState({
          isLoad: false,
          dataSource: JSON.stringify(err)
        })
      });
  }

  static renderRow(data) {
    return <RepositoryCell data = { data }/>
  }

  render(){
    let refreshControl = <RefreshControl
      refreshing = { this.state.isLoad }
      onRefresh = { () => { this.getPopularDate()}}
      colors = { ['#2196F3'] }
      tintColor = { '#2196F3' }
      title = { 'loading' }
      titleColor = { '#2196F3' }
    />;
    return <View style = {{ flex: 1 }}>
      <ListView
        dataSource = { this.state.dataSource }
        renderRow = { (data) => PopularTab.renderRow(data) }
        refreshControl = { refreshControl }
      />
    </View>
  }
}

const styles = StyleSheet.create({

});