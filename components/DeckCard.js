import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const DeckItem = styled.View`
  background-color: #eee;
  padding: 25px 40px;
  margin: 10px 0;
  border-radius: 10;
`

const DeckText = styled.Text`
  text-align:center;
  font-size: 20px;
`

export default class DeckCard extends React.Component {
  render() {
    const { title, questions, goToDeckPage } = this.props

    return(
      <TouchableOpacity
        onPress= { () => goToDeckPage( title, questions ) }
      >
        <DeckItem>
          <DeckText>{ title }</DeckText>
          <Text style={{textAlign: 'center'}}>{ questions.length } questions.</Text>
        </DeckItem>
      </TouchableOpacity>
    )
  }
}
