import { createStackNavigator } from 'react-navigation';

import PokemonDetailScreen from '../containers/PokemonDetailScreen';
import HomeScreen from '../containers/HomeScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Pokemon: {
    screen: PokemonDetailScreen
  }
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerBackTitle: 'Back',
    headerTitle: 'ポケモンデックス'
  }
});

export default AppNavigator;
