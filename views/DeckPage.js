import React from 'react';
import { View } from 'react-native';
import Card from '../components/Card'

export default class DeckPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Card />
      </View>
    );
  }
}
