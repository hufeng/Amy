import React from 'react';
import { Relax } from 'plume2';
import { List } from 'immutable';
import Scene from './scene';
import PPT from './ppt';

@Relax
export default class WordShow extends React.Component {
  props: {
    relaxProps?: {
      data: List<Object>;
    };
  };

  static relaxProps = {
    data: 'data'
  };

  render() {
    const { data } = this.props.relaxProps;
    if (data.isEmpty()) {
      return (
        <Scene>
          <PPT text=":(" />
        </Scene>
      );
    }

    return (
      <Scene>
        <PPT text="无与伦比" />
      </Scene>
    );
  }
}
