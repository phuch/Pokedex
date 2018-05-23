import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from './../constants/type-colors';

const PokeInfo = (props) => {
  const { pokemon } = props;
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
  const stats = pokemon.stats.map(stat => {
    const statObject = {
      id: Date.now() + Math.random(),
      name: stat.stat.name,
      stat: stat.base_stat
    }
    return statObject;
  });


  return (
      <View style={styles.container}>
        <View style={styles.avatarAndStats}>
          <View style={styles.avatar}>
            <Image
                style={styles.img}
                source={{uri: pokemon.sprites.front_default}}
                resizeMode="contain"
            />
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
          <View style={styles.info}>
            <View>
              <Text style={styles.infoText}>Weight: {pokemon.weight}</Text>
              <Text style={styles.infoText}>Height: {pokemon.height}</Text>
              <Text style={styles.infoText}>Base exp: {pokemon.base_experience}</Text>
            </View>
          </View>
        </View>
        <View style={styles.stat}>
          <Text style={styles.header}>Stats:</Text>
          {stats.map(stat =>
              (
                  <Text
                      key={stat.id}
                      style={styles.abilityText}
                  >
                    {stat.name}: {stat.stat}
                  </Text>
              )
          )}
        </View>
        <View>
          <Text style={styles.header}>Abilities:</Text>
          {hiddenAbilities.map(ability =>
            (
                <Text
                    key={ability}
                    style={styles.abilityText}
                >
                {ability} (hidden ability)
              </Text>
            )
          )}

          {normalAbilities.map(ability =>
            (
                <Text
                    key={ability}
                    style={styles.abilityText}
                >
                  {ability}
                </Text>
            )
          )}
        </View>
      </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column',
    backgroundColor: '#FFF'
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: 'center'
  },
  img: {
    height: 200,
    width: 200,
    marginBottom: 15
  },
  avatarAndStats: {
    paddingHorizontal: 40,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30
  },
  avatar: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  types: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  typeText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFF',
    padding: 5,
    marginHorizontal: 2
  },
  info: {
    marginTop: 15,
  },
  infoText: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: 'center',
  },
  stat: {
    marginBottom: 15
  },
  abilityText: {
    fontSize: 17,
    textAlign: 'center'
  }
});

export default PokeInfo;
