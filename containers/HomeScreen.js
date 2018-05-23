import React from 'react';
import PokemonList from '../components/PokemonList';
import PokemonTypesBar from '../components/PokemonTypesBar';
import {StyleSheet, View, Text} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPokemonTypesAction, getPokemonsAction } from "../actions/pokedex-actions";


class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getPokemonTypes()
  }

  getPokemonTypes = () => {
    const { getPokemonTypesAction } = this.props;
    getPokemonTypesAction();
  };

  getPokemonByType = (typeId) => {
    const { getPokemonsAction } = this.props;
    getPokemonsAction(typeId);
  }

  handleNavigation = (routeName, params) => {
    const { navigation } = this.props
    navigation.navigate(routeName, params)
  }

  render() {
    const {types, pokemons, isLoading } = this.props;
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

const mapStateToProps = (store) => {
    return {
        isLoading: store.pokedexState.isLoading,
        pokemons: store.pokedexState.pokemons,
        types: store.pokedexState.types
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPokemonTypesAction: bindActionCreators(getPokemonTypesAction, dispatch),
        getPokemonsAction: bindActionCreators(getPokemonsAction, dispatch)
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
