import React, { Component } from 'react';
import {
  View,
  Text,
  ListView
} from 'react-native';

import { api } from '../api/index';
import RepositoryData from '../expand/Repository.data';
import RepositoryCell from '../components/RepositoryCell';

export default class PopularTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    };
    this.repositoryData = new RepositoryData();
  }

  componentWillMount() {
    this.getPopularDate()
  }

  getPopularDate() {
    let key = this.props.tabLabel;
    this.repositoryData.getRepository(api.getRepository + `?q=${key}&sort=stars`)
      .then(res => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(res.items)
        })
      })
      .catch(err => {
        this.setState({
          dataSource: JSON.stringify(err)
        })
      });
  }

  static renderRow(data) {
    return <RepositoryCell data = { data }/>
  }

  render(){
    return <View>
      <ListView
        dataSource = { this.state.dataSource }
        renderRow = { (data) => PopularTab.renderRow(data) }
      />
    </View>
  }
}