import {ThunkActionResult} from '../types/action';
import {LoadFilms, LoadPromoFilm, RequireAuthorization, RequireLogout, RedirectToRoute, LoadCurrentFilm, LoadSimilarFilms, LoadReviews} from './action';
import {saveToken, dropToken, Token} from '../service/token';
import {APIRoute, AuthorizationStatus, AppRoute} from '../constants/constants';
import {ServerFilmsTypes, ServerFilmTypes} from '../types/film';
import {AuthData} from '../types/auth-data';
import {ReviewsTypes} from '../types/review';
import {AddReviewTypes} from '../types/add-review';

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerFilmTypes[]>(APIRoute.Films);
    dispatch(LoadFilms(data));
  };

export const fetchPromoFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerFilmTypes>(APIRoute.PromoFilm);
    dispatch(LoadPromoFilm(data));
  };

export const fetchCurrentFilmAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerFilmTypes>(`${APIRoute.CurrentFilm}${id}`);
    dispatch(LoadCurrentFilm(data));
  };

export const fetchSimilarFilmsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerFilmsTypes>(APIRoute.SimilarFilms.replace(':id', id.toString()));
    dispatch(LoadSimilarFilms(data));
  };

export const fetchReviewsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ReviewsTypes>(APIRoute.Review.replace(':id', id.toString()));
    dispatch(LoadReviews(data));
  };

export const addReviewAction = (id: number, review: AddReviewTypes): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.post<ReviewsTypes>(APIRoute.Review.replace(':id', id.toString()), review);
    dispatch(LoadReviews(data));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const result: any = await api.get(APIRoute.Login);
    if (result === 200) {
      dispatch(RequireAuthorization(AuthorizationStatus.AUTH));
      dispatch(RedirectToRoute(AppRoute.MAIN));
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(RequireAuthorization(AuthorizationStatus.AUTH));
    dispatch(RedirectToRoute(AppRoute.MAIN));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(RequireLogout());
  };
