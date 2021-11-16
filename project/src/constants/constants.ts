import {nanoid} from '@reduxjs/toolkit';
export const STAR_COUNT = 10;
export const PATHNAME_SYMBOL = 7;
export const HOVER_DELAY = 1000;
export const FILMS_REP_STEP = 8;
export const SIMILAR_FILMS_COUNT = 4;
export const MIN_MESSAGE_LENGTH = 50;
export const MAX_MESSAGE_LENGTH = 400;

export const GENRES_ITEMS = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

export const AppRoute = {
  MAIN: '/',
  SIGN_IN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films/:id?',
  ADD_REVIEW: '/films/:id?/review',
  PLAYER: '/player/:id?',
};

export enum AuthorizationStatus {
  AUTH = 'AUTH',
  NOAUTH = 'NO_AUTH',
  UNKNOWN = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  PromoFilm = '/promo',
  CurrentFilm = '/films/',
  SimilarFilms = '/films/:id/similar',
  Review = '/comments/:id',
}

export const ADD_REVIEWS_STATE = {
  COUNT: 8,
  TEXT: 'Review text',
};

export const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December '];

export const STARS = new Array(STAR_COUNT).fill(nanoid());

export const blankFilm = {
  id: 0,
  name: '',
  poster: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  previewVideoLink: '',
  description: '',
  rating: 0,
  scoresCount: 0,
  director: '',
  starring: [],
  runTime: 0,
  genre: '',
  released: 0,
  isFavorite: false,
};

