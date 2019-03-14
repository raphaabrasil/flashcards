import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DeckPage from './views/DeckPage'
import Answer from './components/Answer'

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Answer />
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
