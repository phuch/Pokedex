import React from 'react';
import PokemonList from '../components/PokemonList';
import PokemonTypesBar from '../components/PokemonTypesBar';
import {StyleSheet, View, Text} from 'react-native';
import getPokemonJSON from '../util/getPokemonJSON';
import { pokeApiUrl } from '../constants/config';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      types: null,
      pokemons: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.getPokemonTypes()
  }

  getPokemonTypes = () => {

    getPokemonJSON(`${pokeApiUrl}/type`)
      .then(types => {
         const typesName = types.results.map((t,index) => {
           const id = t.url.slice(t.url.indexOf('type/') + 5, t.url.length).replace('/','');
           const type = {
             id: id,
             name: t.name
           }
           return type;
         });
         this.setState({
           types: typesName
         })
      })
      .catch(err => console.log(err));
  };

  getPokemonByType = (typeId) => {
    this.setState({
      isLoading: true
    });
    getPokemonJSON(`${pokeApiUrl}/type/${typeId}`)
    .then(type => {
      const pokemons = type.pokemon.splice(0,20).map((pokemon) => {
        return getPokemonJSON(`${pokemon.pokemon.url}`)
      });
      return Promise.all(pokemons);
    })
    .then(pkm => {
      this.setState({
        pokemons: pkm,
        isLoading: false
      })
    })
    .catch(err => console.log(err));
  }

  handleNavigation = (routeName, params) => {
    const { navigation } = this.props
    navigation.navigate(routeName, params)
  }

  render() {
    const { types, pokemons, isLoading } = this.state;
    return (
      <View style={styles.container}>
        <PokemonTypesBar
            types={types}
            getPokemonByType={this.getPokemonByType}
        />
        {pokemons.length == 0 && <Text style={styles.text}>Choose a type to see Pokemons of that type</Text>}
        <PokemonList
            pokemons={pokemons}
            refreshing={isLoading}
            onRefresh={this.getPokemonByType}
            handleNavigation={this.handleNavigation}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: '#000'
  }
})

export default HomeScreen;
