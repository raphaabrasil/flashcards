import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const ResultView = styled.View`
  flex: 1;
  height: ${Dimensions.get('window').height};
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
    const { restartQuiz } = this.props
    return (
      <ResultView>
        <ResultText>Parabéns, Nota 10!</ResultText>
        <TouchableOpacity onPress={ restartQuiz } ><Text>Restart Quiz!</Text></TouchableOpacity>
      </ResultView>
    )
  }
}
