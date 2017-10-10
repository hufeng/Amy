import React from 'react';
import Scene from './component/scene';
import Button from './component/button';
export default class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (<Scene>
        <Button title="数学" primary onPress={() => navigate('MathScene')}/>
        <Button title="小字条" warnning onPress={() => navigate('WordScene')}/>
      </Scene>);
    }
}
Home.navigationOptions = {
    title: 'Amy的学习😝'
};
