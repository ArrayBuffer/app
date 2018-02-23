import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';

/**
 * WelcomePage: 启动页面
 */
import WelcomePage from './WelcomePage';

/**
 * Root: 根组件
 */
class Root extends Component {
  static renderScene(route, navigator){
    let Component = route.component;
    return <Component {...route.params} navigator = { navigator }/>
  }
  render(){
    return <Navigator
      initialRoute = {{ component: WelcomePage }}
      renderScene = { (route, navigator) => Root.renderScene(route, navigator)}
    />
  }
}


export default App = ( ) => {
  return <Root/>
};