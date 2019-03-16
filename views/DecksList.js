import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import styled from 'styled-components'
import { getDecks } from '../api'
import DeckCard from '../components/DeckCard'
import {NavigationEvents} from 'react-navigation';

const HomeView = styled.View`
  flex: 1;
  padding: 10px 20px;
`

export default class DecksList extends React.Component {
  static navigationOptions = {
    title: 'Decks List',
  }

  state = {
    loading: true,
    decks: []
  }

  componentDidMount() {
    this.getAllDecks()
  }

  getAllDecks = async() => {
   const decks = await getDecks()
    this.setState( state => ({
      ...state,
      loading: false,
      decks,
    }))
  }

  goToDeckPage = deck => {
    const { navigate } = this.props.navigation
    navigate('Deck', {
      title: deck.title,
      questions: deck.questions,
    })
  }

  createDeck = () => {
    const { navigate } = this.props.navigation
    navigate('CreateDeck', {})
  }
  render () {
    const { loading, decks } = this.state
    return (
      <HomeView>
        <NavigationEvents onDidFocus={ this.getAllDecks } />
        { loading && <Text>Loading</Text>  }
        {  decks && Object.keys(decks).map( (deck, idx) => (
          <TouchableOpacity
            onPress= { () => this.goToDeckPage( decks[deck] ) }
            key={ idx }
          >
            <DeckCard
              title={ decks[deck].title }
              questionsCount={ decks[deck].questions.length }
            />
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={ this.createDeck }>
          <Text>Create Deck</Text>
        </TouchableOpacity>
      </HomeView>
    )
  }
}
