import {AuthorizationStatus} from '../constants/constants';
import {ServerFilmsTypes, ServerFilmTypes} from './film';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';
import {ReviewsTypes} from './review';

export enum ActionType {
  ChangeGenre = 'filter/changeGenre',
  GetFilms = 'filter/getFilms',
  ShowMore = 'films-list/showMore',
  LoadFilms = 'data/loadFilms',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  LoadPromoFilm = 'data/loadPromoFilm',
  RedirectToRoute = 'redirectToRoute',
  LoadCurrentFilm = 'data/loadCurrentFIlm',
  LoadSimilarFilms = 'data/loadSimilarFilms',
  LoadReviews = 'data/loadReviews',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
}

export type GetFilmsAction = {
  type: ActionType.GetFilms;
}

export type ShowMoreAction = {
  type: ActionType.ShowMore;
}

export type LoadFilmsAction = {
  type: ActionType.LoadFilms;
  payload: ServerFilmsTypes;
}

export type LoadPromoFilmAction = {
  type: ActionType.LoadPromoFilm;
  payload: ServerFilmTypes;
}

export type LoadCurrentFilmAction = {
  type: ActionType.LoadCurrentFilm;
  payload: ServerFilmTypes;
}

export type LoadSimilarFilmsAction = {
  type: ActionType.LoadSimilarFilms;
  payload: ServerFilmsTypes;
}

export type LoadReviewsAction = {
  type: ActionType.LoadReviews;
  payload: ReviewsTypes;
}

export type RequireAuthorizationAction = {
  type: ActionType.RequireAuthorization;
  payload: AuthorizationStatus;
}

export type RequireLogoutAction = {
  type: ActionType.RequireLogout;
}

export type RedirectToRouteAction = {
  type: ActionType.RedirectToRoute;
  payload: string;
}

export type Actions = ChangeGenreAction | GetFilmsAction | ShowMoreAction | LoadFilmsAction | RequireAuthorizationAction | RequireLogoutAction | LoadPromoFilmAction | RedirectToRouteAction | LoadCurrentFilmAction | LoadSimilarFilmsAction |LoadReviewsAction;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
