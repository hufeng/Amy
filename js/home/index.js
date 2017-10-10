import React from 'react';
import Scene from './component/scene';
import Button from './component/button';
export default class Home extends React.Component {
    render() {
        return (<Scene>
        <Button title="数学" type="primary"/>
        <Button title="字母" type="warnning"/>
      </Scene>);
    }
}
