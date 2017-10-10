import React from 'react';
import Scene from './component/scene';
import Button from './component/button';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Amy的学习😝'
  };

  render() {
    return (
      <Scene>
        <Button title="数学" primary />
        <Button title="汉字" warnning />
      </Scene>
    );
  }
}
