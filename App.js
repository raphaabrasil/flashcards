import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DeckPage from './views/DeckPage'
import CreateDeck from './views/CreateDeck'

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <CreateDeck />
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
