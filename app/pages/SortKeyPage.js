import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import Language, {FLAG} from '../expand/Language';
import SortableListView from 'react-native-sortable-listview';
import NavigationBar from '../components/NavigationBar';
import BackButton from '../components/BackButton';
import Utils from '../utils/CommonUtils';
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
        this.allKeyArr = res;
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

  onBack () {
    if (Utils.isEqualArr(this.originCheckedArr, this.state.checkedArr)) {
      this.props.navigator.pop();
    } else {
      Alert.alert(
        '提示',
        '是否保存修改',
        [{
          text: '否',
          onPress: () => {
            this.props.navigator.pop();
          }
        }, {
          text: '是',
          onPress: () => {
            this.onSaveData(true);
          }
        }]
      )
    }
  }

  getSortResult () {
    this.sortResultArray = Utils.cloneArr(this.allKeyArr);
    for (let i = 0, j = this.originCheckedArr.length; i < j; i++) {
      let item = this.originCheckedArr[i];
      let index = this.allKeyArr.indexOf(item);
      this.sortResultArray.splice(index, 1, this.state.checkedArr[i]);
    }
  }

  onSaveData (isChcked) {
    if (isChcked && Utils.isEqualArr(this.state.checkedArr, this.originCheckedArr)) {
      this.props.navigator.pop();
    } else {
      this.getSortResult();
      this.lan.save(this.sortResultArray);
      this.props.navigator.pop();
    }
  }

  render () {

    // 顶部导航条右边按钮
    let rightButton = (
      <TouchableOpacity>
        <View style={styles.rightButton}>
          <Text onPress = { () => this.onSaveData() } style={styles.rightButtonText}>保存</Text>
        </View>
      </TouchableOpacity>
    );

    return(
      <View style = { styles.container }>
        <NavigationBar 
          title = '我的'
          leftButton = { <BackButton callback = {() => this.onBack()}/> }
          rightButton = { rightButton }
        />
        <SortableListView
          style={{ flex: 1 }}
          data={ this.state.checkedArr }
          order={ Object.keys(this.state.checkedArr) }
          onRowMoved={e => {
            this.state.checkedArr.splice(e.to, 0, this.state.checkedArr.splice(e.from, 1)[0]);
            this.forceUpdate()
          }}
          renderRow={row => <SortCell data={ row }  {...this.props} />}
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
      <TouchableHighlight
        underlayColor = { '#eee' }
        underlayPress = { 500 }
        style = { styles.sortRow }
        {...this.props.sortHandlers}
      >
        <View style = {{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Image source={ require('../image/ic_sort.png')} style={{
            tintColor: '#2169f3',
            height: 16,
            width: 16,
            marginRight: 10
          }}/>
          <Text>{ this.props.data.name }</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sortRow: {
    padding: 25,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  rightButtonText: {
    color: 'white'
  },
  rightButton: {
    margin: 5
  },
});