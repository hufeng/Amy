import React from 'react';
import { StoreProvider } from 'plume2';
import { Button } from 'react-native';
import Store from './store';
import WordShow from './component/word-show';
import Loading from './component/loading';
import * as e from './effect';

@StoreProvider(Store, { debug: __DEV__ })
export default class WordScene extends React.Component {
  static navigationOptions = () => {
    return {
      title: '小字条🚀',
      headerRight: <Button title="edit" onPress={() => console.log('press')} />
    };
  };

  state: {
    isLoading: boolean;
  };

  componentDidMount() {
    e.onInit();
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }

    return <WordShow />;
  }
}
