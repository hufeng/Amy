import React from 'react';
import styled from 'styled-components/native';

const themeColor = props => {
  switch (props.type) {
    case 'primary':
      return { bgColor: '#5cb85c', borderColor: '#4cae4c' };
    case 'warnning':
      return { bgColor: '#f0ad4e', borderColor: '#eea236' };
    default:
      return { bgColor: '#FFF', borderColor: '#ccc' };
  }
};

const Wrapper = styled.TouchableOpacity`
  width: 200;
  height: 200;
  margin-bottom: 20;
  border-radius: 100;
  align-content: center;
  justify-content: center;
  background-color: ${props => themeColor(props).bgColor};
`;

const Text = styled.Text`
  font-size: 24;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

const Button = props => {
  return (
    <Wrapper {...props} activeOpacity={0.7}>
      <Text>{props.title}</Text>
    </Wrapper>
  );
};

export default Button;
