import {State} from '../types/state';
import {ActionType, Actions} from '../types/action';
import {films} from '../mocks/films';

const initialState = {
  genre: 'All genres',
  filmList: films,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    case ActionType.GetFilms:
      return {...state, filmList: films};
    default:
      return state;
  }
};

export {reducer};
