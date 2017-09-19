import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

import Language, { FLAG } from '../expand/Language';
import CommonUtils from '../utils/CommonUtils';

import NavigationBar from '../components/NavigationBar';
import BackButton from '../components/BackButton';
import CheckBox from 'react-native-check-box';

/**
 * backButtonIcon: 返回按钮图标
 * starButtonIcon: 收藏按钮图标
 */
const checkedIcon = require('../image/ic_check_box.png');
const unCheckedImage = require('../image/ic_check_box_outline_blank.png');

export default class CustomKeyPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      changedList: []
    };
    this.language = new Language(FLAG.key);
    this.loadData = this.loadData.bind(this);
    this.onSaveData = this.onSaveData.bind(this);
    this.renderTagList = this.renderTagList.bind(this);
    this.renderCheckBox = this.renderCheckBox.bind(this);
    this.checkBoxClickHandler = this.checkBoxClickHandler.bind(this);
  }

  // 获取keys
  loadData() {
    this.language.fetch()
      .then(result => {
        this.setState({
          dataList: result
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.loadData()
  }

  checkBoxClickHandler(data) {
    let dataList = this.state.dataList;
    for(let i = 0; i < dataList.length; i++) {
      if(dataList[i].name === data.name) {
        dataList[i].checked = !dataList[i].checked;
        CommonUtils.updateArray(data, this.state.changedList);
      }
    }
    this.setState({ dataList: dataList });
  }

  onSaveData() {
    this.state.changedList.length !== 0 && this.language.save(this.state.dataList);
    this.props.navigator.pop();
  }

  onBack() {
    if(this.state.changedList.length === 0) {
      this.props.navigator.pop();
      return;
    }
    Alert.alert(
      '提示',
      '要保存修改吗?',
      [
        {
          'text': '不保存',
          onPress: () => {
            this.props.navigator.pop()
          },
          style: 'cancel'
        },
        {
          text: '保存',
          onPress: () => {
            this.onSaveData()
          }
        }
      ]
    )
  }

  renderCheckBox(data){
    let leftText = data.name;
    return(
      <CheckBox
        style = { styles.checkBox }
        onClick={ () => this.checkBoxClickHandler(data) }
        leftText={ leftText }
        isChecked={ data.checked }
        checkedImage={ <Image style = {{ tintColor: '#6495ED' }} source = { checkedIcon }/> }
        unCheckedImage={ <Image style = {{ tintColor: '#6495ED' }} source = { unCheckedImage }/>}
     />
    )
  }

  renderTagList() {
    if (!this.state.dataList || this.state.dataList.length === 0) return null;
    let data = this.state.dataList,
      len = this.state.dataList.length,
      views = [];
    for (let i = 0, l = len - 2; i < l; i += 2) {
      views.push(
        <View key={i}>
          <View style = { styles.row }>
            { this.renderCheckBox(data[i]) }
            { this.renderCheckBox(data[i+1]) }
          </View>
          <View style = { styles.line }/>
        </View>
      )
    }

    views.push(
      <View key={len - 1}>
        <View style = { styles.row }>
          { len % 2 === 0 ? this.renderCheckBox(data[len-2]) : null}
          { this.renderCheckBox(data[len-1]) }
        </View>
        <View style = { styles.line }/>
      </View>
    );
    return views;
  }

  render() {

    // 顶部导航条右边按钮
    let rightButton = (
      <TouchableOpacity>
        <View style={styles.rightButton}>
          <Text onPress = { () => this.onSaveData() } style={styles.rightButtonText}>保存</Text>
        </View>
      </TouchableOpacity>
    );

    // 导航条
    let navigationBar = (
      <NavigationBar
        title={'自定义标签'}
        leftButton={<BackButton callback={() => {
          this.onBack();
        }}/>}
        rightButton={rightButton}
      />
    );

    return <View style={styles.container}>
      {navigationBar}
      <ScrollView>
        { this.renderTagList() }
      </ScrollView>
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
  rightButton: {
    margin: 5
  },
  rightButtonText: {
    color: 'white'
  },
  line: {
    height: .5,
    backgroundColor: 'darkgray'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkBox: {
    flex: 1,
    padding: 10
  }
});