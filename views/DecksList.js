import React from 'react'
import { FlatList, TouchableOpacity, Text, View, ScrollView } from 'react-native'
import styled from 'styled-components'
import { getDecks } from '../api'
import DeckCard from '../components/DeckCard'
import { NavigationEvents } from 'react-navigation'
import { setLocalNotification } from '../notification_service'

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
    setLocalNotification()
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

  goToDeckPage = (title, questions) => {
    const { navigate } = this.props.navigation
    navigate('Deck', {
      title,
    })
  }

  createDeck = () => {
    const { navigate } = this.props.navigation
    navigate('CreateDeck', {})
  }

  render () {
    const { loading, decks } = this.state
    const deckIds = Object.keys(decks)

    return (
      <HomeView>
        <NavigationEvents onDidFocus={ this.getAllDecks } />
        { loading && <Text>Loading</Text>  }
        { decks &&
          <ScrollView>
          <FlatList
            data={ deckIds }
            renderItem={ ( { item } ) => (
              <DeckCard
                title={ decks[item].title }
                questions={ decks[item].questions }
                goToDeckPage= { this.goToDeckPage }
              />
            )}
            keyExtractor={(deckId, index) => index.toString()}
          />
          <TouchableOpacity onPress={ this.createDeck }>
            <Text>Create Deck</Text>
          </TouchableOpacity>
          </ScrollView>
        }
      </HomeView>
    )
  }
}
