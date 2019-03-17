import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { Header } from 'react-navigation'

const height = Dimensions.get('window').height - Header.HEIGHT

const ResultView = styled.View`
  flex: 1;
  height: ${height};
  justify-content: center;
  align-items: center;
  background-color: #74B3CE;
`

const ResultText = styled.Text`
  font-size: 28px;
  color: #fff;
`

export default class Result extends React.Component {
  render() {
    const { restartQuiz, pontuation } = this.props
    return (
      <ResultView>
        <ResultText>Your pontuation was: { pontuation }</ResultText>
        <TouchableOpacity onPress={ restartQuiz } ><Text>Restart Quiz!</Text></TouchableOpacity>
      </ResultView>
    )
  }
}
