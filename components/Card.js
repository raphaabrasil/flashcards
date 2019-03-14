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
`
const CardQuestion = styled.Text`
  color: #111;
  font-size: 18px;
  margin-bottom: 15px;
  text-align: center;
`

export default class Card extends React.Component {
  render() {
    return (
      <CardView>
        <CardQuestion>Is this working?</CardQuestion>
        <Button title='SIM' color='green' onPress={() => console.log('wow')} />
        <View style={{ marginBottom: 10 }} />
        <Button title='NÃO' color='red' onPress={() => alert('wow')} />
      </CardView>
    );
  }
}
