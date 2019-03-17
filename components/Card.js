import React from 'react';
import { Button, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components/native'
import CardFlip from 'react-native-card-flip';


const CardView = styled.View`
  padding: 20px;
  flex: 1;
  justify-content: center;
`
const CardQuestion = styled.Text`
  color: #fbfef9;
  font-size: 38px;
  margin-bottom: 15px;
  text-align: center;
`

const CardLink = styled.Text`
  text-align: center;
  color: #0E79B2;
  margin-top: 10px;
`

const { height } = Dimensions.get('window')

export default class Card extends React.Component {
  handleVote = ( card, goToNext ) => {
    card.flip()
    goToNext( height )
  }

  render() {
    const { item, goToNext } = this.props

    return (
      <CardFlip ref={ ( card ) => this['card' + item.id] = card } style={{ height: height }}>
        <CardView style={{ backgroundColor: '#F39237' }}>
          <CardQuestion>{ item.question }</CardQuestion>
          <TouchableOpacity onPress={ () => this[`card${item.id}`].flip() } >
            <CardLink>Check the answer!</CardLink>
          </TouchableOpacity>
        </CardView>
        <CardView style={{ backgroundColor: '#0E79B2' }}>
          <CardQuestion>{ item.answer }</CardQuestion>
          <Button title='Just like I tought!' color='green' onPress={ () => this.handleVote( this[`card${item.id}`], goToNext )} />
          <View style={{ marginBottom: 10 }} />
          <Button title='It was not what i was thinking.' color='red' onPress={ () => this.handleVote( this[`card${item.id}`], goToNext ) }/>
        </CardView>
      </CardFlip>
    );
  }
}

