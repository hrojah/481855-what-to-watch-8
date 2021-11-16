import {State} from '../types/state';
import {ActionType, Actions} from '../types/action';
import {adaptToClient} from '../adapter/adapter';
import {FILMS_REP_STEP, AuthorizationStatus} from '../constants/constants';
import {blankFilm} from '../constants/constants';
import {ServerFilmTypes} from '../types/film';

const initialState = {
  genre: 'All genres',
  filmList: [],
  showedFilmsCount: FILMS_REP_STEP,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  promoFilm: blankFilm,
  currentFilm: blankFilm,
  similarFilms: [],
  reviews: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    case ActionType.GetFilms:
      return {...state, filmList: state.filmList};
    case ActionType.ShowMore:
      return {...state, showedFilmsCount: state.showedFilmsCount += FILMS_REP_STEP };
    case ActionType.LoadFilms:
      return {...state, filmList: action.payload.map((film) => adaptToClient(film))};
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload, isDataLoaded: true};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NOAUTH};
    case ActionType.LoadPromoFilm: {
      return {...state, promoFilm: adaptToClient(action.payload)};
    }
    case ActionType.LoadCurrentFilm: {
      return {...state, currentFilm: adaptToClient(action.payload)};
    }
    case ActionType.LoadSimilarFilms: {
      const adaptedSimilarFilms = action.payload.map((similarFilm: ServerFilmTypes) => adaptToClient(similarFilm));
      return {...state, similarFilms: adaptedSimilarFilms};
    }
    case ActionType.LoadReviews: {
      return {...state, reviews: action.payload};
    }
    default:
      return state;
  }
};

export {reducer};
