import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DeckPage from './views/DeckPage'

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <DeckPage />
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
