import React from 'react';
import styled, { css } from 'styled-components/native';
interface IProps {
  title: string;
  primary?: boolean;
  warnning?: boolean;
}

const Wrapper = styled.TouchableOpacity`
  width: 200;
  height: 200;
  margin-bottom: 20;
  border-radius: 100;
  align-content: center;
  justify-content: center;
  background-color: #fff;
  border-color: #ccc;

  ${(props: IProps) =>
    props.primary &&
    css`
      background-color: #5cb85c;
      border-color: #4cae4c;
    `};

  ${props =>
    props.warnning &&
    css`
      background-color: #f0ad4e;
      border-color: #eea236;
    `};
`;

const Text = styled.Text`
  font-size: 24;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

const Button = (props: IProps) => {
  return (
    <Wrapper {...props} activeOpacity={0.8}>
      <Text>{props.title}</Text>
    </Wrapper>
  );
};

export default Button;
