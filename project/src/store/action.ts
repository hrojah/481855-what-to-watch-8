import {ActionType, ChangeGenreAction, GetFilmsAction, ShowMoreAction, LoadFilmsAction, RequireAuthorizationAction, RequireLogoutAction, LoadPromoFilmAction} from '../types/action';
import {AuthorizationStatus} from '../constants/constants';
import {ServerFilmsTypes, ServerFilmTypes} from '../types/film';

export const ChangeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const GetFilms = (): GetFilmsAction => ({
  type: ActionType.GetFilms,
});

export const ShowMore = (): ShowMoreAction => ({
  type: ActionType.ShowMore,
});

export const LoadFilms = (films: ServerFilmsTypes): LoadFilmsAction => ({
  type: ActionType.LoadFilms,
  payload: films,
});

export const LoadPromoFilm = (promoFilm: ServerFilmTypes): LoadPromoFilmAction => ({
  type: ActionType.LoadPromoFilm,
  payload: promoFilm,
});

export const RequireAuthorization = (authStatus: AuthorizationStatus): RequireAuthorizationAction => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
});

export const RequireLogout = (): RequireLogoutAction => ({
  type: ActionType.RequireLogout,
});
