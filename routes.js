import DeckPage from './views/DeckPage'
import CreateDeck from './views/CreateDeck'
import CreateQuestion from './views/CreateQuestion'
import DecksList from './views/DecksList'
import QuizPage from './views/QuizPage'

export const routes = {
  Home: {screen: DecksList},
  Deck: {screen: DeckPage},
	CreateDeck: {screen: CreateDeck},
	AddQuestion: {screen: CreateQuestion},
	QuizPage: {screen: QuizPage},
}

