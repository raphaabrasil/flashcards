import React from 'react';
import { Button, Text, View } from 'react-native';
import styled from 'styled-components/native'

const CardView = styled.View`
  color: red;
  background-color: #eeeeee;
  padding: 20px;
  margin: 0 15px 20px;
  border-radius: 7;
  box-shadow: 10px 10px 10px rgba(0,0,0,1);
  text-align: center;
  flex: 1;
  justify-content: center;
`
const CardQuestion = styled.Text`
  color: #111;
  font-size: 28px;
  margin-bottom: 15px;
  text-align: center;
`

const CardLink = styled.Text`
  text-align: center;
  color: blue;
  margin-top: 10px;
`

export default class Card extends React.Component {
  render() {
    return (
      <CardView>
        <CardQuestion>Is this working?</CardQuestion>
        <CardLink>Show me the answer!</CardLink>
      </CardView>
    );
  }
}
