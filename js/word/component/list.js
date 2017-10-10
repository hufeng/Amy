var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from 'react';
import { Relax } from 'plume2';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import Scene from './scene';
const Text = styled.Text `
  font-size: 80;
  font-weight: bold;
`;
const CenterScene = Scene.extend `
  align-items: center;
  justify-content: center;
`;
const PPT = styled.View `
  border-width: ${StyleSheet.hairlineWidth};
  border-color: pink;
`;
let WordShow = class WordShow extends React.Component {
    render() {
        return (<CenterScene>
        <PPT>
          <Text>无聊无聊</Text>
        </PPT>
      </CenterScene>);
    }
};
WordShow.relaxProps = {
    data: 'data'
};
WordShow = __decorate([
    Relax
], WordShow);
export default WordShow;
