import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import Scene from './scene';

const Loading = () => (
  <Scene>
    <ActivityIndicator size="small" />
  </Scene>
);

export default Loading;
