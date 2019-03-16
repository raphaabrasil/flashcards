import React from 'react'
import { Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Dimensions } from 'react-native'
import styled from 'styled-components'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createDeck } from '../api'

const CreateView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #8338EC;
  padding: 0 30px;
`

const CreateInput = styled.TextInput`
  width: ${Dimensions.get('window').width - 80};
  height: 40px;
  color: white;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
  margin: 30px 0;
  font-size: 18px;
`

const CreateButton = styled.TouchableOpacity`
  backgroundColor: #ec38a1;
  padding: 10px 50px;
`

const ButtonText = styled.Text`
  color: white;
  text-transform: uppercase;
  font-size: 14px;
`

export default class CreateDeck extends React.Component {
  static navigationOptions = {
    title: 'Create Deck'
  }
  state = {
    input: '',
  }

  handleTextChange = input => {
    this.setState({
      input,
    })
  }

  handleCreateDeck = () => {
    const { navigate } = this.props.navigation
    createDeck( this.state.input )
    navigate('Home')
  }

  render() {
    const { input } = this.state

    return (
      <CreateView behavior='padding'>
        <MaterialCommunityIcons
          name='cards'
          size={150}
          color='white'
        />
        <CreateInput
          value={ input }
          onChangeText={ this.handleTextChange }
          placeholder='Insert the name of your new deck'
          placeholderTextColor='#ccc'
        />
        <CreateButton
          onPress={ this.handleCreateDeck }
        >
          <ButtonText>Create Deck</ButtonText>
        </CreateButton>
      </CreateView>
    )
  }
}

