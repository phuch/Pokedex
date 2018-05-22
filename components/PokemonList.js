import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';

import PokemonListItem from './PokemonListItem'

const PokemonList = (props) => {
  const { pokemons, refreshing, onRefresh, handleNavigation, types } = props
  return (
      <FlatList
          refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
          }
          style={styles.container}
          data={pokemons}
          renderItem={({ item }) => (
              <PokemonListItem
                pokemon={item}
                types={types}
                onPress={handleNavigation}
              />
          )}
          keyExtractor={(pokemon) => `${pokemon.id}`}
      />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({})),
}

export default PokemonList;
