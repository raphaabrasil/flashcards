import DeckPage from './views/DeckPage'
import CreateDeck from './views/CreateDeck'
import DecksList from './views/DecksList'
import {createStackNavigator, createAppContainer} from 'react-navigation'

const MainNavigator = createStackNavigator({
  Home: {screen: DecksList},
  Deck: {screen: DeckPage},
	CreateDeck: {screen: CreateDeck},
});

const App = createAppContainer(MainNavigator)
export default App

