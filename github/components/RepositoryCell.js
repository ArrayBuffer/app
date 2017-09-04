import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const icon_star = require('../image/ic_star.png');

export default class RepositoryCell extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let data = this.props.data;
    return <TouchableOpacity style = { styles.container }>
      <View style = { styles.cellContainer }>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <View style={styles.bottom}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Author:</Text>
            <Image style={styles.avatar} source={{uri: data.owner.avatar_url}}/>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Stars</Text>
            <Text>{data.stargazers_count}</Text>
          </View>
          <Image style={{width: 22, height: 22}} source={icon_star}/>
        </View>
      </View>
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  cellContainer: {
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginVertical: 3,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#ddd',
    borderRadius: 2,
    shadowColor: 'gray',
    shadowOffset: { width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    marginTop: 2,
    color: '#212121'
  },
  desc: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 20,
    color: '#757575',
  },
  avatar: {
    width: 22,
    height: 22,
    borderRadius: 11
  },
});