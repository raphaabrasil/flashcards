import { AsyncStorage } from 'react-native'

const storageKey = 'FLASHCARDS'

export function createDeck ( name ) {
  return AsyncStorage.mergeItem(storageKey, JSON.stringify({
    [name]: {
      title: name,
      questions: [],
    }
  }))
}

export const getDecks = async () => {
  const decks = await AsyncStorage.getItem(storageKey)
  return JSON.parse(decks)
}
