import React from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity, StyleSheet, Image, Text, View
} from 'react-native'

class PokemonListItem extends React.Component {
  onPress = () => {
    const { pokemon, onPress, types} = this.props;
    onPress('Pokemon', { pokemon, types });
  }
  render() {
    const { pokemon } = this.props;

    return (
        <TouchableOpacity
            onPress={this.onPress}
            style={styles.item}
        >
          <Image
              style={{width: 130, height: 130}}
              source={{uri: pokemon.sprites.front_default}}
          />
          <Text style={styles.header}>{pokemon.name.toUpperCase()}</Text>
        </TouchableOpacity>
    )
  }
}

PokemonListItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderColor: '#000',
    // borderWidth: StyleSheet.hairlineWidth,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15
  },
  header: {
    marginLeft: 10,
    fontWeight: 'bold',
  }
})

export default PokemonListItem;
