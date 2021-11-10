import {FilmTypes} from './film';
import {AuthorizationStatus} from '../constants/constants';

export type State = {
  genre: string,
  filmList: FilmTypes[];
  showedFilmsCount: number;
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  promoFilm: FilmTypes;
}
