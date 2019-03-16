import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DeckPage from './views/DeckPage'
import CreateDeck from './views/CreateDeck'
import DecksList from './views/DecksList'

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <DecksList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
});
