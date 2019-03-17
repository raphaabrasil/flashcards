import React from 'react';
import { Button, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components/native'
import CardFlip from 'react-native-card-flip'
import { Header } from 'react-navigation'

const CardView = styled.View`
  padding: 20px;
  flex: 1;
  justify-content: center;
`
const CardQuestion = styled.Text`
  color: #fbfef9;
  font-size: 38px;
  margin: 15px 0;
  text-align: center;
`

const CardLink = styled.Text`
  text-align: center;
  color: #0E79B2;
  margin-top: 10px;
`

const height = Dimensions.get('window').height - Header.HEIGHT


export default class Card extends React.Component {
  handleVote = ( card, goToNext, correctAnswer ) => {
    card.flip()
    goToNext( height, correctAnswer)
  }

  render() {
    const { item, index, questionsCount, goToNext } = this.props

    return (
      <CardFlip ref={ ( card ) => this['card' + item.id] = card } style={{ height: height }}>
        <CardView style={{ backgroundColor: '#F39237' }}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>{`Question ${index + 1} of ${questionsCount} `}</Text>
          <CardQuestion>{ item.question }</CardQuestion>
          <TouchableOpacity onPress={ () => this[`card${item.id}`].flip() } >
            <CardLink>Check the answer!</CardLink>
          </TouchableOpacity>
        </CardView>
        <CardView style={{ backgroundColor: '#0E79B2' }}>
          <CardQuestion>{ item.answer }</CardQuestion>
          <Button title='Just like I tought!' color='green' onPress={ () => this.handleVote( this[`card${item.id}`], goToNext, true )} />
          <View style={{ marginBottom: 10 }} />
          <Button title='It was not what i was thinking.' color='red' onPress={ () => this.handleVote( this[`card${item.id}`], goToNext, false ) }/>
        </CardView>
      </CardFlip>
    );
  }
}

