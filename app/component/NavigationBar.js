import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native';

// 安装导航条高度
const NAV_BAR_HEIGHT_ANDROID = 50;
// IOS导航条高度
const NAV_BAR_HEIGHT_IOS = 44;
// IOS导航条高度
const STATUS_BAR_HEIGHT = 20;
// 导航条样式设置
const StatusBarShape = {
  backgroundColor: PropTypes.string,
  barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
  hidden: PropTypes.bool
};

export default class NavigationBar extends Component {

  // props约定
  static propsType = {
    style: View.propTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    hide: PropTypes.bool,
    leftButton: PropTypes.element,
    rightButton: PropTypes.element,
    statusBar: PropTypes.shape(StatusBarShape)
  };

  // 默认 props
  static defaultProps = {
    statusBar: {
      barStyle: 'light-content',
      hidden: false
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      title: 'default',
      hide: false
    }
  }

  render() {
    let title = this.props.titleView
      ? this.props.titleView : <Text style={ styles.title }>{this.props.title}</Text>,
      leftButton = this.props.leftButton,
      rightButton = this.props.rightButton;
    return (
      <View style={ styles.container }>
        <View style={[styles.statusBarWrap, this.props.statusBar]}>
          <StatusBar/>
        </View>
        <View style={ styles.NavViewContainer }>
          {leftButton}
          <View style={ styles.titleViewContainer }>
            {title}
          </View>
          {rightButton}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  NavViewContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
    backgroundColor: '#0af',
    flexDirection: 'row'
  },
  titleViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 40,
    right: 40,
    top: 0,
    bottom: 0
  },
  title: {
    fontSize: 20,
    color: '#fff'
  },
  statusBarWrap: {
    height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,
    backgroundColor: '#0af'
  }
});