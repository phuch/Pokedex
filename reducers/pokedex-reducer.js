import * as actionTypes from '../constants/action-types';

const initialState = {
    isLoading: true,
    types: [],
    pokemons: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_POKEMON_BY_TYPES_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.GET_POKEMON_TYPES_SUCCESS:
            return {
                ...state,
                types: action.typesName,
                isLoading: false
            }
        case actionTypes.GET_POKEMON_BY_TYPES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pokemons: action.pkm
            }
        default:
            return state
    }
}