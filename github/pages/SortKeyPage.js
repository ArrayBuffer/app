import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Language, {FLAG} from '../expand/Language';
import SortableListView from 'react-native-sortable-listview';
import NavigationBar from '../components/NavigationBar';
export default class SortKeyPage extends Component {
  constructor(props) {
    super(props);
    this.allKeyArr = [];
    this.sortedArr = [];
    this.originCheckedArr = [];
    this.lan = new Language(FLAG.key);
    this.state = {
      checkedArr: []
    }
  }

  componentDidMount() {
    this.getInitKeys();
  }

  getInitKeys() {
    this.lan.fetch()
      .then(res => {
        this.getCheckedKeys(res);
        this.data = data;
      })
      .catch(res => {
      })
  }

  getCheckedKeys(data) {
    this.allKeyArr = data;
    let checkedArr = [];
    for (let i = 0; i < data.length; i++) {
      if(data[i]['checked']) checkedArr.push(data[i]);
    }
    this.setState({ checkedArr: checkedArr });
    this.originCheckedArr.push(...checkedArr);
  }

  render () {
    return(
      <View style = { styles.container }>
        <NavigationBar title = '我的'/>
        <SortableListView
          style={{ flex: 1 }}
          data={ this.state.checkedArr }
          order={ Object.keys(this.state.checkedArr) }
          onRowMoved={e => {
            order.splice(e.to, 0, this.state.checkedArr.splice(e.from, 1)[0]);
            this.forceUpdate()
          }}
          renderRow={row => <SortCell data={row} />}
        />
      </View>
    )
  }
}

class SortCell extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
        <Text>{ this.props.data.name }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});