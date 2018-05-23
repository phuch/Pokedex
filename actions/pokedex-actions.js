import * as actionTypes from '../constants/action-types';
import {pokeApiUrl} from "../constants/config";
import getPokemonJSON from "../util/getPokemonJSON";

export const getPokemonTypesAction = () => {
    return (dispatch) => {

        //change types state
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
                dispatch({
                    type: actionTypes.GET_POKEMON_TYPES_SUCCESS, typesName
                })
            })
            .catch(err => console.log(err));
    }
}

export const getPokemonsAction = (typeId) => {
    return (dispatch) => {
        //change isLoading state
        dispatch({
            type: actionTypes.GET_POKEMON_BY_TYPES_REQUEST
        })

        //change pokemons state
        getPokemonJSON(`${pokeApiUrl}/type/${typeId}`)
            .then(type => {
                const pokemons = type.pokemon.splice(0, 50).map((pokemon) => {
                    return getPokemonJSON(`${pokemon.pokemon.url}`)
                });
                return Promise.all(pokemons);
            })
            .then((pkm) => {
                dispatch({
                    type: actionTypes.GET_POKEMON_BY_TYPES_SUCCESS, pkm
                })
            })
            .catch(err => console.log(err));
    }
}