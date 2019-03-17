import DeckPage from './views/DeckPage'
import CreateDeck from './views/CreateDeck'
import CreateQuestion from './views/CreateQuestion'
import DecksList from './views/DecksList'
import QuizPage from './views/QuizPage'
import {createStackNavigator, createAppContainer} from 'react-navigation'

const MainNavigator = createStackNavigator({
  Home: {screen: DecksList},
  Deck: {screen: DeckPage},
	CreateDeck: {screen: CreateDeck},
	AddQuestion: {screen: CreateQuestion},
	QuizPage: {screen: QuizPage},
});

const App = createAppContainer(MainNavigator)
export default App

