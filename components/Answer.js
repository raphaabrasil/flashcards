import React from 'react';
import { Button, Text, View } from 'react-native';
import styled from 'styled-components/native'

const CardView = styled.View`
  color: red;
  background-color: #eeeeee;
  padding: 20px;
  margin: 0 15px 20px;
  border-radius: 7;
  flex: 1;
  justify-content: center;
`
const CardQuestion = styled.Text`
  color: #111;
  font-size: 18px;
  margin-bottom: 15px;
  text-align: center;
`

export default class Answer extends React.Component {
  render() {
    return (
      <CardView>
        <CardQuestion>Yeah, it's working!</CardQuestion>
        <Button title='SIM' color='green' onPress={() => console.log('wow')} />
        <View style={{ marginBottom: 10 }} />
        <Button title='NÃO' color='red' onPress={() => alert('wow')} />
      </CardView>
    );
  }
}
