import {FilmTypes} from './film';
import {AuthorizationStatus} from '../constants/constants';
import {ReviewTypes} from './review';

export type State = {
  genre: string,
  filmList: FilmTypes[];
  showedFilmsCount: number;
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  promoFilm: FilmTypes;
  currentFilm: FilmTypes;
  similarFilms: FilmTypes[];
  reviews: ReviewTypes[];
}
