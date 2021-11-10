import {FilmTypes, ServerFilmTypes} from '../types/film';

export const adaptToClient = (film: ServerFilmTypes): FilmTypes => (
  {
    id: film.id,
    name: film.name,
    description: film.description,
    rating: film.rating,
    director: film.director,
    starring: film.starring,
    genre: film.genre,
    released: film.released,
    poster: film['poster_image'],
    previewImage: film['preview_image'],
    backgroundImage: film['background_image'],
    backgroundColor: film['background_color'],
    videoLink: film['video_link'],
    previewVideoLink: film['preview_video_link'],
    scoresCount: film['scores_count'],
    runTime: film['run_time'],
    isFavorite: film['is_favorite'],
  }
);
