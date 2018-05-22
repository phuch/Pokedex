import React from 'react'
import {StyleSheet, View, Image, Text} from 'react-native';
import colors from '../constants/type-colors';
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
    const { pokemon, types } = this.props.navigation.state.params;

    const pkmTypes = pokemon.types.map(type => {return type.type.name});
    const hiddenAbilities = pokemon.abilities.filter(ability => {
      return ability.is_hidden
    }).map(ability => {
      return ability.ability.name;
    });
    const normalAbilities = pokemon.abilities.filter(ability => {
      return !ability.is_hidden
    }).map(ability => {
      return ability.ability.name;
    });

    return (
        <View style={styles.container}>
          <Image
              style={styles.img}
              source={{uri: pokemon.sprites.front_default}}
              resizeMode="contain"
          />
          <View style={styles.types}>
            <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
            {pkmTypes.map(type => {
              return <Text key={type}>{type.toUpperCase()}</Text>
            })}
          </View>
          <View>
            <Text>Weight: {pokemon.weight}</Text>
            <Text>Height: {pokemon.height}</Text>
            <Text>Base exp: {pokemon.base_experience}</Text>
          </View>
          <View>
            <Text style={styles.smallHeader}>Abilities:</Text>
            {hiddenAbilities.map(ability => {
              return <Text key={ability}>{ability} (hidden ability)</Text>
            })}

            {normalAbilities.map(ability => {
              return <Text key={ability}>{ability}</Text>
            })}
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent:'space-around',
    alignItems: 'center'
  },
  img: {
    width: 100,
    height: 100
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 20
  },
  smallHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  types: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default PokemonDetailScreen;
