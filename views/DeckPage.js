import React from 'react';
import { View, Text, ScrollView, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import Card from '../components/Card'

const deck = { questions: [
  {
    id: 0,
    question: 'What is React?',
    answer: 'A library for managing user interfaces'
  },
  {
    id: 1,
    question: 'Where do you make Ajax requests in React?',
    answer: 'The componentDidMount lifecycle event'
  }
]}

export default class DeckPage extends React.Component {
  state = {
    scrollHeight: 0,
  }

  scrollTo = scrollSize => {
    this.setState( state => ({
      ...state,
      scrollHeight: state.scrollHeight + scrollSize,
    }), () =>{
      this.scroll.scrollTo({x: 0, y: this.state.scrollHeight, animated: true});
    })
  }

  restartQuiz = () => {
    this.setState( state => ({
      scrollHeight: 0,
    }), () => {
      this.scrollTo(0)
    })
  }

  render() {
    return (
      <ScrollView
        ref={(c) => this.scroll = c}
        scrollEnabled={false}
        style={{ flex: 1 }}
      >
        <FlatList
          data={ deck.questions }
          renderItem={ ( { item } ) => <Card item={item} goToNext={ this.scrollTo }/> }
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={{ flex: 1, height: Dimensions.get('window').height, justifyContent: 'center', alignItems: 'center', backgroundColor: '#74B3CE' }}>
          <Text style={{ fontSize: 28, color: '#fff' }}>Parabéns, Nota 10!</Text>
          <TouchableOpacity onPress={ this.restartQuiz } ><Text>Restart Quiz!</Text></TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
