import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import colors from '../constants/type-colors';

const PokemonTypesBar = (props) => {
  const {types, getPokemonByType} = props
  return(
      <FlatList
          horizontal
          style={styles.container}
          data={types}
          renderItem={({ item }) => (
              <Button
                  containerViewStyle={styles.button}
                  title={item.name}
                  color="#fff"
                  backgroundColor={colors[item.name]}
                  borderRadius={30}
                  onPress={() => getPokemonByType(item.id)}
              />
          )}
          keyExtractor={(type) => `${type.id}`}
      />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom:20,
    height: 100
  },
  button: {
    marginRight:5,
    marginLeft:5,
    borderRadius:30,
  }
})


PokemonTypesBar.propTypes = {
  types: PropTypes.arrayOf(PropTypes.shape({})),
  getPokemonByType: PropTypes.func.isRequired
}

export default PokemonTypesBar;
