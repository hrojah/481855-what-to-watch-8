import {ThunkActionResult} from '../types/action';
import {LoadFilms, LoadPromoFilm, RequireAuthorization, RequireLogout} from './action';
import {saveToken, dropToken, Token} from '../service/token';
import {APIRoute, AuthorizationStatus} from '../constants/constants';
import {ServerFilmTypes} from '../types/film';
import {AuthData} from '../types/auth-data';

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

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(RequireAuthorization(AuthorizationStatus.AUTH));
      });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(RequireAuthorization(AuthorizationStatus.AUTH));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(RequireLogout());
  };
