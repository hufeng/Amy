import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
const Text = styled.Text `
  font-size: 80;
  font-weight: bold;
`;
const Container = styled.View `
  border-width: ${StyleSheet.hairlineWidth};
  border-color: pink;
`;
const PPT = (props) => (<Container>
    <Text>{props.text}</Text>
  </Container>);
export default PPT;
