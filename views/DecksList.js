import React from 'react'
import { FlatList, TouchableOpacity, Text, View, ScrollView } from 'react-native'
import styled from 'styled-components'
import { getDecks } from '../api'
import DeckCard from '../components/DeckCard'
import { NavigationEvents } from 'react-navigation'
import { setLocalNotification } from '../notification_service'
import { Entypo } from '@expo/vector-icons'

const HomeView = styled.View`
  flex: 1;
  padding: 10px 20px;
  background-color: #8338EC;
`

const CreateButton = styled.TouchableOpacity`
  backgroundColor: #ec38a1;
  width: 65px;
  height: 65px;
  position: absolute;
  bottom: 15px;
  right: 15px;
  border-radius: 100;
  align-items: center;
  justify-content: center;
`

const EmptyText = styled.Text`
  font-size: 30px;
  color: #fff;
  text-align: center;
`

const EmptyView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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
    const deckIds = decks && Object.keys(decks)

    return (
      <HomeView>
        <NavigationEvents onDidFocus={ this.getAllDecks } />
        { loading && <Text>Loading</Text>  }
        { !decks &&
            <EmptyView>
              <EmptyText>You haven't created any deck yet.</EmptyText>
            </EmptyView>
        }
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
        </ScrollView>
        <CreateButton onPress={ this.createDeck }>
          <Entypo name='plus' size={30} color='white' />
        </CreateButton>
      </HomeView>
    )
  }
}
