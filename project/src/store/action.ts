import {ActionType, ChangeGenreAction, GetFilmsAction, ShowMoreAction, LoadFilmsAction, RequireAuthorizationAction, RequireLogoutAction, LoadPromoFilmAction, RedirectToRouteAction, LoadCurrentFilmAction, LoadSimilarFilmsAction, LoadReviewsAction} from '../types/action';
import {AuthorizationStatus} from '../constants/constants';
import {ServerFilmsTypes, ServerFilmTypes} from '../types/film';
import {ReviewsTypes} from '../types/review';

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

export const LoadCurrentFilm = (currentFilm: ServerFilmTypes): LoadCurrentFilmAction => ({
  type: ActionType.LoadCurrentFilm,
  payload: currentFilm,
});

export const LoadSimilarFilms = (similarFilms: ServerFilmsTypes): LoadSimilarFilmsAction => ({
  type: ActionType.LoadSimilarFilms,
  payload: similarFilms,
});

export const LoadReviews = (reviews: ReviewsTypes): LoadReviewsAction => ({
  type: ActionType.LoadReviews,
  payload: reviews,
});

export const RequireAuthorization = (authStatus: AuthorizationStatus): RequireAuthorizationAction => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
});

export const RequireLogout = (): RequireLogoutAction => ({
  type: ActionType.RequireLogout,
});

export const RedirectToRoute = (url: string): RedirectToRouteAction => ({
  type: ActionType.RedirectToRoute,
  payload: url,
});
