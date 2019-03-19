import React, { PureComponent } from 'react';
import { View, Text, ScrollView, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import Card from '../components/Card'
import Result from '../components/Result'

export default class DeckPage extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Quiz'),
    };
  };

  state = {
    scrollHeight: 0,
    questionsCount: 0,
    correctCount: 0,
  }

  componentDidMount() {
    const { navigation } = this.props
    const questions = navigation.getParam('questions', [])
    const questionsCount = questions.length
    this.setState( state => ({
      ...state,
      questionsCount,
    }))
  }

  goToNext = (scrollSize, correctAnswer) => {
    this.setState( state => ({
      ...state,
      correctCount: correctAnswer ? state.correctCount + 1 : state.correctCount,
      scrollHeight: state.scrollHeight + scrollSize,
    }), () => {
      this.scroll.scrollTo({x: 0, y: this.state.scrollHeight, animated: true});
    })
  }

  restartQuiz = () => {
    this.setState( state => ({
      ...state,
      scrollHeight: 0,
      correctCount: 0,
    }), () => {
      this.goToNext(0, false)
    })
  }

  getPontuation = () => {
    const { correctCount, questionsCount } = this.state
    return Math.round(correctCount / questionsCount * 1000) / 100
  }

  render() {
    const questions = this.props.navigation.getParam('questions', [])
    const pontuation = this.getPontuation()

    return (
      <ScrollView
        ref={(c) => this.scroll = c}
        scrollEnabled={false}
        style={{ flex: 1 }}
      >
        <FlatList
          data={ questions }
          renderItem={ ( { item, index } ) => (
            <Card
              item={item}
              index={ index }
              questionsCount={ questions.length }
              goToNext={ this.goToNext }
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <Result pontuation={ pontuation } restartQuiz={ this.restartQuiz } />
      </ScrollView>
    );
  }
}
