export const STAR_COUNT = 10;
const MY_LIST_FILMS_COUNT = 10;
const MORE_LIKE_THIS_FILMS_COUNT = 4;

export const promoInformation = {
  GENRE: 'Drama',
  DATE: '2014',
  NAME: 'The Grand Budapest Hotel',
};

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

export const films = [
  {name: 'Fantastic Beasts: The Crimes of Grindelwald', poster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg', id: Math.random()},
  {name: 'Bohemian Rhapsody', poster: 'img/bohemian-rhapsody.jpg', id: Math.random()},
  {name: 'Macbeth', poster: 'img/macbeth.jpg', id: Math.random()},
  {name: 'Aviator', poster: 'img/aviator.jpg', id: Math.random()},
  {name: 'We need to talk about Kevin', poster: 'img/we-need-to-talk-about-kevin.jpg', id: Math.random()},
  {name: 'What We Do in the Shadows', poster: 'img/what-we-do-in-the-shadows.jpg', id: Math.random()},
  {name: 'Revenant', poster: 'img/revenant.jpg', id: Math.random()},
  {name: 'Johnny English', poster: 'img/johnny-english.jpg', id: Math.random()},
  {name: 'Shutter Island', poster: 'img/shutter-island.jpg', id: Math.random()},
  {name: 'Pulp Fiction', poster: 'img/pulp-fiction.jpg', id: Math.random()},
  {name: 'No Country for Old Men', poster: 'img/no-country-for-old-men.jpg', id: Math.random()},
  {name: 'Snatch', poster: 'img/snatch.jpg', id: Math.random()},
  {name: 'Moonrise Kingdom', poster: 'img/moonrise-kingdom.jpg', id: Math.random()},
  {name: 'Seven Years in Tibet', poster: 'img/seven-years-in-tibet.jpg', id: Math.random()},
  {name: 'Midnight Special', poster: 'img/midnight-special.jpg', id: Math.random()},
  {name: 'War of the Worlds', poster: 'img/war-of-the-worlds.jpg', id: Math.random()},
  {name: 'Dardjeeling Limited', poster: 'img/dardjeeling-limited.jpg', id: Math.random()},
  {name: 'Orlando', poster: 'img/orlando.jpg', id: Math.random()},
  {name: 'Mindhunter', poster: 'img/mindhunter.jpg', id: Math.random()},
  {name: 'Midnight Special', poster: 'img/midnight-special.jpg', id: Math.random()},
];

export const reviews = [
  {rating: 8.9, comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&#39;s funniest and most exquisitely designed movies in years.', date: new Date(), user: {id: Math.random(), name: 'Kate Muir'}, id: Math.random()},
  {rating: 8.9, comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&#39;s funniest and most exquisitely designed movies in years.', date: new Date(), user: {id: Math.random(), name: 'Kate Muir'}, id: Math.random()},
  {rating: 8.9, comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&#39;s funniest and most exquisitely designed movies in years.', date: new Date(), user: {id: Math.random(), name: 'Kate Muir'}, id: Math.random()},
];

export const myFilmsList = films.slice(MY_LIST_FILMS_COUNT);

export const moreLikeThisFilms = films.slice(MORE_LIKE_THIS_FILMS_COUNT);

export const AppRoute = {
  MAIN: '/',
  SIGN_IN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films/:id?',
  ADD_REVIEW: '/films/:id?/review',
  PLAYER: '/player/:id?',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NOAUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};
