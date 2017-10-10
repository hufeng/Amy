var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from 'react';
import { StoreProvider } from 'plume2';
import { Button } from 'react-native';
import Store from './store';
import WordShow from './component/word-show';
import Loading from './component/loading';
import * as e from './effect';
let WordScene = class WordScene extends React.Component {
    componentDidMount() {
        e.onInit();
    }
    render() {
        if (this.state.isLoading) {
            return <Loading />;
        }
        return <WordShow />;
    }
};
WordScene.navigationOptions = () => {
    return {
        title: '小字条🚀',
        headerRight: <Button title="edit" onPress={() => console.log('press')}/>
    };
};
WordScene = __decorate([
    StoreProvider(Store, { debug: __DEV__ })
], WordScene);
export default WordScene;
