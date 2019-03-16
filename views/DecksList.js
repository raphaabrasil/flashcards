import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import styled from 'styled-components'
import { getDecks } from '../api'
import DeckCard from '../components/DeckCard'

const HomeView = styled.View`
  flex: 1;
  padding: 10px 20px;
`

export default class DecksList extends React.Component {
  state = {
    loading: true,
    decks: []
  }
  async componentDidMount() {
    const decks = await getDecks()
    this.setState( state => ({
      ...state,
      loading: false,
      decks,
    }))
  }

  render () {
    console.log(JSON.stringify(this.state))
    const { loading, decks } = this.state
    return (
      <HomeView>
        { loading && <Text>Loading</Text>  }
        {  decks && Object.keys(decks).map( deck => (
          <DeckCard
            title={ decks[deck].title }
            questionsCount={ decks[deck].questions.length }
          />
        ))}
        <TouchableOpacity onPress={ this.createDeck }>
          <Text>Create Deck</Text>
        </TouchableOpacity>
      </HomeView>
    )
  }
}
