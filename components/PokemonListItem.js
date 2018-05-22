import React from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity, StyleSheet, Image, Text, View
} from 'react-native'
import colors from '../constants/type-colors';

class PokemonListItem extends React.Component {
  onPress = () => {
    const { pokemon, onPress } = this.props;
    onPress('Pokemon', { pokemon });
  }
  render() {
    const { pokemon } = this.props;
    const pkmTypes = pokemon.types.map(type => {return type.type.name});

    return (
        <TouchableOpacity
            onPress={this.onPress}
            style={styles.container}
        >
          <View>
            <View style={styles.summary}>
              <Image
                  style={{width: 130, height: 130}}
                  source={{uri: pokemon.sprites.front_default}}
              />
              <View style={styles.nameAndTypes}>
                <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
                <View style={styles.types}>
                  {pkmTypes.map(type =>
                      (
                          <Text
                              key={type}
                              style={[styles.typeText, {backgroundColor: colors[type]}]}
                          >
                            {type.toUpperCase()}
                          </Text>
                      )
                  )}
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
    )
  }
}

PokemonListItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#000',
    // borderWidth: StyleSheet.hairlineWidth,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  name: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  types: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20
  },
  typeText: {
    fontWeight: 'bold',
    color: '#FFF',
    padding: 5,
    marginHorizontal: 2
  }
});

export default PokemonListItem;
