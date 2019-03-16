import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const DeckItem = styled.View`
  background-color: #ddd;
  padding: 25px 40px;
  margin-bottom: 20px;
  border-radius: 10;
`

const DeckText = styled.Text`
  text-align:center;
  font-size: 20px;
`

export default class DeckCard extends React.Component {
  render() {
    const { title, questionsCount } = this.props

    return(
      <DeckItem>
        <DeckText>{ title }</DeckText>
        <Text style={{textAlign: 'center'}}>{ questionsCount } questions.</Text>
      </DeckItem>
    )
  }
}
