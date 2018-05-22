import React from 'react'
import {StyleSheet, View, Image, Text} from 'react-native';
import PokemonInfo from '../components/PokemonInfo';

class PokemonDetailScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerTitle: params ? params.pokemon.name.toUpperCase() : 'Detail',
    }
  };

  render() {

    // const url = props.navigation.state.params.url
    // const { navigation: { state: { params: { url } } } } = props
    const { pokemon } = this.props.navigation.state.params;

    return (
      <PokemonInfo pokemon={pokemon}/>
    )
  }
}

export default PokemonDetailScreen;
