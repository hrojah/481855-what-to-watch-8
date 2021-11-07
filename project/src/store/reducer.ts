import {State} from '../types/state';
import {ActionType, Actions} from '../types/action';
import {films} from '../mocks/films';
import {FILMS_REP_STEP} from '../constants/constants';

const initialState = {
  genre: 'All genres',
  filmList: films,
  showedFilmsCount: FILMS_REP_STEP,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    case ActionType.GetFilms:
      return {...state, filmList: films};
    case ActionType.ShowMore:
      return {...state, showedFilmsCount: state.showedFilmsCount += FILMS_REP_STEP };
    default:
      return state;
  }
};

export {reducer};
