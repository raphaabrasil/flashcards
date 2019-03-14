import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from './components/Card'

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Card />
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
